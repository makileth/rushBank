import PropTypes from "prop-types";
import styles, { layout } from "../styles";
import { features } from "../constants";

// Hier außerhalb der Komponente TestFeatureCard die PropTypes definieren

const TestFeatureCard = ({ content, title, icon }) => {
  return (
    <div className="group flex">
      <div className="relative flex w-[23rem] md:ml-[6rem] ml-0 md:w-[33rem] h-[5rem] rounded-full my-[1rem] items-center justify-start center transition-all duration-500 ease-in-out transform group-hover:scale-110">
        <div className={`${styles.flexCenter} w-[3rem] h-[3rem] bg-dimBlue rounded-full sm:ml-[12px] ml-0 `}>
          <img
            src={icon}
            alt="icon"
            className="w-[65%] h-[65%] object-cover filter invert brightness-max "
          />
        </div>
        <div className="absolute rounded-full z-[-1] inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
        <p className="text-white ml-[24px]">
          <h2 className="font-bold">{title}</h2>
          <span>{content}</span>
        </p>
      </div>
    </div>
  );
};


TestFeatureCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Business = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.main} relative`}>
      <div className={`text-white flex flex-col font-poppins`}>
        <p
          className={`font-bold text-5xl mt-9 py-1 leading-snug md:leading-none`}
        >
          <span>Enjoy Your Games</span>

          <br className="sm:block hidden" />
          <div className="mt-7 ">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              We&apos;ll Handle The Money!
            </span>
          </div>
        </p>
        <p className={`${styles.paragraph}  font-thin mt-7 max-w-[640px]`}>
          Welcome to our innovative bank, crafted exclusively for gamers like
          you. Elevate your gaming experience while we take care of your
          financial needs. Earn credits, unlock bonuses, and enjoy exciting
          discounts on your favorite games.
        </p>
        <div className="absolute z-[0] w-[40%] h-[40%] blur-[10rem] rounded-full bg-gradient-to-r from-slate-500 via-blue-500 to-pink-500 opacity-30 mr-[10rem]"></div>
      </div>
      <div className={`flex flex-col ${styles.flexStart} mr-4 md:mt-0 mt-16`}>
        {features.map((feature) => (
          <TestFeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Business;
