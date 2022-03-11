import { Component } from 'react'; 
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ users })))
      .catch(error => console.log(error));
  }


  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter(user => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'> 
        <SearchBox
          className='users-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search users' />
        <CardList users={filteredUsers} />
      </div>
    );
  } 
}

export default App;
