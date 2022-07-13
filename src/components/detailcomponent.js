import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';


function DetailComponent(props) {
    const renderDetail = (component) => {
        return (<div className='col-12 col-md-4 mb-3'>
            <Card>
                <CardImg top src={component.image} alt={component.name} />
                <CardBody>
                    <CardSubtitle className='text-muted'>{component.category}</CardSubtitle>
                    <CardTitle>{component.name}</CardTitle>
                    <CardText>{component.price}</CardText>
                </CardBody>
            </Card>
        </div>)
    }

    return (
        <>
            {renderDetail(props.component)}
        </>
    );
}

export default DetailComponent;