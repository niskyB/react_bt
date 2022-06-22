import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { COMMENTS } from '../share/comments';
import { DISHES } from '../share/dishes';
import { LEADERS } from '../share/leaders';
import { PROMOTIONS } from '../share/promotions';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';

function Main(props) {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const [comments, setComments] = useState(COMMENTS);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [leaders, setLeaders] = useState(LEADERS);

    const DishWithId = ({ match }) => {
        return (
            <DishDetail
                dish={
                    dishes.filter(
                        (dish) => dish.id === parseInt(match.params.dishId, 10)
                    )[0]
                }
                comments={comments.filter(
                    (comment) =>
                        comment.dishId === parseInt(match.params.dishId, 10)
                )}
            />
        );
    };


    return (<div>
        <Header />
        {/* <Menu dishes={dishes} onClick={(dishId) => setSelectedDish(dishId)} />
        {selectedDish !== null && <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />} */}
        <Switch>
            <Route path='/home' component={() => <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={
                    promotions.filter(
                        (promotion) => promotion.featured
                    )[0]
                }
                leader={
                    leaders.filter((leader) => leader.featured)[0]
                }
            />} />
            <Route path='/contactus' component={Contact} />
            <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route path='/about' component={() => <About leaders={leaders} />} />
            <Redirect to='/home' />
        </Switch>
        <Footer />
    </div>);
}

export default Main;