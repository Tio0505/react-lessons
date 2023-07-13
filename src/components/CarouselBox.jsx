import Carousel from "react-bootstrap/Carousel";
import PrimaryBgImage from "../assets/chip_shema_protsessor.jpg";
import SecondaryBgImage from "../assets/kod_simvoly_programmirovanie.jpg";
import ThirdBgImage from "../assets/interfejs_kod_blokirovka.jpg";

const CarouselBox = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={PrimaryBgImage} alt="img" />
        <Carousel.Caption>
          <h3>Background image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SecondaryBgImage} alt="img" />
        <Carousel.Caption>
          <h3>Background image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ThirdBgImage} alt="img" />
        <Carousel.Caption>
          <h3>Background image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBox;
