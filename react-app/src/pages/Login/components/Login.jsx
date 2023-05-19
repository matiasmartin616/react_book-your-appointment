/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
    useColorModeValue,
    Image,
    Box,
    Text
} from '@chakra-ui/react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { MoonIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { authenticateUser } from '../../../services/authService'
import { getFormData } from '../../../helpers/formHelpers'
import useAuthStore from '../../../stores/authStore'

const Login = () => {
    const { toggleColorMode } = useColorMode('light')
    const formBackground = useColorModeValue('white.100', 'blue.700')
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const navigate = useNavigate()
    const loginStore = useAuthStore((state) => state.login)
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    useEffect(() => {
        /* isLoggedIn && */ navigate('/users')
    }, [])

    async function formSubmited (event) {
        event.preventDefault()
        /* setFormSubmitLoading(true)
        const form = event.target */
        /* const data = getFormData(form) */

        /* authenticateUser(data)
        .then((response) => {
            if (response.data.accessToken) {
                // guardar el token en el estado global (store) para utilizarlo en la app
                loginStore(response.data.accessToken)
                // navegar hasta usuarios
                navigate('/users')
            }
            setFormSubmitLoading(false)
        })
        .catch(() => {
            // TODO: gestionar error
            setFormSubmitLoading(false)
        }) */
    }

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <Flex
                flexDirection="column"
                bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="xs"
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
                        <Text fontSize='lg'>Iniciar sesión</Text>
                    </Box>
                </Heading>
                <form onSubmit={formSubmited}>
                    <Input
                        placeholder="Introduce tu email"
                        type="email"
                        id='email'
                        variant="filled"
                        mb={6}
                    />

                    <Input
                        placeholder="**********"
                        type="password"
                        id='password'
                        variant="filled"
                        mb={6}
                    />
                    <FormControl display="flex" justifyContent="space-between" alignItems="center" pb="9">
                        <Button colorScheme='white' variant='link' size='sm'>
                            <RouterLink to="/signup">
                                Crear cuenta
                            </RouterLink>
                        </Button>
                        <Button colorScheme="blue" type='submit' rightIcon={<ArrowForwardIcon />} size='sm' isLoading={formSubmitLoading}>
                            Entrar
                        </Button>
                    </FormControl>
                </form>

                <FormControl display="flex" alignItems="center" justifyContent="flex-end">

                    <FormLabel htmlFor="dark_mode" mb="0">
                        <MoonIcon />
                    </FormLabel>

                    <Switch
                        id="dark_mode"
                        colorScheme="blue"
                        size="lg"
                        onChange={toggleColorMode}
                        isChecked={useColorMode().colorMode === 'dark'}
                    />
                </FormControl>
            </Flex>
        </Flex>
    )
}

export default Login
