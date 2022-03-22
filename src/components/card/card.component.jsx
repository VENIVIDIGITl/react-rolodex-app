import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './card.styles.css';


const Card = ({ user }) => {
  const { id, name, email, cell, picture } = user;
  const { city, state, country } = user.location

  return (
    <div key={id} className='card-container'>
      <img 
        alt={`${name}`}
        src={picture}
      />
      <div className='contact-info'>
        <h2>{name}</h2>
        <div>
          <div className='contact-detail'>
            <FAIcon icon={faEnvelope} className='icon' />
            <p>{email}</p>
          </div>
          <div className='contact-detail'>
            <FAIcon icon={faPhone} className='icon' />
            <p>{cell}</p>
          </div>
          <div className='contact-detail'>
            <FAIcon icon={faLocationDot} className='icon' />
            <p>{city}, {state}, {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;
