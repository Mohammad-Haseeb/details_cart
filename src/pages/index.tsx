import { Flex } from '@chakra-ui/react';
import Cart from 'components/cart';
import Form from 'components/form';


export default function Home() {
  return (
    <Flex justify="center" direction={["column", "column", "row"]} mt="10">
    <Form/>
    <Cart/>
    </Flex>
  );
}
