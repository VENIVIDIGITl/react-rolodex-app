import './card.styles.css';


const Card = ({ user }) => {
  const { id, name, email, cell, picture, location } = user;

  return (
    <div key={id} className='card-container'>
      <img 
        alt={`${name}`}
        src={picture}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{cell}</p>
      <p>{location.city}, {location.state}, {location.country}</p>
    </div>
  );
}


export default Card;
