import React from 'react'
import "../../styles/navbar.css"
import { Button } from 'semantic-ui-react';
import Icons from './Icons';
import SearchComponent from './SearchComponent';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
    const isMobileScreen = useMediaQuery({ query: '(max-width:938px)' })

    return (
        <div>
            <nav className='nav-Bar'>
                <section className='nav-Bar-logo'>
                    <p className="nav-Bar-logo-name">BookUsNow</p>
                </section>
                <section className='nav-Bar-search'>
                    {
                        isMobileScreen ? <></> :<SearchComponent />
                    }
                </section>
                <section className='nav-Bar-signin'>
                    {
                       !isMobileScreen?
                       <>
                       <button class="ui basic button" id="nav-Bar-fav" >
                            <Icons iconName={"heart icon"} iconsize={'large'}/>
                            Favorities
                        </button>
                       <Button basic >SignIn</Button>
                       </>
                       : 
                       <section id="nav-bar-icon">
                        <Icons iconName={'search icon'} iconsize={'small'}/>
                        <Icons iconName={"heart icon"}  iconsize={'small'}/>
                        <Icons iconName={"user icon"}   iconsize={'small'}/>
                       </section>
                    }
                </section>
            </nav>
        </div>
    )
}




