import { Box } from '@chakra-ui/react';
import { MutableRefObject } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Carousel from 'react-multi-carousel';
import { useMainMenu } from '../../hooks/useMainMenu';
import { WorldFlagCard } from './WorldFlagCard';
import { WorldFlagsFoundStatus } from './WorldFlagsFoundStatus';

type AllCountryFlagsTypes = {
  name: string
  found: boolean
  code: string
}

type WorldFlagsCarouselProps = {
  allFlags: AllCountryFlagsTypes[]
  setAllFlagsIndex: Dispatch<SetStateAction<number>>
  carouselRef: MutableRefObject<any>
  setCountryFlagInput: Dispatch<SetStateAction<string>>
  countryFlagInput: string
  isDisabled: boolean
  flagIndex: number
  onLeave: () => void
  flagFound: boolean
}

export function WorldFlagsCarousel({
  allFlags,
  setAllFlagsIndex,
  carouselRef,
  onLeave,
  setCountryFlagInput,
  countryFlagInput,
  isDisabled,
  flagIndex,
  flagFound
}: WorldFlagsCarouselProps) {
  const { menuIsOpen } = useMainMenu()

  const foundFlagsLenght = allFlags.filter(flag => flag.found === true).length

  return (
    <Box pl='3' pr='3'>
      <Carousel
        additionalTransfrom={0}
        arrows={!menuIsOpen}
        autoPlaySpeed={500000}
        ref={carouselRef}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        // infinite
        itemClass="container-carousel-item"
        keyBoardControl={false}
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
        afterChange={(previousSlide, { currentSlide }) => {
          setAllFlagsIndex(currentSlide)
        }}
      >
        {allFlags.map((flag) => <WorldFlagCard
          isDisabled={isDisabled}
          setCountryFlagInput={setCountryFlagInput}
          countryFlagInput={countryFlagInput}
          code={flag.code}
          key={flag.code}
          currentFlagWasFound={flag.found}
          name={flag.name} />)}
      </Carousel>
      <WorldFlagsFoundStatus
        totalLenght={allFlags.length}
        foundLenght={foundFlagsLenght}
        currentFlagNumber={flagIndex + 1}
        onLeave={onLeave}
        flagFound={flagFound}
      />
    </Box>
  )
}
