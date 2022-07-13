import React from 'react';
import DashBoard from './dashboard';
import Header from './headercomponent';
import Main from './MainComponent';



function Home(props) {
    return (
        <div>
            <Header />
            <DashBoard />
            <Main />
        </div>
    );
}

export default Home;