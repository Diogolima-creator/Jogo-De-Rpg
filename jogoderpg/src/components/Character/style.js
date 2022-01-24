import styled from "styled-components";

export const Container = styled.div(( {size ,left , top, sidePos} ) => (`
    width: ${size}px;
    height: ${size}px;
    background-image:url('assets/char.png');
    background-position: 0px ${sidePos}px;
    position: absolute;
    left: ${left}px;
    top: ${top}px;
`));  