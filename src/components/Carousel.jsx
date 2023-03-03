import Carousel from 'react-bootstrap/Carousel';
import Img from '../Img/A.jpg';
import Img2 from '../Img/B.jpg';
import Img3 from '../Img/C.jpg';


function sequenceImg() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={Img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default sequenceImg;
