import {
  Badge,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { localeType } from '../../@types/localeType';
import { normalizeHomeLanguage } from '../../translations/home/normalizeHomeLanguage';

type HomeDrawerListProps = {
  locale: localeType
}
export function HomeDrawerList({ locale }: HomeDrawerListProps) {
  const router = useRouter()
  const { translation } = normalizeHomeLanguage(locale)
  const hrefLink = (router.query.path) as string

  const ListItems = [
    { name: translation.world, param: "continent=world", level: translation.hard, colorBadge: "red" },
    { name: translation.africa, param: "continent=africa", level: translation.medium, colorBadge: "yellow" },
    { name: translation.asia, param: "continent=asia", level: translation["medium"], colorBadge: "yellow" },
    { name: translation.europe, param: "continent=europe", level: translation["medium"], colorBadge: "yellow" },
    { name: translation.north_america, param: "continent=north-america", level: translation["medium-easy"], colorBadge: "blue" },
    { name: translation['south-america'], param: "continent=south-america", level: translation["easy"], colorBadge: "green" },
    { name: translation.oceania, param: "continent=oceania", level: translation["easy"], colorBadge: "green" },
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
