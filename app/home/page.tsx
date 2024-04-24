import Image from "next/image";
import styles from "../../public/styles/style";
import GetStarted from "@/components/GetStarted";
import { robot } from "../../public/assets"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>   

    <Navbar />
    <div className={`bg-primary justify-center ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <section id="home" className={`bg-primary flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} justify-center flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The best <br className="sm:block hidden" />{" "}
            <span className="text-gradient">available</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Roadside Assistance team
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our experts quickly assess your roadside needs for prompt assistance when you need it most.
        </p>
      </div>

      <div className={`flex-1 flex justify-center ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className="w-[70%] h-[90%] relative z-[5]" />

        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>

      <div className={`ss:hidden justify-center ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    </div>
    </div>
    
    <Footer />
    
    </>
  );
}
