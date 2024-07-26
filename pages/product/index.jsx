import Image from 'next/image'
import Title from '../../components/ui/Title'

const Index = () => {
  return (
    <div className='flex items-center h-screen gap-20 py-20 flex-wrap'>
        <div className='relative md:flex-1 w-[90%] h-[70%] mx-20'>
            <Image src="/images/Essen.jpg" alt='' layout='fill' objectFit='contain' className='rounded-3xl'></Image>
        </div>
        <div className='md:flex-1 md:text-start text-center'>
            <Title addClass="text-6xl">Good Pizza</Title>
            <span className='text-2xl text-primary font-bold underline underline-offset-1 my-4 inline-block'>$10</span>
            <p className='text-sm my-4 md:pr-24'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aliquid soluta deserunt officiis adipisci quas neque non libero voluptate, ratione maxime aperiam accusantium sunt, harum placeat deleniti similique. Dolorem, nam.</p>
            <div >
                <h4 className='text-xl font-bold'>Choose The Size</h4>
                <div className='flex items-center gap-x-20 md:justify-start justify-center'>
                    <div className='relative w-8 h-8'>
                        <Image src="/images/size.png" alt='' layout='fill'></Image>
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                    </div>
                    <div className='relative w-12 h-12'>
                        <Image src="/images/size.png" alt='' layout='fill'></Image>
                        <span className='absolute top-0 -right-9 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                    </div>
                    <div className='relative w-16 h-16'>
                        <Image src="/images/size.png" alt='' layout='fill'></Image>
                        <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-4 items-center my-5 md:justify-start justify-center'>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Ketchup</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Mayonnaise</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Mustard</span>
                </label>
            </div>
            <button className='btn-primary'>Add to Card</button>
        </div>
    </div>
    
  )
}

export default Index