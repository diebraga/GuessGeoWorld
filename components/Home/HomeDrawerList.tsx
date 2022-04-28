import {
  Badge,
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
    { name: "World", param: "continent=world", level: "hard", colorBadge: "red" },
    { name: "Africa", param: "continent=africa", level: "medium", colorBadge: "yellow" },
    { name: "Asia", param: "continent=asia", level: "medium", colorBadge: "yellow" },
    { name: "North America", param: "continent=north-america", level: "medium-easy", colorBadge: "blue" },
    { name: "South America", param: "continent=south-america", level: "easy", colorBadge: "green" },
    { name: "Oceania", param: "continent=oceania", level: "easy", colorBadge: "green" },
  ]

  return (
    <UnorderedList as={VStack} listStyleType='none' textAlign='start' spacing='2' mt='4'>
      {ListItems.map(({ name, param, colorBadge, level }) => {
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
            <Badge ml='1' colorScheme={colorBadge} fontSize='x-small'>
              {level}
            </Badge>
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}
