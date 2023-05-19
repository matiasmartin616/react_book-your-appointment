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
import { ArrowForwardIcon, AddIcon } from '@chakra-ui/icons'
import { getFormData } from '../../../helpers/formHelpers'

const Signup = () => {
  const formBackground = useColorModeValue('white.100', 'blue.700')
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)

  const navigate = useNavigate()

  async function formSubmited (event) {
    event.preventDefault()
    /* setFormSubmitLoading(true)
    const form = event.target
    const data = getFormData(form)

     */
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
            <Text fontSize='lg'>Reserva</Text>
          </Box>
        </Heading>
        <form onSubmit={formSubmited}>
          <Input
              placeholder="2023/04/23"
              type="date"
              variant="filled"
              id='date'
              mb='6'
          />
          <Input
            placeholder="12:45"
            type="time"
            id="timeIni"
            variant="filled"
            mb="6"
          />
          <Box display="flex" justifyContent="space-evenly" alignItems="center" pb="9">
            <Button colorScheme="green" type='submit' leftIcon={<AddIcon/>} size='sm' w='30%'>
              15min
            </Button>
            <Button colorScheme="green" type='button' leftIcon={<AddIcon/>} size='sm' w='30%'>
              30min
            </Button>
            <Button colorScheme="green" type='button' leftIcon={<AddIcon/>} size='sm' w='30%'>
              1h
            </Button>
          </Box>
          <Input
            placeholder="Contraseña"
            id="password"
            type="password"
            variant="filled"
            mb="6"
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" pb="9">
            <Button colorScheme="blue" type='submit' rightIcon={<ArrowForwardIcon />} size='sm' isLoading={formSubmitLoading}>
              Reservar
            </Button>
          </Box>
        </form>
      </Flex>
    </Flex>

  )
}

export default Signup
