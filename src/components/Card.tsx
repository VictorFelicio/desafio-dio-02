import { Center, Input, Box } from '@chakra-ui/react';
import { login } from '../services/login';
import { Botao } from '../components/Button';

export const Card = () => {
    return (
        <div>
            <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
                <Box
                    backgroundColor="#FFFFFF"
                    borderRadius="25px"
                    padding="15px"
                >
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder="email" type='text'/>
                    <Input placeholder="password" type='password'/>
                    <Center>
                        <Botao onClick={login} />
                    </Center>
                </Box>
            </Box>
        </div>
    );
};
