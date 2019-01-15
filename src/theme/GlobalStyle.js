import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Ropa Sans', sans-serif;
    }

    body {
        background: #14233c;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .wrapper {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }`;
