import {css} from "styled-components";


export const BREAKPOINT_MOBILE = (props) => {
return css `
@media only screen and (max-width: 380px) {
    ${props}
}
`
};


export const BREAKPOINT_TABLET = (props) => {
    return css `
    @media only screen and (max-width: 900px) {
        ${props}
    }
    `
    };
    
