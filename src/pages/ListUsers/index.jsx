import { useEffect, useState } from "react";
import UserImage from "../../assets/users.jpg";
import api from "../../services/api"; // Axios já configurado com backend online
import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  UserImageLarge,
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUsers,
  Button
} from "./styles"; 

import Trash from "../../assets/trash.svg";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // Busca usuários do backend
  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/usuarios");
        setUsers(data);
      } catch (error) {
        console.error(error);
        setErrorMsg(
          "Não foi possível carregar os usuários. Verifique a conexão ou backend."
        );
      }
    }
    getUsers();
  }, []);

  // Deleta usuário
  const deleteUser = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
      setErrorMsg("Não foi possível deletar o usuário.");
    }
  };

  const handleCardClick = (user) => setSelectedUser(user);
  const closeDetailModal = () => setSelectedUser(null);
  const openDeleteModal = (e, user) => {
    e.stopPropagation();
    setUserToDelete(user);
  };
  const confirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
      setUserToDelete(null);
    }
  };
  const cancelDelete = () => setUserToDelete(null);

  return (
    <PageWrapper>
      <UserImageLarge src={UserImage} alt="imagem-usuarios" />

      <Container>
        <Title>Usuários Cadastrados</Title>

        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        {users.length === 0 && !errorMsg && <p>Carregando usuários...</p>}

        <ContainerUsers>
          {users.map((user) => (
            <CardUsers key={user.id} onClick={() => handleCardClick(user)}>
              <AvatarUsers
                src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${user.name}`}
              />
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </div>
              <TrashIcon
                src={Trash}
                alt="icone-lixo"
                onClick={(e) => openDeleteModal(e, user)}
              />
            </CardUsers>
          ))}
        </ContainerUsers>

        <Button type="button" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </Container>

      {/* Modal de detalhes */}
      {selectedUser && (
        <div style={overlayStyle} onClick={closeDetailModal}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedUser.name}</h2>
            <p>Idade: {selectedUser.age}</p>
            <p>Email: {selectedUser.email}</p>
            <Button onClick={closeDetailModal}>Fechar</Button>
          </div>
        </div>
      )}

      {/* Modal de exclusão */}
      {userToDelete && (
        <div style={overlayStyle} onClick={cancelDelete}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h3>Tem certeza que deseja excluir?</h3>
            <p>
              O usuário <strong>{userToDelete.name}</strong> será removido permanentemente.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <Button
                onClick={confirmDelete}
                style={{ background: "red", color: "#fff" }}
              >
                Confirmar
              </Button>
              <Button
                onClick={cancelDelete}
                style={{ background: "#ccc", color: "#000" }}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default ListUsers;

// Estilos do modal
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
  maxWidth: "90%",
};
