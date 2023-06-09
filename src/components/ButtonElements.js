import styled from 'styled-components'
import { Link } from'react-scroll';

export const Button = styled(Link)`
 border-radius: 50px;
 background: ${({primary})=>(primary?'#f7d339':'#010606')};
 white-space: nowrap;
 padding: ${({big})=>(big? '14px 48px':'12px 30px')};
 color: ${({dark})=>(dark?'#010606':'#fff')}; 
 font-size: ${({fontbig})=>(fontbig? '20px':'16px')};  
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 0.2s ease-in-out;

 &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary?'#fff':'#f7d339')};
 }
 `