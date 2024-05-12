"use client"

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/public/styles/style';
import toast from 'react-hot-toast';
import Button from '@/components/Button';

const page = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        car: '',
        location: '',
        message: ''
      });
      const [loading, setLoading] = useState(false)
      const handleChange = (e: any) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
      }
      const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setOrder(true);
        emailjs.send('service_lajllhr', 'template_xkm5sdr', {
          from_name: form.name,
          to_name: `Moamen`,
          from_email: form.email,
          to_email: 'muhamed12126hagras@gmail.com',
          email: form.email,
          phone: form.phone,
          car: form.car,
          location: form.location,
          message: form.message
        },'JNKdBh4-SqH_asdv7'
        ).then(()=>{
          setLoading(false);
          toast.success('One of our represenattives will be in touch shortly!',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
          );
          setForm({
            name: '',
            email: '',
            phone: '',
            car: '',
            location: '',
            message: ''
          })
          
        }, (error) => {
          setLoading(false)
          toast.error('Sorry, something went wrong.',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
          );
        })
      }
      const formRef = useRef<HTMLFormElement>(null);

      const [order, setOrder] = useState(false)
    
      return <>
      <Navbar />
      <div className={`bg-primary py-28 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <div 
      className="xl:mt-12 xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden bg-black-gradient-2 rounded-[20px]  ">
        <div
        className="flex-[0.75] bg-black-100 rounded-2xl p-8">
          <p className= 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Make a request</p>
          <h3 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full' >Contact Us</h3>
          <form action="" 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Your name
                </span>
                <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>
    
            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Your email
                </span>
                <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>

            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Your Number
                </span>
                <input 
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Mobile number"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>

            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Car details (Make & Model)
                </span>
                <input 
                type="text"
                name="car"
                value={form.car}
                onChange={handleChange}
                placeholder="Ex. Toyota Corolla 2019"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>

            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Your location
                </span>
                <input 
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Describe your exact location"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>
    
            <label
            className="flex flex-col"
            htmlFor="">
              <span 
              className="text-white font-medium mb-4"
              >
                Problem
                </span>
                <textarea
                rows = {7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please describe your problem"
                className="bg-black-gradient py-4 px-6 text-white rounded-lg outlined-none border-none font-medium "
                 />
            </label>

            <button 
            type="submit"
            className="btn py-2 px-7 text-[20px] outlined-none w-fit  text-bold shadow-md shadow-primary rounded-xl bg-blue-gradient"
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>

        </div>

      </div>
      
      {!order ? <p>hello</p> : <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} my-10 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Your driver is on the way</h2>
      <p className={`${styles.paragraph}  mt-5`}>
        Ahmed is on his way, call your driver on +201100514222
      </p>
    </div>

    
  </section>}
      </div>
      </div>

      

      <Footer />
      </>
}

export default page