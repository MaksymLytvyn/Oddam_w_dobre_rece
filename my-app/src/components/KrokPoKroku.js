import React from 'react';
import { Link } from 'react-router-dom';
const KrokPoKroku = () => {
    return (
        <div id = 'o-co-chodzi'>
            <h2>Wystarczą 4 proste kroki</h2>
            <div className='decoration-image' />
            <div className='icons'>
                <div className='first-icon'>
                    <div className='first-icon-bg' />
                    <div>Wybierz rzeczy<hr></hr>Ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className='second-icon'>
                    <div className='second-icon-bg' />
                    <div>Spakuj je<hr></hr>skorzystaj z worków na śmieci</div>
                </div>
                <div className='third-icon'>
                    <div className='third-icon-bg' />
                    <div>Zdecyduj komu chcesz pomóc<hr></hr>wybierz zaufane miejsce</div>
                </div>
                <div className='fourth-icon'>
                    <div className='fourth-icon-bg' />
                    <div>Zamów kuriera<hr></hr>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <Link to='/logowanie' className='main-button-o-co-chodzi'>ODDAJ <br/> RZECZY</Link>
        </div>
    );
};

export default KrokPoKroku;