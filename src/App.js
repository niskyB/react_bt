import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { useState } from 'react';
import { DISHES } from './share/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
