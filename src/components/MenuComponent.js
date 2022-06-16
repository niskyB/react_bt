import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Menu(props) {
    const [selectedDish, setSelectedDish] = useState(null);

    const renderDish = (dish) => {
        if (dish != null) {
            return (<Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>)
        } else return <div></div>
    }

    const menu = props.dishes.map((item) => (<div key={item.id} className='col-12 col-md-5 m-1'>
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
            <div className='col-12 col-md-5 m-1'>
                {renderDish(selectedDish)}
            </div>
        </div>
    </div>);
}

export default Menu;