import { useState, useEffect } from 'react'; 
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100&inc=name,email,picture,location,login,cell');
        const { results } = await response.json();
        const usersData = await results.map(user => {
          return {
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            cell: user.cell,
            picture: user.picture.large,
            location: {
              country: user.location.country,
              state: user.location.state,
              city: user.location.city,
            }
          };
        });

        setUsers(usersData);

      } catch (error) {
        console.log('ERROR: ', error);
        throw new Error('Failed to fetch users data from API');
      };
    };

    fetchUsers();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const newFilteredUsers = users.filter(user => {
      const nameMatch = user.name.toLocaleLowerCase().includes(searchField);
      const emailMatch = user.email.toLocaleLowerCase().includes(searchField);
      const cellMatch = user.cell.toLocaleLowerCase().includes(searchField);
      let locationMatch;

      for (let key in user.location) {
        if(!locationMatch) {
          locationMatch = user.location[key].toLocaleLowerCase().includes(searchField);
        };
      };

      return nameMatch || emailMatch || cellMatch || locationMatch;
    });

    setFilteredUsers(newFilteredUsers);

  }, [users, searchField]);


  const onScroll = () => {
    setScrolling(window.pageYOffset > 140);
  };


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className='App'>
      <header className={`app-title ${scrolling ? 'scroll-active' : ''}`}>
        <h1 className='app-title'>Rolodex</h1>
        <SearchBox
          className='users-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search contacts' />
      </header>
      <main className='card-list-container'>
        <CardList users={filteredUsers} />
      </main>
      
    </div>
  );
}

export default App;
