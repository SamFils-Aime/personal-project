import { createGlobalStyle } from 'styled-components';

import a from './wolf/Thirsty Script Rough W01 Blk.woff';
import b from "./wolf/Thirsty Script Rough W01 Blk.woff2"
export default createGlobalStyle`
@font-face {
    font-family: 'Font Name';
    src: local('Font Name'), local('FontName'),
    url(${b}) format('woff2'),
    url(${a}) format('woff');
    font-weight: 300;
    font-style: normal;
}
`;