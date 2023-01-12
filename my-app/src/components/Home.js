import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Menu from './Menu';
import LoginMenu from './LoginMenu';
import KrokPoKroku from './KrokPoKroku';
import Onas from './Onas';
import Fundacja from './Fundacja';
import Kontakt from './Kontakt';

class Home extends Component {
    render() {
        return (
            <>
                <div id="start" className='home'>
                    <LoginMenu />
                    <Menu />
                    <HomeHeader />
                </div>
                <div>
                    <HomeThreeColumns />
                </div>
                <div>
                    <KrokPoKroku />
                </div>
                <div>
                    <Onas />
                </div>
                <div>
                    <Fundacja />
                </div>
                <div>
                    <Kontakt />
                </div>
            </>
        )
    }
}

export default Home;