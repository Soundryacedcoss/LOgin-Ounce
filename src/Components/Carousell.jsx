import { Card, Carousel } from "@cedcommerce/ounce-ui";
import React from "react";
import banner1 from "../image/banner1.jpg";
import banner2 from "../image/banner3.webp";
import banner3 from "../image/banner3.jpg";
import banner4 from "../image/banner5.jpg";
export const Carousell = () => {
  return (
    <div>
      <Card>
        <Carousel autoplay infinite slidesToScroll={1}>
          <Card>
            <img src={banner1} alt="" className="banner_img" />
          </Card>
          <Card>
            <img src={banner4} alt="" className="banner_img" />
          </Card>
          <Card>
            <img src={banner3} alt="" className="banner_img" />
          </Card>
          <Card cardType="Bordered">
            <img src={banner2} alt="" className="banner_img" />
          </Card>
        </Carousel>
      </Card>
    </div>
  );
};
