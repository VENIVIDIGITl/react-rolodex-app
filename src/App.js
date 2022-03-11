import { Component } from 'react'; 
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ users })))
      .catch((error) => console.log(error));
  }


  render() {
    return (
      <div className='App'> 
        <SearchBox />
        <CardList />
      </div>
    );
  } 
}

export default App;
