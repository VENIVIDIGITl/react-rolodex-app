import { Component } from 'react';
import './card-list.styles.css';


class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className='card-list'>
        {users.map((user) => {
          const { name, email, id } = user;
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
        })}
      </div>
    );
  }
}

export default CardList;
