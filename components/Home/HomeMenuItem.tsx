import { Box, Text, useColorModeValue, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion';

type HomeMenuItemProps = {
  title: string
  description: string
  onClick: () => void
}

export function HomeMenuItem({ onClick, title, description }: HomeMenuItemProps) {
  return (
    <Link onClick={onClick}>
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
              {title}
            </Text>
            <small>
              {description}
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
  )
}
