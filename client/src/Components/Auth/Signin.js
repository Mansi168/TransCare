import React from 'react'
import {Box, Center, Input , Heading, FormLabel, FormControl, FormErrorMessage} from '@chakra-ui/react';

const Signin = () => {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>
            <form onSubmit={() =>{}}>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="user@gmail.com" />
                    <FormErrorMessage>Invalid Email</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="********" />
                    <FormErrorMessage>Invalid Password</FormErrorMessage>
                </FormControl>
                <button type="submit">Log In</button>
            </form>
        </Box>
    </Center>
  )
}

export default Signin;
