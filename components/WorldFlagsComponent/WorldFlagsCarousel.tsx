import { Badge, Box, Center, Image } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { WorldFlagCard } from './WorldFlagCard';


export function WorldFlagsCarousel() {
  return (
    <Box pl='3' pr='3'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={10000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <WorldFlagCard
          code='nor'
        />
        <WorldFlagCard
          code='br'
        />
        <WorldFlagCard
          code='ar'
        />

      </Carousel>
    </Box>
  )
}
