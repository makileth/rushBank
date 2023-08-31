import PropTypes from 'prop-types';
import styles from '../styles';
import { clientsImgs } from '../constants';

const ClientImgDiv = ({ id, img }) => (
  <div className={`max-w-[480px] px-6 ${styles.paddingY}`}>
    <img src={img} alt="clientImg" id={id} className='w-full filter invert brightness-max' />
  </div>
);

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className='px-10 flex items-center justify-between md:flex-row flex-col'>
        {clientsImgs.map((item) => (
          <ClientImgDiv key={item.id} {...item} />
        ))}
        <img src="" alt="" />
      </div>
    </section>
  );
};

// PropTypes innerhalb der Komponente definieren
ClientImgDiv.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Clients;
