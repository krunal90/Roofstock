import React from 'react';
import { Carousel } from 'react-bootstrap';

import Address from '../Address';
import '../style/Detail.css';

const DetailView = (props) => {
 const {location:{state:{details}}} =props;
  return (
    <div className="main_detail_container">
      <div className="address_detail">
        <Address {...details.address}/>
      </div>
      <Carousel interval={5000} className="carousel">
        {details.resources.photos.map((photo) => {
          return (
            <Carousel.Item key={photo.id}>
              <img
                className="d-block w-100 proprty_detail_image"
                src={photo.url}
                alt="First slide"
              />           
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
};
export default  DetailView;