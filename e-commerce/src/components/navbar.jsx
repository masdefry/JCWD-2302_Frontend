import { Flex, Box, Spacer, Text, Button } from '@chakra-ui/react'

// Logo
import Logo from './../supports/assets/logo.png'

import './navbar.css'

import {MdLocationOn} from 'react-icons/md'

export default function Navbar(){
    return(
        <>
            <Flex px='50px' py='20px' className='navbar'>
                <Flex alignItems='center' w='50%'>
                    <img src={Logo} width='50px' height='50px' />
                    <Text pl='30px' fontWeight='bold'>
                        Cards 
                    </Text>
                    <Text pl='30px' fontWeight='bold'>
                        Order 
                    </Text>
                    <Text pl='30px' fontWeight='bold'>
                        Gift
                    </Text>
                </Flex>
                <Spacer />
                <Flex alignItems='center'>
                    <MdLocationOn />
                    <Text mr='30px' fontWeight='bold'>
                        Find a store
                    </Text>
                    <Button mr='20px' size='md' borderRadius='full' variant='ghost' style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>
                        Sign in
                    </Button>
                    <Button size='md' borderRadius='full' variant='ghost' style={{backgroundColor: 'black', color: 'white'}}>
                        Join now
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}