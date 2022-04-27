import {
  List,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export function HomeDrawerList() {
  const router = useRouter()

  const hrefLink = (router.query.path) as string

  const ListItems = [
    { name: "World", param: "continent=world" },
    { name: "Africa", param: "continent=africa" },
    { name: "Asia", param: "continent=asia" },
    { name: "North America", param: "continent=north-america" },
    { name: "South America", param: "continent=south-america" },
    { name: "Oceania", param: "continent=oceania" },
  ]

  return (
    <UnorderedList as={VStack} listStyleType='none' textAlign='start' spacing='2' mt='4'>
      {ListItems.map(({ name, param }) => {
        return (
          <ListItem
            key={name}
            fontWeight='400'
            fontSize='x-large'
            as={motion.li}
            whileHover={{
              scale: 1.1
            }}
            cursor='pointer'
            onClick={() => router.push(`/${hrefLink}?${param}`)}
          >
            {name}
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}
