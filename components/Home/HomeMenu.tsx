import { Box, Center, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Link from 'next/link'

export function HomeMenu() {
  return (
    <Center flexDir='column' mb='4' position='absolute' zIndex='2' top='30%'>
      <Heading fontFamily='Luckiest Guy' fontSize={["37px", "50px", "50px", "69px"]} color='white' textShadow='-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'>
        GuessGeoWorld
      </Heading>
      <HStack fontSize={["14px", "17px", "19px", "23px"]}>
        <Link href='/world-countries' passHref>
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#2B6CB0",
            }}
          >
            <Box
              w={["140px", "200px", "250px"]}
              textAlign='center'
              cursor='pointer'
              borderRadius='md'
              bg={useColorModeValue("white", "gray.800")}
              boxShadow='lg'
              border='1px'
            >
              <Box px='4' py='2' color={useColorModeValue("black", "white")}>
                <Text fontWeight='bold'>
                  World Countries
                </Text>
                <small>
                  Can you name all countries the by heart?
                </small>
                <p>
                  <small>
                    <strong>
                      Discover
                    </strong>
                  </small>
                </p>
              </Box>
            </Box>
          </motion.div>
        </Link>
        <Link href='/world-flags' passHref>
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#2B6CB0",
            }}
          >
            <Box
              w={["140px", "200px", "250px"]}
              textAlign='center'
              cursor='pointer'
              borderRadius='md'
              bg={useColorModeValue("white", "gray.800")}
              boxShadow='lg'
              border='1px'
            >
              <Box px='4' py='2' color={useColorModeValue("black", "white")}>
                <Text fontWeight='bold'>
                  World Flags
                </Text>
                <small>
                  Test your knowledge naming country flags!
                </small>
                <p>
                  <small>
                    <strong>
                      Discover
                    </strong>
                  </small>
                </p>
              </Box>
            </Box>
          </motion.div>
        </Link>
      </HStack>
    </Center>
  )
}
