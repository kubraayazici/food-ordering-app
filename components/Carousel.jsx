import Image from 'next/image';
import Title from './ui/Title';
import Slider from 'react-slick';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div className="slick-dots-container">
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    ),
  };
  return (
    <div className='h-screen w-full mx-auto -mt-[88px]'>
      <div className='relative top-0  left-0 w-full h-full'>
        <div className='absolute h-full w-full'>
            <Image src="/images/bg.jpg" alt='' layout='fill' objectFit='cover' priority></Image>
        </div>
        <Slider {...settings}>
          <div>
            <div className='relative mt-48 container mx-auto text-white flex flex-col items-start gap-y-3'>
              <Title addClass="text-4xl">Fast Food Restaurant</Title>
              <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate quia enim, culpa harum, necessitatibus laborum reprehenderit delectus dignissimos ipsum excepturi fuga molestiae numquam neque deserunt ab nobis, repellat eaque?</p>
              <button className='btn-primary'>Order Now</button>
            </div>
          </div>
          <div>
            <div className='relative mt-48 container mx-auto text-white flex flex-col items-start gap-y-3'>
              <Title addClass="text-4xl">Fast Food Restaurant</Title>
              <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate quia enim, culpa harum, necessitatibus laborum reprehenderit delectus dignissimos ipsum excepturi fuga molestiae numquam neque deserunt ab nobis, repellat eaque?</p>
              <button className='btn-primary'>Order Now</button>
            </div>
          </div>
        </Slider>
      </div> 
    </div>
  );
};

export default Carousel