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
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    ),
  };
  return (
    <div className='relative h-screen w-full -mt-[88px]'>
      <div className='absolute inset-0 z-[-1]'>
        {/* <div className='relative h-full w-full'> */}
            <Image src="/images/bg.jpg" alt='' layout='fill' objectFit='cover' priority></Image>
        {/* </div> */}
      </div> 
      <div className="container h-full flex flex-col justify-center ">
      <Slider {...settings}>
        <div>
          <div className='text-white flex flex-col items-start gap-y-10'>
            <Title addClass="text-4xl">Fast Food Restaurant</Title>
            <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate quia enim, culpa harum, necessitatibus laborum reprehenderit delectus dignissimos ipsum excepturi fuga molestiae numquam neque deserunt ab nobis, repellat eaque?</p>
            <button className='btn-primary'>Order Now</button>
          </div>
        </div>
        <div>
          <div className='text-white flex flex-col items-start gap-y-10'>
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