import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import Image from "next/image";
import pencil from "./../public/pencil.jpg";
export default function Cart() {
  return (
    <>
      <Box px="6" bg="gray.100">
        <Text fontWeight="800" fontSize={["30px","36px","42px"]}>
          Your Cart
        </Text>
        <Flex direction={["column", "row", "row"]}>
          <Text opacity="0.90" as="section">
            If price is too hard on your eyes,
          </Text>
          <Text fontWeight="600"> try changing the theme.</Text>
        </Flex>
        <Flex justify="space-between">
          <Flex justify="center" py="3">
            <Box>
              <Image
                src={pencil}
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </Box>
            <Flex direction="column" px="3" justify="center">
              <Text fontWeight="600" fontSize="15">
                Penny Board
              </Text>
              <Text color="gray.500" fontSize="13">
                PNYCOMP27541
              </Text>
            </Flex>
          </Flex>
          <Text py="8" fontWeight="600">
            $119.0
          </Text>
        </Flex>
        <Flex justify="space-between" py="1">
          <Text color="gray.500">Subtotal</Text>
          <Text fontWeight="600">$119.0</Text>
        </Flex>
        <Flex justify="space-between" py="1">
          <Text color="gray.500">Shipping</Text>
          <Text fontWeight="600">$119.0</Text>
        </Flex>

        <Flex justify="space-between" py="1">
          <Text color="gray.500">Taxes (estimated)</Text>
          <Text fontWeight="600">$119.0</Text>
        </Flex>
        <Divider orientation="horizontal" color="white" mt="8" />
        <Flex justify="space-between" py="1">
          <Text color="gray.500">Total</Text>
          <Text fontWeight="600" fontSize="22">
            $476.0
          </Text>
        </Flex>
      </Box>
    </>
  );
}
