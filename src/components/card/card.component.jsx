import './card.styles.css';


const Card = ({ user }) => {
  const { id, name, email } = user;

  return (
    <div key={id} className='card-container'>
      <img 
        alt={`${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}


export default Card;
