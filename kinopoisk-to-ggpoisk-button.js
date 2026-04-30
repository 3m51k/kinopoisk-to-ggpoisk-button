// ==UserScript==
// @name         GGpoisk Flag
// @namespace    https://github.com/3m51k/kinopoisk-to-ggpoisk-button
// @homepageURL  https://github.com/3m51k/kinopoisk-to-ggpoisk-button
// @supportURL   https://github.com/3m51k/kinopoisk-to-ggpoisk-button/issues
// @downloadURL  https://raw.githubusercontent.com/3m51k/kinopoisk-to-ggpoisk-button/main/ggpoisk-flag.user.js
// @updateURL    https://raw.githubusercontent.com/3m51k/kinopoisk-to-ggpoisk-button/main/ggpoisk-flag.user.js
// @version      1.0.0
// @author       3m51k
// @description  Добавляет рыжую вертикальную закладку на Кинопоиск для перехода на GGpoisk.
// @match        *://*.kinopoisk.ru/film/*
// @match        *://*.kinopoisk.ru/series/*
// @icon         https://avatars.githubusercontent.com/u/191535389?s=400&u=be9b2964555887e8a79f9eec21d2d9dc52addf&v=4
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function addVerticalFlag() {
        if (document.getElementById('ggpoisk-vertical')) return;

        const flag = document.createElement('div');
        flag.id = 'ggpoisk-vertical';
        flag.textContent = '▶';

        flag.style.cssText = `
            position: fixed;
            top: 114px;
            left: 0;
            z-index: 999999;
            cursor: pointer;
            width: 36px;
            background: #ff6b35;
            color: white;
            font-size: 16px;
            font-weight: bold;
            font-family: monospace;
            text-align: center;
            padding: 12px 0;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            transition: 0.2s;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            letter-spacing: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        flag.addEventListener('mouseenter', () => {
            flag.style.width = '44px';
            flag.style.background = '#ff5722';
            flag.style.padding = '14px 0';
        });

        flag.addEventListener('mouseleave', () => {
            flag.style.width = '36px';
            flag.style.background = '#ff6b35';
            flag.style.padding = '12px 0';
        });

        flag.addEventListener('click', () => {
            let newUrl = window.location.href.replace(/kinopoisk\.ru/i, 'ggpoisk.ru');
            window.open(newUrl, '_blank');
        });

        document.body.appendChild(flag);
    }

    addVerticalFlag();
})();
