import { Flex, Box, Spacer, Text, Button } from '@chakra-ui/react'

// Logo
import Logo from './../supports/assets/logo.png'

import './navbar.css'

import {MdLocationOn} from 'react-icons/md'

import {Link, useLocation} from 'react-router-dom'

export default function Navbar(){
    const location = useLocation() // Digunakan untuk mendapatkan pathname
    console.log(location)
    return(
        <>
            <Flex px='50px' py='20px' className='navbar'>
                <Flex alignItems='center' w='50%'>
                    <Link to='/'>
                        <img src={Logo} width='50px' height='50px' />
                    </Link>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <Text pl='30px' fontWeight='bold'>
                                Cards 
                            </Text>
                            <Text pl='30px' fontWeight='bold'>
                                Order 
                            </Text>
                            <Text pl='30px' fontWeight='bold'>
                                Gift
                            </Text>
                        </>
                    }
                </Flex>
                <Spacer />
                <Flex alignItems='center'>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <MdLocationOn />
                            <Text mr='30px' fontWeight='bold'>
                                Find a store
                            </Text>
                            <Button mr='20px' size='md' borderRadius='full' variant='ghost' style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>
                                Sign in
                            </Button>
                            <Button size='md' borderRadius='full' variant='ghost' style={{backgroundColor: 'black', color: 'white'}}>
                                <Link to='/register'>
                                    Join now
                                </Link>
                            </Button>
                        </>
                    }
                </Flex>
            </Flex>
        </>
    )
}