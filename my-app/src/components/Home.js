import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import KrokPoKroku from './KrokPoKroku';
import Onas from './Onas';
import Fundacja from './Fundacja';
import Kontakt from './Kontakt';

class Home extends Component {
    render() {
        return (
            <>
                <HomeHeader />
                <HomeThreeColumns />
                <KrokPoKroku />
                <Onas />
                <Fundacja />
                <Kontakt />
            </>
        )
    }
}

export default Home;