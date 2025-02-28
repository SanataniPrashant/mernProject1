import Carousel from 'react-bootstrap/Carousel';
const Carosel = ()=>{
    return (
        <>
        <Carousel>
      <Carousel.Item>
        <img className='car' src="https://wallpaperaccess.com/full/3750058.jpg" alt="" />
        <Carousel.Caption>
          <h3>Blue Bmw Sedan Near Green Lawn Grass</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='car' src="https://thumbs.dreamstime.com/b/doctor-medical-background-24834402.jpg" alt="" />
        <Carousel.Caption>
          <h3>Black Mercedes Benz Car Parked on Road Side</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='car' src="https://getwallpapers.com/wallpaper/full/9/9/a/303223.jpg" alt="" />
        <Carousel.Caption>
          <h3>White Mercedes Benz Convertible Coupe</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Carosel