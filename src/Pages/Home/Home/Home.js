import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomePractric from '../HomePractric/HomePractric';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomePractric></HomePractric>
            <Services></Services>
        </div>
    );
};

export default Home;