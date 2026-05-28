(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const d={name:"Jimmy's Badminton Shop",stringerName:"Jimmy Xie",wechatId:"JIMMY2334",xHandle:"JimmyXuan2334",paymentTarget:"#付款:HarveySpecter(NOKOJ333)/收款/001",closeSoundSrc:"./assets/SQB.mp4",profileTapSoundSrc:"./assets/jimmy-head-sound.mp3",profileImages:{heroBackgroundSrc:"./assets/jimmy-hero-source.jpg?v=20260529h",heroPersonSrc:"./assets/jimmy-hero-source.jpg?v=20260529j",heroSourceSrc:"./assets/jimmy-hero-source.jpg",galleryImages:[{src:"./assets/jimmy-gallery-03.jpg?v=20260528b",alt:"Jimmy Xie campus selfie"},{src:"./assets/jimmy-gallery-01.webp?v=20260529a",alt:"Jimmy Xie with badminton player"},{src:"./assets/jimmy-gallery-05.jpg?v=20260528a",alt:"Jimmy Xie with friend holding cards"},{src:"./assets/jimmy-gallery-02.webp?v=20260529a",alt:"Jimmy Xie with badminton partner"},{src:"./assets/jimmy-gallery-04.webp?v=20260529a",alt:"Jimmy Xie with badminton player at restaurant"}]},brandLogos:{YONEX:"./assets/brand-yonex.webp?v=20260529a",VICTOR:"./assets/brand-victor.webp?v=20260529a"},teamImages:["./assets/team-avatar-01.jpg?v=20260528a","./assets/team-harvey.jpg?v=20260529m","./assets/team-avatar-03.webp?v=20260528a","./assets/team-avatar-04.jpg?v=20260528a"]},q=[{id:"yonex-bg65",brand:"YONEX",name:"Yonex BG65",gauge:"0.70 mm",features:"Durable string, very hard-wearing.",badge:"Durability",colorOptions:[{name:"White",basePriceCny:58},{name:"Yellow",basePriceCny:58},{name:"Fluorescent Yellow",basePriceCny:58}]},{id:"yonex-bg65ti",brand:"YONEX",name:"Yonex BG65TI",gauge:"0.70 mm",features:"Durable string with a firm hitting feel.",badge:"Firm",colorOptions:[{name:"Red",basePriceCny:60}]},{id:"yonex-bg66u",brand:"YONEX",name:"Yonex BG66U",gauge:"0.65 mm",features:"High-repulsion string with a crisp sound.",badge:"Repulsion",colorOptions:[{name:"Bright Pink",basePriceCny:70},{name:"Fluorescent Yellow",basePriceCny:65},{name:"Pink",basePriceCny:65},{name:"White",basePriceCny:65}]},{id:"yonex-bg66f",brand:"YONEX",name:"Yonex BG66F",gauge:"0.65 mm",features:"High-repulsion string with excellent feel.",badge:"Feel",colorOptions:[{name:"Fluorescent Yellow",basePriceCny:70}]},{id:"yonex-bg80",brand:"YONEX",name:"Yonex BG80",gauge:"0.68 mm",features:"Medium-repulsion string with a firm hitting feel.",badge:"Power",hot:!0,colorOptions:[{name:"White",basePriceCny:75},{name:"Fluorescent Yellow",basePriceCny:75},{name:"Light Blue",basePriceCny:80}]},{id:"yonex-bg80p",brand:"YONEX",name:"Yonex BG80P",gauge:"0.68 mm",features:"High-repulsion string with a firm hitting feel.",badge:"Repulsion",colorOptions:[{name:"White",basePriceCny:80}]},{id:"yonex-bgxb68",brand:"YONEX",name:"Yonex EXB68",gauge:"0.68 mm",features:"Durable hard string with excellent tension retention.",badge:"Retention",colorOptions:[{name:"Fluorescent Yellow",basePriceCny:60}]},{id:"yonex-bgxb63",brand:"YONEX",name:"Yonex EXB63",gauge:"0.63 mm",features:"Super-repulsion string, firm feel, crisp sound, and very slow tension loss.",badge:"Repulsion",hot:!0,colorOptions:[{name:"White",basePriceCny:80},{name:"Bright Pink",basePriceCny:85},{name:"Aqua Blue",basePriceCny:85},{name:"Lavender Purple",basePriceCny:85},{name:"Fluorescent Yellow",basePriceCny:80},{name:"Black",basePriceCny:80}]},{id:"yonex-bgab",brand:"YONEX",name:"Yonex BGAB",gauge:"0.67 / 0.61 mm",features:"Super-repulsion string with a polished, premium feel.",badge:"AeroBite",colorOptions:[{name:"White / Red",basePriceCny:85},{name:"White / Blue",basePriceCny:90}]},{id:"victor-vbs66n",brand:"VICTOR",name:"Victor VBS66N",gauge:"0.66 mm",features:"High-repulsion string with a crisp hitting feel.",badge:"Control",colorOptions:[{name:"Fluorescent Yellow",basePriceCny:58},{name:"White",basePriceCny:58},{name:"Mint Green",basePriceCny:58},{name:"Light Pink",basePriceCny:58},{name:"Bright Pink",basePriceCny:58},{name:"Orange",basePriceCny:58},{name:"Light Blue",basePriceCny:58}]},{id:"yonex-exb65",brand:"YONEX",name:"Yonex EXB65",gauge:"0.65 mm",features:"Ultra-repulsion string with slow tension loss, crisp sound, and high durability.",badge:"Repulsion",colorOptions:[{name:"White",basePriceCny:70},{name:"Fluorescent Yellow",basePriceCny:70}]},{id:"bring-your-own-string",name:`Bring your
own string`,gauge:"",features:"",serviceOnly:!0,colorOptions:[{name:"Own string",basePriceCny:30}]}],x=["yonex-bg80","yonex-bgxb63","yonex-bg80p","victor-vbs66n","yonex-exb65"],E=["prices","profile","sponsor"],O=[...q].sort((e,n)=>{const r=x.indexOf(e.id),a=x.indexOf(n.id);return r!==-1||a!==-1?(r===-1?Number.MAX_SAFE_INTEGER:r)-(a===-1?Number.MAX_SAFE_INTEGER:a):e.serviceOnly&&!n.serviceOnly?1:!e.serviceOnly&&n.serviceOnly?-1:0}),g={en:{desk:"London stringing service",navPrices:"Price",navJimmy:"Jimmy",navSponsor:"Team",languageLabel:"Switch to Chinese",heroEyebrow:"Service highlights",heroPoints:["48-hour return","Competition-level stringing","Craftsmanship"],rateLoading:"Updating exchange rate...",rateReady:"Rate ready",rateUpdated:"Rate updated",rateFallback:"Using fallback rate, live update unavailable",selectedString:"Selected string",name:"Name",namePlaceholder:"Your name",phone:"Phone",phonePlaceholder:"Mobile number",stringColor:"String color",tension:"Tension",required:"Please complete all required fields.",reviewOrder:"Review order",orderReview:"Order review",price:"Price",color:"Color",pay:"Pay with WeChat",edit:"Edit details",profileEyebrow:"Stringer profile",galleryEyebrow:"Gallery",profileIntroStart:"A Yonex S-tier stringer who has served over 10,000 customers, including ",profileIntroNames:"Lin Dan, Viktor Axelsen, Harvey Jiang, and Kento Momota",profileIntroEnd:". He has served over 10,000 clients, including top professionals. Born in Hunan, raised in Shenzhen, now under the guidance of Liu Xin.",sponsorEyebrow:"MEET THE TEAM",sponsorTitle:"Team members",sponsorBody:"This page is reserved for future shop members, partners, and team introductions.",sponsorNote:"Member profiles can be added here later.",teamMembers:[{name:"Handsome Xie",role:"Producer of Jimmy Xie"},{name:"Harvey Jiang",role:"The Lin Dan of Shunde."},{name:"Qin Easy",role:"Producer of Jimmy Xie"},{name:"Brother Liu",role:"Supplier of GPU"}],craftsmanship:"Craftsmanship",wechat:"WeChat:",x:"X:"},zh:{desk:"伦敦穿线服务",navPrices:"价格",navJimmy:"Jimmy",navSponsor:"团队",languageLabel:"切换到英文",heroEyebrow:"服务特点",heroPoints:["48小时内取拍","比赛级穿线","工匠精神"],rateLoading:"正在更新汇率...",rateReady:"价格已就绪",rateUpdated:"汇率更新",rateFallback:"实时汇率不可用，正在使用备用汇率",selectedString:"已选球线",name:"姓名",namePlaceholder:"请输入姓名",phone:"电话",phonePlaceholder:"请输入手机号",stringColor:"球线颜色",tension:"磅数",required:"请填写所有必填信息。",reviewOrder:"确认订单",orderReview:"订单确认",price:"价格",color:"颜色",pay:"微信支付",edit:"修改信息",profileEyebrow:"穿线师介绍",galleryEyebrow:"照片",profileIntroStart:"尤尼克斯S级穿线师，曾为",profileIntroNames:"林丹、安塞龙、顺德林丹和桃田贤斗",profileIntroEnd:"穿线，服务超10,000名客户，广受好评。生于湖南，长于深圳，目前师从刘鑫。",sponsorEyebrow:"我们的团队",sponsorTitle:"团队成员",sponsorBody:"这里预留给之后添加店内其他成员、合作伙伴和团队介绍。",sponsorNote:"后续可以继续添加成员照片、简介和联系方式。",teamMembers:[{name:"谢英俊",role:"Jimmy Xie的生产商"},{name:"凡神",role:"顺德林丹"},{name:"勤姐",role:"Jimmy Xie的生产商"},{name:"柳哥",role:"GPU提供商"}],craftsmanship:"工匠精神",wechat:"微信：",x:"X："}},z={"yonex-bg65":{en:"Durable string, very hard-wearing",zh:"耐打线，很耐打"},"yonex-bg65ti":{en:"Durable string with a firm hitting feel",zh:"耐打线，打感偏硬"},"yonex-bg66u":{en:"High-repulsion string with a crisp sound",zh:"高弹线，声音清脆"},"yonex-bg66f":{en:"High-repulsion string with excellent feel",zh:"高弹线，手感极佳"},"yonex-bg80":{en:"Medium-repulsion string with a firm hitting feel",zh:"中弹线，打感硬朗"},"yonex-bg80p":{en:"High-repulsion string with a firm hitting feel",zh:"高弹线，打感硬朗"},"yonex-bgxb68":{en:"Durable hard string with excellent tension retention",zh:"耐打线，保磅表现优秀"},"yonex-exb65":{en:"Ultra-repulsion string with slow tension loss, crisp sound, and high durability",zh:"超弹线，掉磅慢，声音清脆，耐打度高"},"yonex-bgxb63":{en:"Super-repulsion string, firm feel, crisp sound, and strong tension retention",zh:"超弹线，打感硬朗，声音清脆，保磅出色"},"yonex-bgab":{en:"Super-repulsion string with a polished, premium feel",zh:"超弹线，手感完美"},"victor-vbs66n":{en:"High-repulsion string with a crisp hitting feel",zh:"高弹线，打感清脆"},"bring-your-own-string":{en:"Labour fee for customer-supplied string",zh:"客户自带线，仅收手工费"}},I={Durability:{en:"Durability",zh:"耐打"},Firm:{en:"Firm",zh:"硬朗"},Repulsion:{en:"Repulsion",zh:"高弹"},Feel:{en:"Feel",zh:"手感"},Power:{en:"Power",zh:"力量"},Retention:{en:"Retention",zh:"保磅"},Premium:{en:"Premium",zh:"高端"},AeroBite:{en:"AeroBite",zh:"混合线"},Control:{en:"Control",zh:"控制"},Labour:{en:"Labour",zh:"手工费"}},Y={White:{en:"White",zh:"白色"},Yellow:{en:"Yellow",zh:"黄色"},"Fluorescent Yellow":{en:"Fluorescent Yellow",zh:"荧光黄"},Red:{en:"Red",zh:"红色"},"Bright Pink":{en:"Bright Pink",zh:"亮粉色"},Pink:{en:"Pink",zh:"粉色"},"Light Blue":{en:"Light Blue",zh:"浅蓝色"},"Aqua Blue":{en:"Aqua Blue",zh:"水蓝色"},"Lavender Purple":{en:"Lavender Purple",zh:"薰衣草紫"},Black:{en:"Black",zh:"黑色"},"White / Red":{en:"White / Red",zh:"白红色"},"White / Blue":{en:"White / Blue",zh:"白蓝色"},"Mint Green":{en:"Mint Green",zh:"薄荷绿"},"Light Pink":{en:"Light Pink",zh:"浅粉色"},Orange:{en:"Orange",zh:"橙色"},"Own string":{en:"Own string",zh:"自带线"}},p=document.querySelector("#app-shell");let m="prices",k="from-right",c="en",u={currency:"GBP",rate:.11,status:"loading",updatedAt:""};function N(e){return e==="zh"?"CNY":"GBP"}function v(e,n){const r=n==="CNY"?"zh-CN":"en-GB";return new Intl.NumberFormat(r,{style:"currency",currency:n,maximumFractionDigits:n==="CNY"?0:2}).format(e)}function M(e){const n=e.colorOptions.map(r=>r.basePriceCny);return{min:Math.min(...n),max:Math.max(...n)}}function R(e){const n=M(e),r=v(n.min*u.rate,u.currency),a=v(n.max*u.rate,u.currency);return n.min===n.max?r:`${r}–${a}`}function A(e){const n=e.toLowerCase();return n.includes("yellow")||n.includes("gold")?"yellow":n.includes("blue")||n.includes("turquoise")||n.includes("aqua")?"blue":n.includes("pink")?"pink":n.includes("red")?"red":n.includes("green")?"green":n.includes("purple")||n.includes("lavender")?"purple":n.includes("orange")?"orange":n.includes("black")?"black":"white"}function L(e){return Y[e]?.[c]||e}function F(e){return e?I[e]?.[c]||e:""}function X(e){return e.serviceOnly&&c==="zh"?"自带线":e.name}function j(e){return e.serviceOnly?c==="zh"?"手工费":"":e.gauge}function G(e){return e.serviceOnly?X(e):e.name.replace(/^Yonex\s+/i,"").replace(/^Victor\s+/i,"")}function H(e){return d.brandLogos[e.brand]||""}function w(e){const n=H(e);return`<span class="string-identity">${!e.serviceOnly&&n?`<img class="brand-logo brand-${e.brand.toLowerCase()}" src="${n}" alt="${e.brand}" />`:""}<span>${G(e)}</span></span>`}function J(){const e=g[c];return`${e.profileIntroStart}<strong>${e.profileIntroNames}</strong>${e.profileIntroEnd}`}let h=null,b=null,C=0;function D(){try{h||(h=new Audio(d.closeSoundSrc),h.preload="auto",h.volume=.8),h.currentTime=0,h.play().catch(()=>{})}catch{}}async function W(){const e=++C;try{b||(b=new Audio(d.profileTapSoundSrc),b.preload="auto",b.volume=.92);for(let n=0;n<1;n+=1){if(e!==C)return;await new Promise((r,a)=>{const t=b;if(!t){r();return}const i=()=>{s(),r()},o=()=>{s(),a()},s=()=>{t.removeEventListener("ended",i),t.removeEventListener("error",o)};t.currentTime=0,t.addEventListener("ended",i,{once:!0}),t.addEventListener("error",o,{once:!0}),t.play().catch(o)})}}catch{}}async function B(){if(N(c)==="CNY"){u={currency:"CNY",rate:1,status:"live",updatedAt:new Date().toISOString().slice(0,10)},f();return}u={currency:"GBP",rate:.11,status:"loading",updatedAt:""},f();try{const n=await fetch("https://open.er-api.com/v6/latest/CNY");if(!n.ok)throw new Error("Rate request failed");const r=await n.json(),a=r.rates?.GBP;if(!a)throw new Error("Missing rate");u={currency:"GBP",rate:a,status:"live",updatedAt:r.time_last_update_utc?new Date(r.time_last_update_utc).toISOString().slice(0,10):""}}catch{u={currency:"GBP",rate:.11,status:"fallback",updatedAt:""}}f()}function _(){const e=g[c];return`
          <header class="site-header">
            <p class="eyebrow header-eyebrow">${e.desk}</p>
            <div class="header-main">
              <h1>
                <span class="brand-script">Jimmy's</span>
                <span class="brand-subtitle">Badminton Shop</span>
              </h1>
              <div class="header-actions">
                <button class="language-toggle" type="button" data-language-toggle aria-label="${e.languageLabel}">
                  <svg class="globe-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M3 12h18"></path>
                    <path d="M12 3c2.4 2.5 3.7 5.5 3.7 9s-1.3 6.5-3.7 9"></path>
                    <path d="M12 3c-2.4 2.5-3.7 5.5-3.7 9s1.3 6.5 3.7 9"></path>
                    <path d="M5.4 6.4c1.7 1 3.9 1.6 6.6 1.6s4.9-.6 6.6-1.6"></path>
                    <path d="M5.4 17.6c1.7-1 3.9-1.6 6.6-1.6s4.9.6 6.6 1.6"></path>
                  </svg>
                  <strong>${c==="en"?"中":"EN"}</strong>
                </button>
                <nav class="segmented-control" aria-label="Main navigation">
                  <button class="${m==="prices"?"active":""}" type="button" data-page="prices">${e.navPrices}</button>
                  <button class="${m==="profile"?"active":""}" type="button" data-page="profile">${e.navJimmy}</button>
                  <button class="${m==="sponsor"?"active":""}" type="button" data-page="sponsor">${e.navSponsor}</button>
                </nav>
              </div>
            </div>
          </header>
        `}function U(){const e=g[c];return`
          <section class="price-page" aria-label="String price list">
            <div class="hero-panel compact-standards">
              <p class="eyebrow">${e.heroEyebrow}</p>
              <div class="standard-grid">
                ${e.heroPoints.map(n=>`<span>${n}</span>`).join("")}
              </div>
            </div>
            <div class="string-list">
              ${O.map(n=>`
                    <button class="string-row ${n.serviceOnly?"service-only":""}" type="button" data-string-id="${n.id}">
                      <span class="row-topline">
                        <span class="string-name">${w(n)}${n.hot?'<span class="hot-flame" aria-label="Popular">🔥</span>':""}</span>
                        ${n.badge?`<span class="badge">${F(n.badge)}</span>`:""}
                      </span>
                      ${n.serviceOnly?"":`<span class="string-detail">
                              <span>${n.gauge}</span>
                              <span>${z[n.id]?.[c]||n.features}</span>
                            </span>`}
                      <span class="row-price">${R(n)}</span>
                    </button>`).join("")}
            </div>
          </section>
        `}function Q(){const e=g[c];return`
          <section class="profile-page" aria-label="Stringer profile">
            <div class="profile-stage">
              <div class="profile-photo-stage">
                <img class="profile-hero-bg" src="${d.profileImages.heroBackgroundSrc}" alt="" aria-hidden="true" />
                <div class="profile-atmosphere" aria-hidden="true"></div>
                <img class="profile-hero-person" src="${d.profileImages.heroPersonSrc}" alt="Jimmy Xie" />
                <button class="profile-sound-hotspot" type="button" data-profile-sound aria-label="Play Jimmy audio"></button>
              </div>
              <div class="profile-copy">
                <h2>${d.stringerName}</h2>
                <p>${J()}</p>
              </div>
            </div>
            ${d.profileImages.galleryImages.length?`<section class="profile-gallery" aria-label="${e.galleryEyebrow}">
                    <p class="eyebrow">${e.galleryEyebrow}</p>
                    <div class="gallery-rail">
                      <div class="gallery-track">
                        ${[...d.profileImages.galleryImages,...d.profileImages.galleryImages].map((n,r)=>{const a=n.src.split("?")[0],t=a.split("/").pop();return`<div class="gallery-img-wrap" data-gallery-index="${r%d.profileImages.galleryImages.length}">
                              <img src="${n.src}" alt="${n.alt}" />
                              <button class="download-btn" type="button" aria-label="Download image" data-download-src="${a}" data-download-filename="${t}">
                                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <path d="M12 2v14m0 0l-5-5m5 5l5-5M4 22h16"/>
                                </svg>
                              </button>
                            </div>`}).join("")}
                      </div>
                    </div>
                  </section>`:""}
          </section>
        `}function V(){const e=g[c],n=d.teamImages;return`
          <section class="sponsor-page" aria-label="Team page">
            <div class="sponsor-panel">
              <p class="eyebrow">${e.sponsorEyebrow}</p>
              <div class="team-grid">
                ${e.teamMembers.map((r,a)=>`
                      <article class="team-card">
                        <img src="${n[a]}" alt="${r.name}" />
                        <div class="team-copy">
                          <h3>${r.name}</h3>
                          <p>${r.role}</p>
                        </div>
                      </article>`).join("")}
              </div>
            </div>
          </section>
        `}function K(){return g[c],`
          <footer class="site-footer">
            <div>
              <span class="contact-pill">
                <span class="wechat-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 28" focusable="false">
                    <path class="wechat-main" d="M13.4 3.4C7 3.4 1.8 7.5 1.8 12.5c0 2.8 1.7 5.3 4.3 7l-.8 3.1 3.7-1.7c1.4.5 2.9.7 4.4.7 6.4 0 11.6-4.1 11.6-9.1s-5.2-9.1-11.6-9.1Z"></path>
                    <path class="wechat-front" d="M20.8 10.4c5.2 0 9.4 3.3 9.4 7.4 0 2.2-1.2 4.2-3.2 5.5l.6 2.5-3-1.4c-1.1.4-2.4.7-3.8.7-5.2 0-9.4-3.3-9.4-7.3 0-4.1 4.2-7.4 9.4-7.4Z"></path>
                    <circle cx="9.6" cy="10.7" r="1.2"></circle>
                    <circle cx="16.2" cy="10.7" r="1.2"></circle>
                    <circle cx="17.8" cy="16.6" r="1"></circle>
                    <circle cx="23.2" cy="16.6" r="1"></circle>
                  </svg>
                </span>
                ${d.wechatId}
              </span>
              <span class="contact-pill">
                <span class="x-icon" aria-hidden="true">𝕏</span>
                @${d.xHandle}
              </span>
            </div>
          </footer>
        `}function Z(){return m==="profile"?Q():m==="sponsor"?V():U()}function f(){p.lang=c==="zh"?"zh-CN":"en",p.innerHTML=`${_()}<div class="page-transition ${k}">${Z()}</div>${K()}`,ee(),P()}function ee(){p.querySelector("[data-language-toggle]")?.addEventListener("click",()=>{p.classList.add("language-transition"),c=c==="en"?"zh":"en",B(),window.setTimeout(()=>p.classList.remove("language-transition"),590)}),p.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.page;n!==m&&(k=E.indexOf(n)>E.indexOf(m)?"from-right":"from-left",m=n,window.scrollTo({top:0,behavior:"smooth"}),f())})}),p.querySelectorAll("[data-string-id]").forEach(e=>{e.addEventListener("click",()=>{const n=O.find(r=>r.id===e.dataset.stringId);n&&te(n)})}),p.querySelector("[data-profile-sound]")?.addEventListener("click",W),ne()}function ne(){const e=p.querySelector(".gallery-track");if(!e)return;const n=p.querySelectorAll(".gallery-img-wrap");let r=null,a=null;function t(s){e.classList.add("paused"),a=s.target.closest(".gallery-img-wrap"),r=window.setTimeout(()=>{r=null,n.forEach(l=>l.classList.remove("show-download")),a&&a.classList.add("show-download")},600)}function i(){e.classList.remove("paused"),r!==null&&(window.clearTimeout(r),r=null)}function o(){r!==null&&(window.clearTimeout(r),r=null)}n.forEach(s=>{s.addEventListener("touchstart",t,{passive:!0}),s.addEventListener("touchend",i,{passive:!0}),s.addEventListener("touchmove",o,{passive:!0}),s.addEventListener("touchcancel",i,{passive:!0});const l=s.querySelector(".download-btn");l&&l.addEventListener("click",$=>{$.stopPropagation();const S=l.dataset.downloadSrc,T=l.dataset.downloadFilename;if(!S)return;const y=document.createElement("a");y.href=S,y.download=T||"gallery-image",document.body.appendChild(y),y.click(),document.body.removeChild(y),window.setTimeout(()=>{s.classList.remove("show-download")},1200)})}),document.addEventListener("click",s=>{s.target.closest(".gallery-img-wrap")||n.forEach(l=>l.classList.remove("show-download"))},{passive:!0})}function re(){const e=document.createElement("div");e.className="qr-layer",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.innerHTML=`
          <button class="qr-backdrop" type="button" aria-label="Close QR"></button>
          <div class="qr-sheet">
            <div class="qr-wrap" data-qr-wrap>
              <img src="./assets/payment-qr.jpg?v=20260529o" alt="Payment QR code" />
              <button class="qr-download-btn" type="button" aria-label="Download QR code">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
            </div>
            <p class="qr-hint">${c==="zh"?"长按保存二维码":"Long press to save QR code"}</p>
          </div>
        `;const n=()=>{e.classList.add("closing"),setTimeout(()=>e.remove(),280)};e.querySelector(".qr-backdrop").addEventListener("click",n);const r=e.querySelector("[data-qr-wrap]");let a=null;r.addEventListener("touchstart",t=>{a=setTimeout(()=>{r.classList.add("show-download")},600)},{passive:!0}),r.addEventListener("touchmove",()=>{clearTimeout(a)},{passive:!0}),r.addEventListener("touchend",()=>{clearTimeout(a)},{passive:!0}),r.addEventListener("touchcancel",()=>{clearTimeout(a)},{passive:!0}),e.querySelector(".qr-download-btn").addEventListener("click",t=>{t.stopPropagation();const i="./assets/payment-qr.jpg",o=document.createElement("a");o.href=i,o.download="payment-qr.jpg",o.click()}),document.body.appendChild(e)}function te(e){const n=g[c],r=e.colorOptions[0]?.name||"",a=o=>{const s=e.colorOptions.find(l=>l.name===o)||e.colorOptions[0];return v(s.basePriceCny*u.rate,u.currency)},t=document.createElement("div");t.className="sheet-layer",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`
          <button class="sheet-backdrop" type="button" aria-label="Close order"></button>
          <section class="order-sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-heading">
              <div>
                <p class="eyebrow">${n.selectedString}</p>
                <h2>${w(e)}</h2>
              </div>
              <button class="icon-button" type="button" aria-label="Close order">×</button>
            </div>
            <form class="order-form">
              <div class="order-summary">
                <span>${j(e)}</span>
                <strong data-selected-price>${a(r)}</strong>
              </div>
              <label>
                <span>${n.name}</span>
                <input name="name" placeholder="${n.namePlaceholder}" autocomplete="name" inputmode="text" />
              </label>
              <label>
                <span>${n.phone}</span>
                <input name="phone" placeholder="${n.phonePlaceholder}" type="tel" inputmode="tel" autocomplete="tel" />
              </label>
              <input type="hidden" name="color" value="${r}" />
              ${e.serviceOnly?"":`<div class="color-field">
                      <span class="field-label">${n.stringColor}</span>
                      <div class="color-choice-grid" role="radiogroup" aria-label="${n.stringColor}">
                        ${e.colorOptions.map(o=>`
                              <button class="color-choice tone-${A(o.name)} ${o.name===r?"active":""}" type="button" role="radio" aria-checked="${o.name===r}" data-color="${o.name}">
                                <span>${L(o.name)}</span>
                                <strong>${v(o.basePriceCny*u.rate,u.currency)}</strong>
                              </button>`).join("")}
                      </div>
                    </div>`}
              <label>
                <span>${n.tension}</span>
                <div class="tension-input">
                  <input name="tension" placeholder="26" inputmode="numeric" type="number" min="20" max="35" step="0.5" />
                  <span>lbs</span>
                </div>
              </label>
              <p class="form-error" hidden>${n.required}</p>
              <button class="primary-action" type="submit">${n.reviewOrder}</button>
            </form>
          </section>
        `;function i(){t.classList.contains("closing")||(D(),t.classList.add("closing"),window.setTimeout(()=>t.remove(),240))}t.querySelector(".sheet-backdrop").addEventListener("click",i),t.querySelector(".icon-button").addEventListener("click",i),t.querySelectorAll(".color-choice").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".color-choice").forEach(s=>{s.classList.remove("active"),s.setAttribute("aria-checked","false")}),o.classList.add("active"),o.setAttribute("aria-checked","true"),t.querySelector('input[name="color"]').value=o.dataset.color,t.querySelector("[data-selected-price]").textContent=a(o.dataset.color)})}),t.querySelector("form").addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget,l=Object.fromEntries(new FormData(s).entries());if(!(l.name&&l.phone&&l.color&&l.tension)){s.querySelector(".form-error").hidden=!1;return}t.querySelector(".order-sheet").innerHTML=`
            <div class="sheet-handle"></div>
            <div class="confirmation">
              <p class="eyebrow">${n.orderReview}</p>
              <h3>${w(e)}</h3>
              <dl>
                <div><dt>${n.price}</dt><dd>${a(l.color)}</dd></div>
                <div><dt>${n.name}</dt><dd>${l.name}</dd></div>
                <div><dt>${n.phone}</dt><dd>${l.phone}</dd></div>
                ${e.serviceOnly?"":`<div><dt>${n.color}</dt><dd>${L(l.color)}</dd></div>`}
                <div><dt>${n.tension}</dt><dd>${l.tension} lbs</dd></div>
              </dl>
              <button class="primary-action" type="button" data-pay>${n.pay}</button>
              <button class="secondary-action" type="button" data-close>${n.edit}</button>
            </div>
          `,t.querySelector("[data-pay]").addEventListener("click",()=>{re()}),t.querySelector("[data-close]").addEventListener("click",i)}),document.body.appendChild(t)}function P(){const e=document.querySelector(".profile-page");if(!e)return;const n=e.getBoundingClientRect(),r=window.innerHeight||1,a=Math.min(1,Math.max(0,(r-n.top)/(r+n.height)));e.style.setProperty("--scroll-progress",String(a))}window.addEventListener("scroll",P,{passive:!0});window.addEventListener("resize",P);B();
