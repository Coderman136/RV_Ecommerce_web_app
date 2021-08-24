import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


import useLocalStorage from './hooks/useLocalStorage';
import Login from './components/Login';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  const [loginId, setLoginId] = useLocalStorage('id')
  return (

    loginId ? <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(!sideToggle)}/>
      {/* SideDrawer */}
      <SideDrawer  show={sideToggle} click={() => setSideToggle(false)}/>
      {/* BackDrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path ="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router> : 
    <Login onIdSubmit={setLoginId} /> 
    
    
  );
}

export default App;
