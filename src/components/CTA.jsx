
import styles from "../styles";


const CTA = () => (
  <section
    className={` flex-col md:flex-row w-full  bg-neutral-800 ${styles.flexCenter} ${styles.paddingY} md:mb-6 mb-[9rem] rounded-[20px] justify-between`}
  >
    <div className={`${styles.flexStart} flex-col mx-10`}>
      <h2 className={`${styles.heading2} text-slate-100`}>Ready to Level Up?</h2>
      <p className={`${styles.paragraph} py-6 max-[470px]`}>Join our gaming bank today and unlock a world of gaming-centric financial services. Embrace exclusive rewards, seamless payment processing, and top-notch security that truly understands gamers. It&apos;s time to embark on an extraordinary gaming journey with us!</p>
    </div>
    <div className={`${styles.flexStart}`}>
      <button className="md:w-[17rem] w-[15rem] h-[4rem] md:mr-10 bg-purple-600 text-white font-poppins font-semibold rounded-full text-[13px]  hover:bg-purple-400 transition duration-500">
        Get Started!
      </button>
    </div>
  </section>
);

export default CTA;
