import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

function Menu(props) {
    const [selectedDish, setSelectedDish] = useState(null);

    const menu = props.dishes.map((item) => (<div key={item.id} className='col-12 col-md-5 my-1'>
        <Card key={item.id} onClick={() => setSelectedDish(item)}>
            <CardImg width='100%' src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </div>))
    return (<div className='container'>
        <div className='row'>
            {menu}
        </div>
        <div className='row'>
            {selectedDish && <DishDetail dish={selectedDish} comments={selectedDish.comments} />}
        </div>
    </div>);
}

export default Menu;