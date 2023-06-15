import styled from 'styled-components';

export const Container = styled.div`
position: relative;
`

export const AdBg=styled.div`
position:relative;
z-index:0;
hight:100%;
top:0;
`
export const VideoBg=styled.video`
 
 width:100%;
 hight: 100%;
 padding-right:0;
`
export const Vidtext = styled.div`
position:absolute;
top:40%;
left:20%;
right:25%;
z-index:1;
color:white;
text-align: center;

@media screen and (max-width: 480px) {
    max-height:5px;
  }

`
export const H1 = styled.h1`
text-shadow:2px 2px pink;
font-size: 30px;
line-height: 1.1;
font-weight: 600;

@media screen and (max-width: 480px) {
    font-size: 25px;
  }

`