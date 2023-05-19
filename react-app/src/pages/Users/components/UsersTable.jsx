import React, { useState, useEffect } from 'react'
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  useColorModeValue,
  Th,
  Box
} from '@chakra-ui/react'
import UsersTableRow from '../../../components/Users/UsersTableRow'
import { getUsers, deleteUser, isSuccess } from '../../../services/userService'
import useAuthStore from '../../../stores/authStore'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

const UsersTable = ({ data }) => {
  const formBackground = useColorModeValue('white', 'blue.700')
  const [users, setUsers] = useState([])
  const token = useAuthStore((state) => state.token)
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)


  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(token, userId)
      if (isSuccess(response.status)) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
      } else {
        // TODO: Gestionar error
      }
    } catch (error) {
      // TODO: Gestionar error
      console.error('Error al eliminar el usuario:', error)
    }
  }

  const fetchUsers = async (token) => {
    try {
      const response = await getUsers(token)

      if (!isSuccess(response.status)) {
        logout()
        navigate('/')
      }
      setUsers(response.data.items)
    } catch (error) {
      // TODO: gestionar error
      // console.log(error)
    }
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="space-evenly" flexDirection="column">
    <Logout></Logout>
      <Box fontSize="xl" fontWeight="bold">Listado de usuarios</Box>
      <Flex
        flexDirection="column"
        bg={formBackground}
        borderRadius={8}
        boxShadow="base"
        w={[
          '85%',
          '80%',
          '70%',
          '60%',
          '60%',
          '60%'
        ]}
        style={{ overflowY: 'auto' }}
        h={'70vh'}
        >
        <Table>
          <Thead
          position="sticky"
          top="0"
          zIndex="100"
          bg={formBackground}
          >
            <Tr>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) =>
            <UsersTableRow key={user.id} data={user} onDelete={handleDeleteUser}></UsersTableRow>
            )}
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  )
}

export default UsersTable
