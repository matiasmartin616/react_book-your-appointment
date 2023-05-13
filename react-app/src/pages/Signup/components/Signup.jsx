import { React, useState } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Image,
  Box,
  Text
} from '@chakra-ui/react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { getFormData } from '../../../helpers/formHelpers'
import { createUser } from '../../../services/authService'

const Signup = () => {
  const formBackground = useColorModeValue('white.100', 'blue.700')
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)

  const navigate = useNavigate()

  async function formSubmited (event) {
    event.preventDefault()
    setFormSubmitLoading(true)
    const form = event.target
    const data = getFormData(form)

    createUser(data)
      .then((response) => {
        setFormSubmitLoading(false)
        navigate('/')
      })
      .catch(() => {
        // TODO: gestionar error
        setFormSubmitLoading(false)
      })
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        maxW={['85%', '60%', '40%', '35%', '30%', '20%']}
      >
        <Heading mb={6}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" h="32px" gap="10px">
            <Image
              h="32px"
              w="32px"
              src='/src/assets/hiberusIcon32x32.png'
              alt='Icono de Hiberus'
              borderRadius='10px'
            />
            <Text fontSize='lg'>Regístrate</Text>
          </Box>
        </Heading>
        <form onSubmit={formSubmited}>
          <Box display="flex" justifyContent="space-between" alignItems="center" gap="6" mb="6">
            <Input
              placeholder="Nombre"
              type="name"
              variant="filled"
              id='name'
            />
            <Input
              placeholder="Apellido"
              type="surname"
              variant="filled"
              id='surname'
            />
          </Box>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            variant="filled"
            mb="6"
          />
          <Input
            placeholder="Contraseña"
            id="password"
            type="password"
            variant="filled"
            mb="6"
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" pb="9">
            <Button colorScheme='white' variant='link' size='sm'>
              <RouterLink to="/">
                ¿Ya tiene una cuenta?
              </RouterLink>
            </Button>
            <Button colorScheme="blue" type='submit' rightIcon={<ArrowForwardIcon />} size='sm' isLoading={formSubmitLoading}>
              Registro
            </Button>
          </Box>
        </form>
      </Flex>
    </Flex>

  )
}

export default Signup
