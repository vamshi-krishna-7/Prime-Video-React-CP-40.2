// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  const {movieDetails} = props

  return (
    <>
      <Slider {...settings}>
        {movieDetails.map(each => (
          <MovieItem eachMovie={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
