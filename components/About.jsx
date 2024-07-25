import Image from 'next/image'
import Title from './ui/Title'

const About = () => {
  return (
    <div className='bg-secondary py-14 min-h-screen flex items-center'>
        <div className='container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse'>
            <div className='flex justify-center w-full sm:w-auto' >
                <div className='relative sm:w-[445px]  flex justify-center sm:h-[400px] w-[300px] h-[450px]'>
                    <Image src="/images/about-img.png" alt='' layout='fill'></Image>
                </div>
            </div>
            <div className='md:w-1/2'>
                <Title addClass="text-[40px]">We Are Feane</Title>
                <p className='my-5 flex flex-col items-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ad, sunt illum corrupti sapiente ducimus harum ab aliquam quibusdam. Sequi similique alias tempora itaque veritatis. Voluptatibus reprehenderit magni explicabo. Eius.</p>
                <button className='btn-primary'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default About