import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getInfo } from "../features/sliderSlice";
import "./Sliders.scss";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </div>
  );
}

export default function Sliders() {
  const data = useSelector(getInfo);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="container">
      <div className="slider-container">
        <div className="Sliders">
          <Slider {...settings}>
            {data.map((elem) => {
              return (
                <div className="item" key={elem.id}>
                  <img src={elem.image} />
                  <h2 className="subtitle">{elem.name}</h2>
                  <p className="position">{elem.position}</p>
                  <div className="item__stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="description">{elem.desc}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
