import styles, { layout } from "../styles";
import { Feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    id="testimonials"
    className={`${styles.paddingY}, ${styles.flexCenter} flex-col relative`}
  >
    {/* Bruhh */}
    <div className="w-full flex justify-between md:flex-row flex-col items-center md:mb-6 mb-10 md:mt-0 mt-12 relative z-[1]">
      <h2 className={`${styles.heading2} text-white`}>
        What people say <br className="sm:block hidden" />
        <p className={`${layout.headingGradient}`}>about us</p>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[480px] text-left`}>
         Our commitment to providing you with the best-in-class services and an unwavering gamers-first approach makes us a true game-changer in the industry.
        </p>
      </div>
    
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] mt-10  sm:ml-0 md:ml-[55px] ">
        {Feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
  </section>
);

export default Testimonials;
