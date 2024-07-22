import Image from 'next/image';
import Title from './ui/Title';
import React from 'react'
import Slider from 'react-slick';
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    ),
  };
  return (
    <div className='h-screen w-full container mx-auto -mt-[88px]'>
        <div className='absolute top-0 left-0 w-full h-full'>
            <div className='relative h-full w-full'>
                <Image src="/images/bg.jpg" alt='' layout='fill'objectFit='cover'></Image>
            </div>
        </div>
        <Slider {...settings}>
          <div>
            <div className='mt-36 text-white flex flex-col items-start gap-y-3'>
                <Title addClass="text-4xl">Fast Food Restaurant</Title>
                <p className='text-sm sm:w-3/4 w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate quia enim, culpa harum, necessitatibus laborum reprehenderit delectus dignissimos ipsum excepturi fuga molestiae numquam neque deserunt ab nobis, repellat eaque?</p>
                <button className='btn-primary'>Order Now</button>
            </div>
          </div>
          <div>
            <div className='relative text-white top-36 flex flex-col items-start gap-y-3'>
                <Title addClass="text-4xl">Fast Food Restaurant</Title>
                <p className='text-sm sm:w-3/4 w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate quia enim, culpa harum, necessitatibus laborum reprehenderit delectus dignissimos ipsum excepturi fuga molestiae numquam neque deserunt ab nobis, repellat eaque?</p>
                <button className='btn-primary'>Order Now</button>
            </div>
          </div>
        </Slider>
        
    </div>
  );
};

export default Carousel