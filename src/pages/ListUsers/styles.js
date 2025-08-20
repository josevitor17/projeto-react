import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

   
`;

export const UserImageLarge = styled.img`
  width: 60vw;
  height: auto; /* deixa a altura ser proporcional */
  max-height: 60vh; /* limite para não passar da tela */
  object-fit: cover;
  background-color: black;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  display: block; /* evita espaços extras */
`;


export const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  max-width: 1200px;   
  width: 90%;         
  padding: 30px 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* fica responsivo e proporcional */
  gap: 20px;
  width: 100%;
`;

export const CardUsers = styled.div`
  background-color: #ff4d4d;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  /* Garante que o conteúdo ocupe o máximo, mas não empurre o ícone */
  > div {
    flex: 1; /* Faz o container de texto ocupar o espaço disponível */
    min-width: 0; /* Permite que o texto diminua para quebrar */
  }

  h3 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: #fff;
    font-size: 13px;
    font-weight: 200;
    margin: 0;
    /* Para email, permitir quebra de linha suave */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 15px;
  flex-shrink: 0; /* Faz com que o ícone não diminua nem saia do lugar */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;



export const AvatarUsers = styled.img`
  width: 65px;  /* largura fixa */
  height: 65px; /* mesma altura para manter formato quadrado */
  border-radius: 50%;
  object-fit: cover; /* cobre o espaço sem distorcer */
  display: block; /* remove espaços brancos */
  background-color: #fff; /* fundo branco caso não carregue */
`;


export const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 30px;
  align-self: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04343;
  }

  &:active {
    background-color: #b83838;
  }
`;
