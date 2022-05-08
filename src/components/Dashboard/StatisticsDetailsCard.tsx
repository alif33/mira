import Slider from "react-slick";

const StatisticsDetailsCard = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="statistics-details-card">
      <h2>
        처리할일 <span>(주간)</span>
      </h2>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="statistics-slider-item">
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>미처리 건수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>후기 승인 </td>
                    <td>000</td>
                  </tr>
                  <tr>
                    <td>후기 승인 </td>
                    <td>000</td>
                  </tr>
                  <tr>
                    <td>후기 승인 </td>
                    <td>000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default StatisticsDetailsCard;
