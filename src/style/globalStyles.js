import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*
    --- 01 TYPOGRAPHY SYSTEM ---
    
    - Font sizes (px)
    10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98    
    
    - Font weights:
    Default: 400
    
    - Line heights:
    Default: 1   

    --- 02 COLORS ---
    
    - Primary: 
    #e67e22
    #cf711f
    - Tints:
    - Shades:
    - Accents:
    - Greys:
    #555
    #333
    
    --- 05 SHADOWS ---
    
    --- 06 BORDER-RADIUS ---
    
    --- 07 WHITESPACE ---    
    
    - Spacing system (px)
    2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
    */
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik',sans-serif;
        line-height: 1;
        font-weight: 400;
        color: #555;
    }
`;

export default GlobalStyles;
