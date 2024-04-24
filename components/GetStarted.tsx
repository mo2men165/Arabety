import styles from "../public/styles/style";
import { arrowUp } from "../public/assets"
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => (
<Link href={'/request'}>
<div className={`${styles.flexCenter} justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full justify-center`}>
      <div className={`${styles.flexStart} flex-row justify-center`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <Image src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
</Link>
);

export default GetStarted;
