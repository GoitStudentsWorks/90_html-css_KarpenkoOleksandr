(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]");t.addEventListener("click",()=>{const r=t.getAttribute("aria-expanded")==="true"||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!r),o.classList.toggle("is-open")})})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn1:document.querySelector("[data-modal-open-1]"),openModalBtn2:document.querySelector("[data-modal-open-2]"),openModalBtn3:document.querySelector("[data-modal-open-3]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.openModalBtn1.addEventListener("click",o),t.openModalBtn2.addEventListener("click",o),t.openModalBtn3.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();
