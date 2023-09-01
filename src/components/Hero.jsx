import React from "react";
import styles from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex flex-col ${styles.paddingY} bg-neutral-900 mx-auto max-w-7xl py-32 sm:py-38 lg:py-51 relative`}
    >
      <div
        className={`${styles.flexStart} flex-1 flex-col sm:px-16 py-9 px-6 `}
      >
        <img
          src="https://media.discordapp.net/attachments/905898290334294016/1131687034210230322/Group_1.png?width=954&height=154"
          alt=""
          className="w-[16rem] object-cover absolute"
        />
      </div>

      <div className="flex md:flex-row flex-col w-full justify-between items-center">
        <h1 className="text-white font-bold font-poppins mt-6  flex-1 ss:text-[72px] text-[52px]">
          The World&apos;s Best
          <br className="sm:block hidden" />{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            {" "}
            Bank For Gamers
          </span>
          <br className="sm:block hidden" />{" "}
          <span className="sm:block hidden"> Ever Created!</span>
          <span className={`sm:block hidden text-[1rem] font-thin max-w-[700px] ${styles.paragraph}`}>
            {" "}
            Embrace an extraordinary gaming journey with us as we revolutionize the banking experience tailored exclusively for gamers. Unleash the power of our cutting-edge services and immerse yourself in the ultimate financial adventure.
          </span>
       
            <button className="w-[19rem] h-[4rem] bg-purple-600 text-white font-poppins font-semibold rounded-full text-[13px]   hover:bg-purple-400 transition duration-500">
              Get Started!
            </button>
            <button className="md:w-[16rem] w-[19rem] h-[4rem] bg-white text-black font-poppins font-semibold rounded-full text-[13px] ss:ml-6 ml-0 justify-between items-center hover:bg-black hover:text-white transition-all duration-500">
              Watch Demo!
            </button>
         
        </h1>

        <div
          className={` ${styles.flexStart} justify-between items-center md:mt-0 mt-12`}
        >
          <img
            src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5738.jpg"
            alt=""
            className=" object-cover rounded-2xl md:w-[30rem] w-[21rem] md:h-[30rem]  h-[21rem]"
          />
        </div>
      </div>

      <div className=" absolute z-[0] w-[50%] h-[50%] blur-[10rem] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 left-[40%] "></div>
    </section>
  );
};

export default Hero;
