import React from 'react';
import {Link} from "react-router-dom";
import LoginMenu from "./LoginMenu";
import Menu from "./Menu";

const HomeHeader = () => {
    return (
        <div className={"home"}>
            <LoginMenu />
            <Menu />
            <div className='home-header'>
                <div className='text-and-decoration'>
                    <p>
                        Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                    <div className='decoration-image' />
                    <div className='buttons'>
                        <Link to='/logowanie' className='main-button'>ODDAJ <br/> RZECZY</Link>
                        <Link to='/logowanie' className='main-button'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;