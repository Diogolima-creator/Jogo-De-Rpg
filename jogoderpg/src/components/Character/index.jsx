import * as C from './style';

export const Character = ( {x, y, side} ) => {
    const size = 30;
    const sides = {
        0: 0,
        1: -30,
        3: -60,
        2: -90

    }
    return (  
        <C.Container 
        size = {size}
        left = {x*size} 
        top={y*size}
        sidePos={sides[side] ??  0}>
            
        </C.Container>
    );
}