import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../../stores/authStore'

const Logout = ({ data }) => {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Box>
        <Button
        colorScheme='red'
        onClick={handleLogout}
        variant='ghost'
        size='sm'
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '30px'
        }}
        >
        Cerrar sesión
        </Button>
    </Box>
  )
}

export default Logout
