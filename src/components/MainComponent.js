import React, { useState } from 'react';
import { BATH_SHOWER } from '../share/bath_shower';
import { BEDDING } from '../share/bedding';
import { LIGHTING } from '../share/lighting';
import DetailComponent from './detailcomponent';


function Main() {
    const [bathShower, setBathShower] = useState(BATH_SHOWER);
    const [bedding, setBedding] = useState(BEDDING);
    const [lighting, setLighting] = useState(LIGHTING);

    return (<div>
        <div className='container'>
            <div className='row'>
                <DetailComponent component={bathShower[0]} />
                <DetailComponent component={bedding[0]} />
                <DetailComponent component={lighting[0]} />
            </div>
        </div>

    </div>);
}

export default Main;