import Carousel from 'react-bootstrap/Carousel';

import './Hero.css'

function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-low-fat-foods-1296x728-feature.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <div className='blogheading'>
          <h5>Discover our weekly trending blogs about health, nutrition and community</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </div>
        </Carousel.Caption>
      </Carousel.Item></Carousel>
  );
}
export default Hero