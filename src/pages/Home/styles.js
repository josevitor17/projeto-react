import styled from 'styled-components'





export const Container = styled.div`
  min-height: 80vh;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  font-family: 'SegoeUI', Tahoma, Geneva, Verdana, sans-serif;
`

// Ajusta o espaçamento entre o TopBackground e o formulário
export const Form = styled.form`
  background: #ffffff;
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  padding: 40px 36px;
  box-shadow: 0 4px 9px 9px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 40px;  /* aqui está o espaçamento que você pediu */
`

export const Title = styled.h1`
  font-size: 28px;
  color: #222222;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`

export const ContainerInputs = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;  /* para centralizar os inputs */

  & > div {
    flex: 1;
    max-width: 220px;        /* limitar largura para não esticar demais */
    display: flex;
    flex-direction: column;
  }
`

export const InputLabel = styled.label`
  font-weight: 800;
  font-size: 15px;
  color: #333333;
  margin-bottom: 8px;

  span {
    color: #e03131;
  }
`

export const Input = styled.input`
  padding: 12px 18px;
  border-radius: 10px;
  border: 1.5px solid #272727ff;
  font-size: 16px;
  color: #222;
  transition: border-color 0.25s ease-in-out;

  &:focus {
    outline: none;
    border-color: #171622ff;
    box-shadow: 0 0 8px rgba(39, 29, 230, 0.5);
  }

  &::placeholder {
    color: #c2bebeff;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;

  button{

    background-color:#fff;
  }
`
