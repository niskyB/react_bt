import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { useState } from 'react';
import { DISHES } from './share/dishes';
import Main from './components/MainComponent';


function App() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
