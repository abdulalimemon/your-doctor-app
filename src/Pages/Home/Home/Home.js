import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Experience></Experience>
            <Services></Services>
        </div>
    );
};

export default Home;