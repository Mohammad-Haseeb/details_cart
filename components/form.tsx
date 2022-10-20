import {
  Box,
  Button,
  Checkbox,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
export default function Form() {
  return (
    <Box px="2">
      <Text fontWeight="800" fontSize={["30px","36px","42px"]}>
        Your details
      </Text>
      <Text opacity="0.60">
        If you already have an account, click here to login in.
      </Text>
      <Box>
        <Stack direction="row" spacing="6" my="4">
          <Box>
            <Text fontWeight="200" fontSize="15" mb="1">
              First Name:
            </Text>
            <Input placeholder="Muhamamd" size="sm" bg="gray.100" />
          </Box>

          <Box>
            <Text fontWeight="200" fontSize="15" mb="1">
              Last Name:
            </Text>
            <Input placeholder="Abdul" size="sm" bg="gray.100" />
          </Box>
        </Stack>

        <Box my="4">
          <Text fontWeight="200" fontSize="15" mb="1">
            Address:
          </Text>
          <Input placeholder="Steet 10, East Cast" size="sm" bg="gray.100" />
        </Box>
        <Stack direction="row" spacing="6">
          <Box>
            <Text fontWeight="200" fontSize="15" mb="1">
              City:
            </Text>
            <Input placeholder="Lahore" size="sm" bg="gray.100" />
          </Box>

          <Box>
            <Text fontWeight="200" fontSize="15" mb="1">
              Country:
            </Text>
            <Select
              placeholder="Select option"
              size="sm"
              w="180px"
              bg="gray.100"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Stack>
        <Box my="6">
          <Checkbox colorScheme="green" defaultChecked />
          <Box mt="5">
            <Button colorScheme="green" w="full">
              Place order
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
