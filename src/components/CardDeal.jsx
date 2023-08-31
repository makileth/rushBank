
import styles, {layout} from '../styles'
import cardDeal from "../assets/cardDeal.svg";
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} text-white`}>
         Find your perfect <br className='sm:block hidden'/>
          <p className={`${layout.headingGradient}`}>Card deal</p>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       

 Join the ranks of satisfied gamers who have discovered their perfect card deal with us.

Embrace the power of our innovative banking solutions and seize the best card deal that suits your lifestyle. 
        </p>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={cardDeal} alt="" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal