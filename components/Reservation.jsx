import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'

const Reservation = () => {
  return (
    <div className='container mx-auto py-12'>
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className='flex justify-between flex-wrap-reverse gap-10'>
            <div className='lg:flex-1 w-full'>
                <div className='flex flex-col gap-y-3'>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                </div>
                <button className="btn-primary mt-4">BOOK NOW</button>
            </div>
            <div className='lg:flex-1 w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42679.23840706763!2d12.450010226510656!3d41.8928683264969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sMetropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2str!4v1722259764348!5m2!1sen!2str" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-full w-full'></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Reservation