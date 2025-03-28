// ==UserScript==
// @name        redokun.com: Improve responsive behavior of Translation editor
// @namespace   karma-games
// @match       https://app2.redokun.com/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.0
// @author      Stefan Seifert
// @description 3/28/2025, 10:45:29 AM
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle(`

/* this should apply only to translation editor with previs image */
@media only screen and (min-width: 1500px) and (min-height: 1024px) {
  .mx-auto.w-full.max-w-6xl:has(img[src*="/thumbs/"]) {
    max-width: 100%;
  }
  .sticky.mr-8.w-80.bg-gray-100:has(img[src*="/thumbs/"]) {
    width: 40rem;
  }
}

`);
})();
