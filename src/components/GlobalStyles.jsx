import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --swiper-theme-color: #d7b176;
        --swiper-navigation-size: 24px;
    }

    @font-face {
        font-family: 'FS Siena';
        src: url('/fonts/FSSiena-Thin.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'FS Siena';
        src: url('/fonts/FSSiena-ExtraLight.otf') format('opentype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'FS Siena';
        src: url('/fonts/FSSiena-Light.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'FS Siena';
        src: url('/fonts/FSSiena-Medium.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Minion Pro';
        src: url('/fonts/MinionPro-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent; 
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'FS Siena', sans-serif;
        font-weight: 300;
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }

    body {
        touch-action: none;
        color: #000000;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'FS Siena', sans-serif;
        font-weight: 500;
    }

    p {
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .highlight {
        font-family: 'Boska', serif;
        font-style: italic;
    }

    .App {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .render-canvas {
        touch-action: none;
    }
 `;

export default GlobalStyles;
