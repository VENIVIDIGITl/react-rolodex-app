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
    const { onSearchChange } = this;

    return (
      <div className='App'> 
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='search users' />
        <CardList />
      </div>
    );
  } 
}

export default App;
