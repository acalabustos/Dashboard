import Carousel from 'react-bootstrap/Carousel';



function sequenceImg() {
  return (
   
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.enestadocrudo.com/wp-content/uploads/REUTILIZAR-1-1024x1024.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.faxvirtual.com/blog/wp-content/uploads/2016/03/ser-ecologico-337x270.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

export default sequenceImg;
