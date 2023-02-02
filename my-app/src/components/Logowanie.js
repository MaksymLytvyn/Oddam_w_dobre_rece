import React from "react";
import LoginMenu from "./LoginMenu";
import Menu from "./Menu";
const Logowanie = () => {
    return (
        <>
            <LoginMenu />
            <Menu />
            <div className='main-login'>
                <h2>Zaloguj się</h2>
                <div className='decoration'> </div>
                <form>
                    <div className='form-fields'>
                        <div className='single-field'>
                            <label htmlFor="">Email</label>
                            <input type="text" name="Email"></input>
                        </div>
                        <div className='single-field'>
                            <label htmlFor="">Hasło</label>
                            <input type="password" name="Hasło"></input>
                        </div>
                        <div className='form-buttons'>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button className='empty-button'>Zaloguj się</button>
                        <button>Załóż konto</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Logowanie;