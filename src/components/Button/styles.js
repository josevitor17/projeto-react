import styled from 'styled-components'; 

export const Button = styled.button`
border-radius: 35px;
border: ${(props) => (props.theme ==='primary' ? 'none' : '1px solid #bbb')};
background-color:${(props) => props.theme === 'primary' ? 'wheat' : 'transparent'};
font-size: 16px;
padding: 16px 32px; 
cursor: pointer;

 &:hover {
    opacity: ${(props) => (props.theme === 'primary' ? '0.5 ': '0.4' )};
 }

 &:active{
    opacity:0.3;
 }`


