import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { CurrencyCode, shopConfig, StringItem, stringCatalog } from "./data/shop";

type Page = "prices" | "profile" | "sponsor";
type Language = "en" | "zh";

type OrderDetails = {
  name: string;
  phone: string;
  color: string;
  tension: string;
};

type RateState = {
  currency: CurrencyCode;
  rate: number;
  status: "loading" | "live" | "fallback";
  updatedAt?: string;
};

const pageOrder: Page[] = ["prices", "profile", "sponsor"];
const priorityStringIds = ["yonex-bg80", "yonex-bgxb63", "yonex-bg80p", "victor-vbs-66n"];

const orderedStringCatalog = [...stringCatalog].sort((a, b) => {
  const aIndex = priorityStringIds.indexOf(a.id);
  const bIndex = priorityStringIds.indexOf(b.id);

  if (aIndex !== -1 || bIndex !== -1) {
    return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) -
      (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
  }

  if (a.serviceOnly && !b.serviceOnly) return 1;
  if (!a.serviceOnly && b.serviceOnly) return -1;

  return 0;
});

const copy = {
  en: {
    desk: "London stringing service",
    navPrices: "Price",
    navJimmy: "Jimmy",
    navSponsor: "Team",
    languageLabel: "Switch to Chinese",
    heroEyebrow: "Service highlights",
    heroPoints: ["48-hour return", "Competition-level stringing", "Craftsmanship"],
    rateLoading: "Updating exchange rate...",
    rateReady: "Rate ready",
    rateUpdated: "Rate updated",
    rateFallback: "Using fallback rate, live update unavailable",
    selectedString: "Selected string",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone",
    phonePlaceholder: "Mobile number",
    stringColor: "String color",
    tension: "Tension",
    required: "Please complete all required fields.",
    reviewOrder: "Review order",
    orderReview: "Order review",
    price: "Price",
    color: "Color",
    pay: "Pay with WeChat",
    edit: "Edit details",
    profileEyebrow: "Stringer profile",
    galleryEyebrow: "Gallery",
    profileIntroStart: "A Yonex S-tier stringer ",
    profileIntroNames: "Lin Dan, Viktor Axelsen, Harvey Jiang, and Kento Momota",
    profileIntroEnd:
      ". He was born in Hunan and raised in Shenzhen, now he is under the guidance of Liu Xin.",
    sponsorEyebrow: "MEET THE TEAM",
    teamMembers: [
      { name: "Handsome Xie", role: "Producer of Jimmy Xie" },
      { name: "Harvey Jiang", role: "The Lin Dan of Shunde." },
      { name: "Qin Easy", role: "Producer of Jimmy Xie" },
      { name: "Brother Liu", role: "Supplier of GPU" }
    ],
    craftsmanship: "Craftsmanship",
    wechat: "WeChat:",
    x: "X:"
  },
  zh: {
    desk: "伦敦穿线服务",
    navPrices: "价格",
    navJimmy: "Jimmy",
    navSponsor: "团队",
    languageLabel: "切换到英文",
    heroEyebrow: "服务特点",
    heroPoints: ["48小时内取拍", "比赛级穿线", "工匠精神"],
    rateLoading: "正在更新汇率...",
    rateReady: "价格已就绪",
    rateUpdated: "汇率更新",
    rateFallback: "实时汇率不可用，正在使用备用汇率",
    selectedString: "已选球线",
    name: "姓名",
    namePlaceholder: "请输入姓名",
    phone: "电话",
    phonePlaceholder: "请输入手机号",
    stringColor: "球线颜色",
    tension: "磅数",
    required: "请填写所有必填信息。",
    reviewOrder: "确认订单",
    orderReview: "订单确认",
    price: "价格",
    color: "颜色",
    pay: "微信支付",
    edit: "修改信息",
    profileEyebrow: "穿线师介绍",
    galleryEyebrow: "照片",
    profileIntroStart: "尤尼克斯S级穿线师，曾为",
    profileIntroNames: "林丹、安塞龙、顺德林丹和桃田贤斗",
    profileIntroEnd: "穿线，服务超10,000名客户，广受好评。生于湖南，长于深圳，目前师从刘鑫。",
    sponsorEyebrow: "我们的团队",
    sponsorTitle: "团队成员",
    sponsorBody: "这里预留给之后添加店内其他成员、合作伙伴和团队介绍。",
    sponsorNote: "后续可以继续添加成员照片、简介和联系方式。",
    teamMembers: [
      { name: "谢英俊", role: "Jimmy Xie的生产商" },
      { name: "凡神", role: "顺德林丹" },
      { name: "勤姐", role: "Jimmy Xie的生产商" },
      { name: "柳哥", role: "GPU提供商" }
    ],
    craftsmanship: "工匠精神",
    wechat: "微信：",
    x: "X："
  }
} as const;

const featureCopy: Record<string, Record<Language, string>> = {
  "yonex-bg65": { en: "Durable string, very hard-wearing", zh: "耐打线，很耐打" },
  "yonex-bg65ti": { en: "Durable string with a firm hitting feel", zh: "耐打线，打感偏硬" },
  "yonex-bg66u": { en: "High-repulsion string with a crisp sound", zh: "高弹线，声音清脆" },
  "yonex-bg66f": { en: "High-repulsion string with excellent feel", zh: "高弹线，手感极佳" },
  "yonex-bg80": { en: "Medium-repulsion string with a firm hitting feel", zh: "中弹线，打感硬朗" },
  "yonex-bg80p": { en: "High-repulsion string with a firm hitting feel", zh: "高弹线，打感硬朗" },
  "yonex-bgxb68": { en: "Durable hard string with excellent tension retention", zh: "耐打线，保磅表现优秀" },
  "yonex-bgxb63": {
    en: "Super-repulsion string, firm feel, crisp sound, and strong tension retention",
    zh: "超弹线，打感硬朗，声音清脆，保磅出色"
  },
  "yonex-bgab": { en: "Super-repulsion string with a polished, premium feel", zh: "超弹线，手感完美" },
  "victor-vbs-66n": { en: "High-repulsion string with a crisp hitting feel", zh: "高弹线，打感清脆" }
  ,
  "bring-your-own-string": { en: "Labour fee for customer-supplied string", zh: "客户自带线，仅收手工费" }
};

const badgeLabels: Record<string, Record<Language, string>> = {
  Durability: { en: "Durability", zh: "耐打" },
  Firm: { en: "Firm", zh: "硬朗" },
  Repulsion: { en: "Repulsion", zh: "高弹" },
  Feel: { en: "Feel", zh: "手感" },
  Power: { en: "Power", zh: "力量" },
  Retention: { en: "Retention", zh: "保磅" },
  Premium: { en: "Premium", zh: "高端" },
  AeroBite: { en: "AeroBite", zh: "混合线" },
  Control: { en: "Control", zh: "控制" }
  ,
  Labour: { en: "Labour", zh: "手工费" }
};

const colorLabels: Record<string, Record<Language, string>> = {
  White: { en: "White", zh: "白色" },
  Yellow: { en: "Yellow", zh: "黄色" },
  "Fluorescent Yellow": { en: "Fluorescent Yellow", zh: "荧光黄" },
  Red: { en: "Red", zh: "红色" },
  "Bright Pink": { en: "Bright Pink", zh: "亮粉色" },
  Pink: { en: "Pink", zh: "粉色" },
  "Light Blue": { en: "Light Blue", zh: "浅蓝色" },
  "Aqua Blue": { en: "Aqua Blue", zh: "水蓝色" },
  "Lavender Purple": { en: "Lavender Purple", zh: "薰衣草紫" },
  Black: { en: "Black", zh: "黑色" },
  "White / Red": { en: "White / Red", zh: "白红色" },
  "White / Blue": { en: "White / Blue", zh: "白蓝色" },
  "Mint Green": { en: "Mint Green", zh: "薄荷绿" },
  "Light Pink": { en: "Light Pink", zh: "浅粉色" },
  Orange: { en: "Orange", zh: "橙色" },
  "Own string": { en: "Own string", zh: "自带线" }
};

function currencyForLanguage(language: Language): CurrencyCode {
  return language === "zh" ? "CNY" : "GBP";
}

function formatPrice(amount: number, currency: CurrencyCode) {
  const locale = currency === "CNY" ? "zh-CN" : "en-GB";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "CNY" ? 0 : 2
  }).format(amount);
}

function getPriceRangeCny(item: StringItem) {
  const prices = item.colorOptions.map((option) => option.basePriceCny);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

function formatItemPrice(item: StringItem, rateState: RateState) {
  const { min, max } = getPriceRangeCny(item);
  const minPrice = formatPrice(min * rateState.rate, rateState.currency);
  const maxPrice = formatPrice(max * rateState.rate, rateState.currency);

  return min === max ? minPrice : `${minPrice}–${maxPrice}`;
}

function getColorTone(color: string) {
  const normalized = color.toLowerCase();

  if (normalized.includes("yellow") || normalized.includes("gold")) return "yellow";
  if (normalized.includes("blue") || normalized.includes("turquoise") || normalized.includes("aqua")) return "blue";
  if (normalized.includes("pink")) return "pink";
  if (normalized.includes("red")) return "red";
  if (normalized.includes("green")) return "green";
  if (normalized.includes("purple") || normalized.includes("lavender")) return "purple";
  if (normalized.includes("orange")) return "orange";
  if (normalized.includes("black")) return "black";
  return "white";
}

function labelForColor(color: string, language: Language) {
  return colorLabels[color]?.[language] ?? color;
}

function labelForBadge(badge: string | undefined, language: Language) {
  if (!badge) return "";
  return badgeLabels[badge]?.[language] ?? badge;
}

function displayItemName(item: StringItem, language: Language) {
  if (item.serviceOnly && language === "zh") return "自带线";
  return item.name;
}

function displayGauge(item: StringItem, language: Language) {
  if (item.serviceOnly) return language === "zh" ? "手工费" : "";
  return item.gauge;
}

function displayModelName(item: StringItem, language: Language) {
  if (item.serviceOnly) return displayItemName(item, language);
  return item.name.replace(/^Yonex\s+/i, "").replace(/^Victor\s+/i, "");
}

function brandLogoForItem(item: StringItem) {
  return shopConfig.brandLogos[item.brand as keyof typeof shopConfig.brandLogos] ?? "";
}

function StringIdentity({ item, language }: { item: StringItem; language: Language }) {
  const logo = brandLogoForItem(item);
  const rawName = displayModelName(item, language);
  // "Bring your own/string" → 分成两行：第一行 "Bring your own"，第二行 "string"
  const parts = item.id === "bring-your-own-string" && language === "en"
    ? rawName.split("/")
    : null;

  return (
    <span className="string-identity">
      {!item.serviceOnly && logo && (
        <img
          className={`brand-logo brand-${item.brand.toLowerCase()}`}
          src={logo}
          alt={item.brand}
        />
      )}
      <span className="string-name-text">
        {parts
          ? parts.map((p, i) => (
              <span key={i} className="string-name-line">{p}</span>
            ))
          : rawName}
      </span>
    </span>
  );
}

let closeSound: HTMLAudioElement | null = null;
let profileTapSound: HTMLAudioElement | null = null;
let profileTapPlayToken = 0;

function playCloseSound() {
  try {
    if (!closeSound) {
      closeSound = new Audio(shopConfig.closeSoundSrc);
      closeSound.preload = "auto";
      closeSound.volume = 0.8;
    }

    closeSound.currentTime = 0;
    void closeSound.play().catch(() => {});
  } catch {
    // Mobile browsers can refuse media playback in some modes; closing should still work.
  }
}

async function playProfileTapSoundTriple() {
  const token = ++profileTapPlayToken;

  try {
    if (!profileTapSound) {
      profileTapSound = new Audio(shopConfig.profileTapSoundSrc);
      profileTapSound.preload = "auto";
      profileTapSound.volume = 0.92;
    }

    for (let index = 0; index < 3; index += 1) {
      if (token !== profileTapPlayToken) return;

      await new Promise<void>((resolve, reject) => {
        const sound = profileTapSound;
        if (!sound) {
          resolve();
          return;
        }

        const finish = () => {
          cleanup();
          resolve();
        };
        const fail = () => {
          cleanup();
          reject();
        };
        const cleanup = () => {
          sound.removeEventListener("ended", finish);
          sound.removeEventListener("error", fail);
        };

        sound.currentTime = 0;
        sound.addEventListener("ended", finish, { once: true });
        sound.addEventListener("error", fail, { once: true });
        void sound.play().catch(fail);
      });
    }
  } catch {
    // User-gesture audio can still be blocked in some embedded browsers.
  }
}

function useExchangeRate(language: Language): RateState {
  const currency = currencyForLanguage(language);
  const [rateState, setRateState] = useState<RateState>({
    currency,
    rate: 1,
    status: currency === "CNY" ? "live" : "loading",
    updatedAt: currency === "CNY" ? new Date().toISOString().slice(0, 10) : undefined
  });

  useEffect(() => {
    let cancelled = false;
    const nextCurrency = currencyForLanguage(language);

    if (nextCurrency === "CNY") {
      setRateState({
        currency: "CNY",
        rate: 1,
        status: "live",
        updatedAt: new Date().toISOString().slice(0, 10)
      });
      return;
    }

    setRateState({
      currency: "GBP",
      rate: 0.11,
      status: "loading"
    });

    async function loadRate() {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/CNY");

        if (!response.ok) {
          throw new Error("Rate request failed");
        }

        const data = (await response.json()) as {
          time_last_update_utc?: string;
          rates?: Partial<Record<CurrencyCode, number>>;
        };
        const nextRate = data.rates?.GBP;

        if (!nextRate) {
          throw new Error("Missing rate");
        }

        if (!cancelled) {
          setRateState({
            currency: "GBP",
            rate: nextRate,
            status: "live",
            updatedAt: data.time_last_update_utc
              ? new Date(data.time_last_update_utc).toISOString().slice(0, 10)
              : undefined
          });
        }
      } catch {
        if (!cancelled) {
          setRateState({
            currency: "GBP",
            rate: 0.11,
            status: "fallback"
          });
        }
      }
    }

    loadRate();

    return () => {
      cancelled = true;
    };
  }, [language]);

  return rateState;
}

function App() {
  const [page, setPage] = useState<Page>("prices");
  const [pageDirection, setPageDirection] = useState<"from-left" | "from-right">("from-right");
  const [language, setLanguage] = useState<Language>("en");
  const [isLanguageTransitioning, setIsLanguageTransitioning] = useState(false);
  const [selectedString, setSelectedString] = useState<StringItem | null>(null);
  const rateState = useExchangeRate(language);

  function toggleLanguage() {
    setIsLanguageTransitioning(true);
    setLanguage((current) => (current === "en" ? "zh" : "en"));
    window.setTimeout(() => setIsLanguageTransitioning(false), 590);
  }

  function changePage(nextPage: Page) {
    if (nextPage === page) return;

    setPageDirection(
      pageOrder.indexOf(nextPage) > pageOrder.indexOf(page) ? "from-right" : "from-left"
    );
    setPage(nextPage);
  }

  return (
    <main
      className={`app-shell ${isLanguageTransitioning ? "language-transition" : ""}`}
      lang={language === "zh" ? "zh-CN" : "en"}
    >
      <Header
        page={page}
        language={language}
        onLanguageToggle={toggleLanguage}
        onPageChange={changePage}
      />

      <div className={`page-transition ${pageDirection}`} key={page}>
        {page === "prices" && (
          <PriceList
            language={language}
            rateState={rateState}
            selectedString={selectedString}
            onSelectString={setSelectedString}
          />
        )}
        {page === "profile" && <StringerProfile language={language} />}
        {page === "sponsor" && <SponsorPage language={language} />}
      </div>

      <SiteFooter language={language} />

      {selectedString && (
        <OrderSheet
          item={selectedString}
          language={language}
          rateState={rateState}
          onClose={() => setSelectedString(null)}
        />
      )}
    </main>
  );
}

function Header({
  page,
  language,
  onLanguageToggle,
  onPageChange
}: {
  page: Page;
  language: Language;
  onLanguageToggle: () => void;
  onPageChange: (page: Page) => void;
}) {
  const t = copy[language];

  return (
    <header className="site-header">
      <p className="eyebrow header-eyebrow">{t.desk}</p>

      <div className="header-main">
        <h1>
          <span className="brand-script">Jimmy&apos;s</span>
          <span className="brand-subtitle">Badminton Shop</span>
        </h1>

        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={onLanguageToggle}
            aria-label={t.languageLabel}
          >
            <svg className="globe-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3c2.4 2.5 3.7 5.5 3.7 9s-1.3 6.5-3.7 9" />
              <path d="M12 3c-2.4 2.5-3.7 5.5-3.7 9s1.3 6.5 3.7 9" />
              <path d="M5.4 6.4c1.7 1 3.9 1.6 6.6 1.6s4.9-.6 6.6-1.6" />
              <path d="M5.4 17.6c1.7-1 3.9-1.6 6.6-1.6s4.9.6 6.6 1.6" />
            </svg>
            <strong>{language === "en" ? "中" : "EN"}</strong>
          </button>

          <nav className="segmented-control" aria-label="Main navigation">
            <button
              className={page === "prices" ? "active" : ""}
              type="button"
              onClick={() => onPageChange("prices")}
            >
              {t.navPrices}
            </button>
            <button
              className={page === "profile" ? "active" : ""}
              type="button"
              onClick={() => onPageChange("profile")}
            >
              {t.navJimmy}
            </button>
            <button
              className={page === "sponsor" ? "active" : ""}
              type="button"
              onClick={() => onPageChange("sponsor")}
            >
              {t.navSponsor}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function PriceList({
  language,
  rateState,
  selectedString,
  onSelectString
}: {
  language: Language;
  rateState: RateState;
  selectedString: StringItem | null;
  onSelectString: (item: StringItem) => void;
}) {
  const t = copy[language];

  return (
    <section className="price-page" aria-label="String price list">
      <div className="hero-panel compact-standards">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <div className="standard-grid">
          {t.heroPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>

      <div className="string-list">
        {orderedStringCatalog.map((item) => (
          <button
            className={`string-row ${item.serviceOnly ? "service-only" : ""} ${
              selectedString?.id === item.id ? "selected" : ""
            }`}
            key={item.id}
            type="button"
            onClick={() => onSelectString(item)}
          >
            <span className="row-topline">
              <span className="string-name">
                <StringIdentity item={item} language={language} />
                {item.hot && <span className="hot-flame" aria-label="Popular">🔥</span>}
              </span>
              {item.badge && <span className="badge">{labelForBadge(item.badge, language)}</span>}
            </span>
            {!item.serviceOnly && (
              <span className="string-detail">
                <span>{item.gauge}</span>
                <span>{featureCopy[item.id]?.[language] ?? item.features}</span>
              </span>
            )}
            <span className="row-price">{formatItemPrice(item, rateState)}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function OrderSheet({
  item,
  language,
  rateState,
  onClose
}: {
  item: StringItem;
  language: Language;
  rateState: RateState;
  onClose: () => void;
}) {
  const t = copy[language];
  const [isClosing, setIsClosing] = useState(false);
  const [details, setDetails] = useState<OrderDetails>({
    name: "",
    phone: "",
    color: item.colorOptions[0]?.name ?? "",
    tension: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const selectedColorOption =
    item.colorOptions.find((option) => option.name === details.color) ?? item.colorOptions[0];

  const price = useMemo(() => {
    return formatPrice(selectedColorOption.basePriceCny * rateState.rate, rateState.currency);
  }, [rateState.currency, rateState.rate, selectedColorOption.basePriceCny]);

  const isValid = details.name.trim() && details.phone.trim() && details.color.trim() && details.tension;

  function updateField(field: keyof OrderDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setShowErrors(true);
      return;
    }

    setSubmitted(true);
  }

  function openPayment() {
    window.location.href = shopConfig.paymentTarget;
  }

  function requestClose() {
    if (isClosing) return;
    playCloseSound();
    setIsClosing(true);
    window.setTimeout(onClose, 240);
  }

  return (
    <div
      className={`sheet-layer ${isClosing ? "closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Order string"
    >
      <button className="sheet-backdrop" type="button" onClick={requestClose} aria-label="Close order" />
      <section className="order-sheet">
        <div className="sheet-handle" />
        <div className="sheet-heading">
          <div>
            <p className="eyebrow">{t.selectedString}</p>
            <h2>
              <StringIdentity item={item} language={language} />
            </h2>
          </div>
          <button className="icon-button" type="button" onClick={requestClose} aria-label="Close order">
            ×
          </button>
        </div>

        {!submitted ? (
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-summary">
              <span>{displayGauge(item, language)}</span>
              <strong>{price}</strong>
            </div>

            <label>
              <span>{t.name}</span>
              <input
                value={details.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder={t.namePlaceholder}
                autoComplete="name"
                inputMode="text"
              />
            </label>

            <label>
              <span>{t.phone}</span>
              <input
                value={details.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder={t.phonePlaceholder}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>

            {!item.serviceOnly && (
              <div className="color-field">
                <span className="field-label">{t.stringColor}</span>
                <div className="color-choice-grid" role="radiogroup" aria-label={t.stringColor}>
                  {item.colorOptions.map((option) => (
                    <button
                      className={`color-choice tone-${getColorTone(option.name)} ${
                        details.color === option.name ? "active" : ""
                      }`}
                      type="button"
                      role="radio"
                      aria-checked={details.color === option.name}
                      key={option.name}
                      onClick={() => updateField("color", option.name)}
                    >
                      <span>{labelForColor(option.name, language)}</span>
                      <strong>{formatPrice(option.basePriceCny * rateState.rate, rateState.currency)}</strong>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <label>
              <span>{t.tension}</span>
              <div className="tension-input">
                <input
                  value={details.tension}
                  onChange={(event) => updateField("tension", event.target.value)}
                  placeholder="26"
                  inputMode="numeric"
                  type="number"
                  min="20"
                  max="35"
                  step="0.5"
                />
                <span>lbs</span>
              </div>
            </label>

            {showErrors && <p className="form-error">{t.required}</p>}

            <button className="primary-action" type="submit">
              {t.reviewOrder}
            </button>
          </form>
        ) : (
          <div className="confirmation">
            <p className="eyebrow">{t.orderReview}</p>
            <h3>
              <StringIdentity item={item} language={language} />
            </h3>
            <dl>
              <div>
                <dt>{t.price}</dt>
                <dd>{price}</dd>
              </div>
              <div>
                <dt>{t.name}</dt>
                <dd>{details.name}</dd>
              </div>
              <div>
                <dt>{t.phone}</dt>
                <dd>{details.phone}</dd>
              </div>
              {!item.serviceOnly && (
                <div>
                  <dt>{t.color}</dt>
                  <dd>{labelForColor(details.color, language)}</dd>
                </div>
              )}
              <div>
                <dt>{t.tension}</dt>
                <dd>{details.tension} lbs</dd>
              </div>
            </dl>

            <button className="primary-action" type="button" onClick={openPayment}>
              {t.pay}
            </button>
            <button className="secondary-action" type="button" onClick={() => setSubmitted(false)}>
              {t.edit}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function StringerProfile({ language }: { language: Language }) {
  const t = copy[language];
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    function updateProgress() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
      setScrollProgress(progress);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      className="profile-page"
      ref={sectionRef}
      style={{ "--scroll-progress": scrollProgress } as CSSProperties}
      aria-label="Stringer profile"
    >
      <div className="profile-stage">
        <div className="profile-photo-stage">
          <img
            className="profile-hero-bg"
            src={shopConfig.profileImages.heroBackgroundSrc}
            alt=""
            aria-hidden="true"
          />
          <div className="profile-atmosphere" aria-hidden="true" />
          <img
            className="profile-hero-person"
            src={shopConfig.profileImages.heroPersonSrc}
            alt="Jimmy Xie"
          />
          <button
            className="profile-sound-hotspot"
            type="button"
            aria-label="Play Jimmy audio"
            onClick={playProfileTapSoundTriple}
          />
        </div>
        <div className="profile-copy">
          <h2>{shopConfig.stringerName}</h2>
          <p>
            {t.profileIntroStart}
            <strong>{t.profileIntroNames}</strong>
            {t.profileIntroEnd}
          </p>
        </div>
      </div>

      {shopConfig.profileImages.galleryImages.length > 0 && (
        <section className="profile-gallery" aria-label={t.galleryEyebrow}>
          <p className="eyebrow">{t.galleryEyebrow}</p>
          <div className="gallery-rail">
            <div className="gallery-track">
              {[...shopConfig.profileImages.galleryImages, ...shopConfig.profileImages.galleryImages].map(
                (image, index) => (
                  <img src={image.src} alt={image.alt} key={`${image.src}-${index}`} />
                )
              )}
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

function SponsorPage({ language }: { language: Language }) {
  const t = copy[language];
  const teamImages = shopConfig.teamImages;

  return (
    <section className="sponsor-page" aria-label="Team page">
      <div className="sponsor-panel">
        <p className="eyebrow">{t.sponsorEyebrow}</p>
        <div className="team-grid">
          {t.teamMembers.map((member, index) => (
            <article className="team-card" key={member.name}>
              <img src={teamImages[index]} alt={member.name} />
              <div className="team-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <footer className="site-footer">
      <div>
        <span className="contact-pill">
          <span className="wechat-icon" aria-hidden="true">
            <svg viewBox="0 0 32 28" focusable="false">
              <path
                className="wechat-main"
                d="M13.4 3.4C7 3.4 1.8 7.5 1.8 12.5c0 2.8 1.7 5.3 4.3 7l-.8 3.1 3.7-1.7c1.4.5 2.9.7 4.4.7 6.4 0 11.6-4.1 11.6-9.1s-5.2-9.1-11.6-9.1Z"
              />
              <path
                className="wechat-front"
                d="M20.8 10.4c5.2 0 9.4 3.3 9.4 7.4 0 2.2-1.2 4.2-3.2 5.5l.6 2.5-3-1.4c-1.1.4-2.4.7-3.8.7-5.2 0-9.4-3.3-9.4-7.3 0-4.1 4.2-7.4 9.4-7.4Z"
              />
              <circle cx="9.6" cy="10.7" r="1.2" />
              <circle cx="16.2" cy="10.7" r="1.2" />
              <circle cx="17.8" cy="16.6" r="1" />
              <circle cx="23.2" cy="16.6" r="1" />
            </svg>
          </span>
          {shopConfig.wechatId}
        </span>
        <span className="contact-pill">
          <span className="x-icon" aria-hidden="true">𝕏</span>
          @{shopConfig.xHandle}
        </span>
      </div>
    </footer>
  );
}

export default App;
