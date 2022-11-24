import {
    Button, 
    Input, 
    Textarea, 
    Text, 
    Heading,
    Grid, 
    GridItem,
    Flex, Spacer,
    Center, 
    Square,
    Box
} from '@chakra-ui/react';

let Chakra = () => {
    return(
        <div>
            <Button colorScheme='blue'>
                Click Me
            </Button>
            <Input placeholder='large size' size='lg' />
            <Textarea placeholder='Here is a sample placeholder' />

            {/* Text */}
            <Text fontSize='md'>(md) In love with React & Next</Text>
            {/* Heading */}
            <Heading>I'm a Heading</Heading>
            {/* Layouting Grid */}
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>

            <Grid
            h='200px'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            >
                <GridItem colSpan={4} bg='tomato' />
                <GridItem rowSpan={2} colSpan={2} bg='papayawhip' />
                <GridItem colSpan={3} bg='papayawhip' />
                <GridItem colSpan={5} bg='tomato' />
            </Grid>

            {/* Flex */}
            <Flex color='white' mt={25} mb={25}>
                <Center w='100px' bg='green.500'>
                    <Text>Box 1</Text>
                </Center>
                <Square bg='blue.500' size='150px'>
                    <Text>Box 2</Text>
                </Square>
                <Center flex='1' bg='tomato'>
                    <Text>Box 3</Text>
                </Center>
            </Flex>

            <Flex mt={500} mb={300}>
                
                <Spacer />
                <Box p='4' bg='red.400'>
                    Box 1
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    Box 2
                </Box>
            </Flex>
        </div>
    )
}

export default Chakra