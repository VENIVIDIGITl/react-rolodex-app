import { useState, useEffect } from 'react'; 
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.log('ERROR: ', error);
        throw new Error('Failed to fetch users data from API');
      };
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter(user => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredUsers(newFilteredUsers);
  }, [users, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Rolodex</h1>
      <SearchBox
        className='users-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search users' />
      <CardList users={filteredUsers} />
    </div>
  );
}

export default App;
