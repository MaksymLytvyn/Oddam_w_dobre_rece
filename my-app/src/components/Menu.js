import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

const options = {
    activeClass:"start-button",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500
}

const Menu = () => {
    return (
        <ul className='menu'>
            <li>
                <LinkScroll
                    {...options}
                    to='start'
                    className='menu-button'
                >
                    Start
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    {...options}
                    to='o-co-chodzi'
                    className='menu-button'
                >
                    O co chodzi?
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    {...options}
                    to='o-nas'
                    className='menu-button'
                >
                    O nas
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    {...options}
                    to='fundacja-i-organizacje'
                    className='menu-button'

                >
                    Fundacja i organizacje
                </LinkScroll>
            </li>
            <li>
                <LinkScroll
                    {...options}
                    to='kontakt'
                    className='menu-button'

                >
                    Kontakt
                </LinkScroll>
            </li>
        </ul>
    )
}

export default Menu;