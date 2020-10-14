import React, {useState} from 'react';
import axios from 'axios'
import store from './redux/store'
import { connect } from 'react-redux'

import {Route} from 'react-router-dom'
import {Header} from './components';
import {Home, Cart} from './pages';
import {setPizzas} from './redux/actions/pizzas'

import './App.css';


// function App() {
//     const [pizzas, setPizzas] = useState([]);

//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json')
//             .then(({ data }) => {
//                 setPizzas(data.pizzas);
//             });
//     }, [])

//     console.log(pizzas)


//   // return (
    
//   // );
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      store.dispatch(setPizzas(data.pizzas))
      console.log(setPizzas(data.pizzas))
    });
  }

  render () {
    console.log(this.props.items)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={this.props.items} /> } exact />
          <Route path='/cart' component={Cart} exact />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
