import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'
import { ErrorMessage, Formik, useFormik } from 'formik';
import { resolve } from 'styled-jsx/css';
import { reservationSchema } from '@/public/schema/reservationSchema';

const Reservation = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };
    const formik = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            persons: "",
            date: ""
        },
        onSubmit,
        validationSchema: reservationSchema,
    });
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: formik.values.fullName,
            ErrorMessage: formik.errors.fullName,
            touched: formik.touched.fullName
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: formik.values.phoneNumber,
            ErrorMessage: formik.errors.phoneNumber,
            touched: formik.touched.phoneNumber
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: formik.values.email,
            ErrorMessage: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
            value: formik.values.persons,
            ErrorMessage: formik.errors.persons,
            touched: formik.touched.persons
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            value: formik.values.date,
            ErrorMessage: formik.errors.date,
            touched: formik.touched.date
        }
    ];
  return (
    <div className='container mx-auto py-12'>
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className='flex justify-between flex-wrap-reverse gap-10'>
            <form className='lg:flex-1 w-full' onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-y-3'>
                    {inputs.map((input)=>(
                        <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                    ))}
                </div>
                <button className="btn-primary mt-4" type='submit'>BOOK NOW</button>
            </form>
            <div className='lg:flex-1 w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42679.23840706763!2d12.450010226510656!3d41.8928683264969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sMetropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2str!4v1722259764348!5m2!1sen!2str" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-full w-full'></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Reservation