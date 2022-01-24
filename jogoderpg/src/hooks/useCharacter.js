import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSide';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = () => {
        const[pos, setPos] = useState({x: 3, y: 5});
        const[side,setSide] = useState(0);

        const moveLeft = () =>{
            setPos(pos =>({

                x: canMove(pos.x-1,pos.y) ? pos.x -1 : pos.x,
                y: pos.y
            }));
            setSide(1);
        }

        const moveRight = () =>{
            setPos(pos =>({

                x: canMove(pos.x+1,pos.y) ? pos.x +1 : pos.x,
                y: pos.y

            }));
            setSide(3);
        }

        const moveDown = () =>{
            setPos(pos =>({

                x: pos.x,
                y: canMove(pos.x, pos.y + 1) ? pos.y +1 : pos.y

            }));
            setSide(0)
        }

        const moveUp = () =>{
            setPos(pos =>({

                x: pos.x,
                y: canMove(pos.x, pos.y - 1) ? pos.y -1 : pos.y

            }));
            setSide(2);
        }

        const canMove = (x,y) =>{
            if(x < 0 || y < 0) return false;

            if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
                if(mapSpots[y][x] === 1) return true;
            }

            return false;
        }

        return{
            x: pos.x,
            y: pos.y,
            side,
            moveLeft,
            moveRight,
            moveUp,
            moveDown
        };
}