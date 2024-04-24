import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { features } from '@/constants';
import { card } from '@/public/assets';
import styles, { layout } from '@/public/styles/style';
import Image from 'next/image';
import React from 'react'

interface FeatureCardProps {
    icon: string;
    title: string;
    content: string;
    index: number;
  }

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full justify-center ${styles.flexCenter} bg-dimBlue`}>
        <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

const page = () => {
  return <>

    <Navbar />

  <div className={`bg-primary py-28 justify-center ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Arabety is your saviour on the road
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arabety is the best road side assistance team out there. Our experts are available to assess your needs and quickly intervene to help get you back on the road.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>

<section className={layout.section}>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>
    Getting back on the road was never easier
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    After placing your request, in the matter of minutes one of our experts gets in touch with you to verify your information and swiftly one of our road side experts is there to help you
  </p>

  <Button styles={`mt-10`} />
</div>

<div className={layout.sectionImg}>
  <Image src={card} alt="billing" className="w-[100%] h-[100%]" />
</div>
</section>
      </div>
      </div>
  <Footer />
  </>
}

export default page