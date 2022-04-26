import { Center, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useFetch } from "../../hooks/useFetch";

type dataTypes = {
  stargazers_count: number
  html_url: string
}

export function GithubStars() {
  const { data } = useFetch('https://api.github.com/repos/diebraga/GuessGeoWorld?page=$i&per_page=100') as { data: dataTypes }

  return (
    <a href={data?.html_url} target="_blank" style={{ marginTop: "50px" }}>
      <HStack border='1px' borderRadius='md' bg={useColorModeValue("white", "gray.800")} px='2'>
        <Icon as={AiFillStar} color='yellow.400' /> <small>Stars</small>
        <Center as='span' borderRadius='full' bg={useColorModeValue("gray.100", "gray.700")} fontSize='12px' boxSize='15px' fontWeight='400'>
          {data?.stargazers_count || 0}
        </Center>
      </HStack>
    </a>
  )
}
