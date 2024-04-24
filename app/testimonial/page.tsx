import Button from '@/components/Button'
import FeedbackCard from '@/components/FeedbackCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { feedback } from '@/constants'
import styles from '@/public/styles/style'
import React from 'react'

const page = () => {
  return <>
  
  <Navbar />
  
  <div className={`bg-primary py-28  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

      <section id="testimonial" className={`${styles.paddingY} ${styles.flexCenter}  flex-col relative `}>
    {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are saying about us
      </h2>
      
    </div>

    <div className="flex flex-wrap sm:justify-start  w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>

  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Need help? Let's get started!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Just tell us what you need and you will get the help you need in the matter of minutes
      </p>
    </div>

    <div className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
      </div>
      </div>

  <Footer />
  
  </>
}

export default page