import { Carousel } from 'react-bootstrap';
import corusal4 from '../photo/corusal4.JPG';
import corusal5 from '../photo/corusal5.JPG';
import corusal6 from '../photo/corusal6.JPG';
import '../Carousel/Carousel11.css';

const Carousel11=()=> {

  return (
       <Carousel>
   <Carousel.Item>
     <img src={corusal4} alt="Check it" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={corusal5} alt="Shop Now" />
   </Carousel.Item>
   <Carousel.Item>
     <img src={corusal6} alt="Discount Price" />
   </Carousel.Item>
 </Carousel>
  );
}
export default Carousel11 ;