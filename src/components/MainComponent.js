import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../share/dishes';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';

function Main(props) {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);


    return (<div>
        <Navbar dark color='primary'>
            <div className='container'>
                <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={dishes} onClick={(dishId) => setSelectedDish(dishId)} />
        {selectedDish !== null && <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />}
    </div>);
}

export default Main;