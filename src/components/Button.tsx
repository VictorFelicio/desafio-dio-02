import { Button } from '@chakra-ui/react';
interface IBotao {
    onClick: () => void;
}

export const Botao = ({ onClick }: IBotao) => {
    return (
        <Button
            onClick={onClick}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
        >
            Button
        </Button>
    );
};
