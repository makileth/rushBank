import PropTypes from 'prop-types';




const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex group">
    <div className="flex justify-around relative flex-col px-10 py-9 rounded-[20px] max-w-[370px] md:mr-[56px] sm:mr-3 my-5 bg-neutral-800 transition-all duration-500 ease-in-out transform group-hover:scale-110">
      <img
        src="https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/quote.png"
        alt="imgQuotes"
        className="w-[42px] h-[27px] object-contain mb-4 filter invert brightness-max"
      />
      <p className="font-poppins font-normal text-white text-[22px]">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt=""
          className="justify-start w-[40px] h-[40px] rounded-full object-cover mt-4  "
        />
        <div className="flex flex-col ml-3 mt-[10px]">
          <p className="font-poppins font-normal text-white text-[18px]">
            {name}
          </p>
          <p className="font-poppins font-normal text-neutral-300 text-[14px]">
            {title}
          </p>
        </div>
        <div className="absolute  rounded-[20px] z-[-1] inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
      </div>
    </div>
  </div>
);

FeedbackCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default FeedbackCard;
