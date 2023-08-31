
import styles, { layout } from "../styles";
import billingImg from "../assets/billingImg.svg";
const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} relative`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={billingImg}
          alt=""
          className={`w-[100%] h-[100%] my-[8rem] `}
        />
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] blur-[10rem] rounded-full bg-gradient-to-r from-slate-500 via-blue-500 to-pink-500 opacity-30 mt-[15rem] left-[50%]"></div>
      <div className={`${layout.sectionInfo}`}>
        <h2
          className={` ${styles.heading2} font-bold text-5xl mt-9 py-1 text-white`}
        >
          Take charge of your transactions{" "}
          <br className="sm:block hidden" />
          <p className={`${layout.headingGradient}`}>
            Manage Billing and Shipping Information
          </p>
        </h2>
        <p className={`${styles.paragraph} `}>
        At the moment you request a payment, we&apos;ve got you covered! Our team will swiftly provide all the payment information you need, ensuring a seamless gaming experience. No more worries – just focus on your adventures in the gaming world! 
        </p>
        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6 z-[1]`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt=""
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
