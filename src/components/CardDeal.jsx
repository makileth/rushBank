import styles, { layout } from "../styles";
import cardDeal from "../assets/cardDeal.svg";
const CardDeal = () => {
  return (
    <section className={`${layout.section} relative`}>
      <div className={`${layout.sectionInfo}`}>
      <div className="absolute z-[0] w-[45%] h-[45%] blur-[10rem] rounded-full bg-gradient-to-r from-slate-500 via-blue-500 to-pink-500 opacity-30 mt-[1rem] left-[0%]"></div>
        <h2 className={`${styles.heading2} text-white`}>
          Find your perfect <br className="sm:block hidden" />
          <p className={`${layout.headingGradient}`}>Card deal</p>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join the ranks of satisfied gamers who have discovered their perfect
          card deal with us. Embrace the power of our innovative banking
          solutions and seize the best card deal that suits your lifestyle.
        </p>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={cardDeal} alt="" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
