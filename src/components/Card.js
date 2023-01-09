import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack bg="white" color="black" borderRadius="lg">
        <Image src={imageSrc} alt={title} borderRadius="lg" />
        <VStack align="flex-start" p="3">
          <Heading as="h3" size="xs">
            {title}
          </Heading>
          <Text color="gray">{description}</Text>
          <a href="http://">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
