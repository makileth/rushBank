
import styles from "../styles";
import { Stats_ind } from "../constants";
const Stats = () => {
  return (
    <section
      className={`${styles.flexStart} md:mt-0 mt-4 md:flex-row flex-col flex-wrap sm:mb-20 mb-6 mx-auto max-w-7xl `}
    >
      {Stats_ind.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row px-12 md:py-0 py-4`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text uppercase ml-6 text-bold">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
