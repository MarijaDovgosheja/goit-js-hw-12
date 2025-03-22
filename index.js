import{a as d,S as u,i as p}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="49325136-7a5007c9432c50459db7de2bf",g="https://pixabay.com/api/";async function h(o){try{return(await d.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new u(".gallery a");function v(){n.innerHTML=""}function L(o){if(o.length===0){p.error({message:"Sorry, there are no images matching your search query.Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:l,downloads:f})=>`
       <li class="gallery-item">
            <a href="${a}">
                <img src="${s}" alt="${e}" loading="lazy">
            </a>
            <div class="info">
                <div class="info-item">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${r}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Views</p>
                    <p class="info-value">${i}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${l}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${f}</p>
                </div>
            </div>
        </li>
    `).join("");n.insertAdjacentHTML("beforeend",t),y.refresh()}function b(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){v(),b();try{const s=await h(t);L(s)}catch(s){console.error("Error:",s)}finally{w(),o.target.reset()}}});
//# sourceMappingURL=index.js.map
