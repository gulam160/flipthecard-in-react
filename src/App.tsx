import { Flex } from "@chakra-ui/react";
import Flipcard from "@/components/Flipcard";

function App() {
  return (
    <Flex justify={"center"} align={"center"} className="w-full p-4">
      <Flipcard />
    </Flex>
  );
}

export default App;
