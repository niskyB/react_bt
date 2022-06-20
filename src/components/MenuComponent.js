import React, { useState } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Menu() {
    const [dishes, setDishes] = useState(null)

    const menu = dishes.map((item) => (<div key={item.id} className='col-12 mt-5'>
        <Media tag='li'>
            <Media left middle>
                <Media object src={item.image} alt={item.name} />
            </Media>
            <Media body className='ml-5'>
                <Media heading>{item.name}</Media>
                <p> {item.description} </p>
            </Media>
        </Media>
    </div>))
    return (<div className='container'>
        <div className='row'>
            <Media list>
                {menu}
            </Media>
        </div>
    </div>);
}

export default Menu;