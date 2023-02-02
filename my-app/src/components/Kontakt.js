import React from 'react';
import HomeForm from "./HomeForm";

const Kontakt = () => {
    return (
        <div id="kontakt">
            <div className="homeContact">
                <div className="homeContact-container container">
                    <div className="homeContact-text">
                        <h2>Skontaktuj się z nami</h2>
                        <div className='decoration-image'></div>
                        <HomeForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;