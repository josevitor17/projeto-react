import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import {
  Title,
  Container,
  Form,
  Input,
  ContainerInputs,
  InputLabel,
  ButtonsContainer,
} from './styles.js'

import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    try {
      if (
        !inputName.current.value.trim() ||
        !inputAge.current.value.trim() ||
        !inputEmail.current.value.trim()
      ) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
      }

      await api.post('/usuarios', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value,
      })

      navigate('/lista-de-usuarios')
    } catch (error) {
      alert('Erro ao cadastrar usuário, tente novamente.')
      console.error(error)
    }
  }

  return (
    <Container>
      <TopBackground  />
      <Form>
        <Title>Cadastro de Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel htmlFor="name">
              Nome <span>*</span>
            </InputLabel>
            <Input
              id="name"
              type="text"
              placeholder="Nome do usuário"
              ref={inputName}
              autoComplete="off"
            />
          </div>
          <div>
            <InputLabel htmlFor="age">
              Idade <span>*</span>
            </InputLabel>
            <Input
              id="age"
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
              autoComplete="off"
            />
          </div>
        </ContainerInputs>

       <div
  style={{
    width: '100%',
    maxWidth: '360px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
  }}
>

          <InputLabel htmlFor="email">
            E-mail <span>*</span>
          </InputLabel>
          <Input
            id="email"
            type="email"
            placeholder="Email do usuário"
            ref={inputEmail}
            autoComplete="off"
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <ButtonsContainer  >
        <Button type="button" onClick={() => navigate('/lista-de-usuarios')} >
          Visualizar Usuários
        </Button>
      </ButtonsContainer>
    </Container>
    
  )
}

export default Home
