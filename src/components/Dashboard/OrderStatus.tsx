import Slider from "react-slick";

const OrderStatus = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 5,
  };
  return (
    <div className="order-status">
      <h2>
        주문현황 <span>(주간)</span>
      </h2>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
          <div>
            <div className="slider-item">
            <h3>결제완료</h3>
            <h2>00<span>건</span></h2>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OrderStatus;
