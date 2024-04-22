import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import "../../styles/searchbar.css"
import { Button } from 'semantic-ui-react';
import Icons from './Icons';

export default function SearchComponent() {
    return (
        <div>
            <Button class="ui secondary button" secondary >
            <Icons iconName={'bars icon'} iconsize={'small'}/>
                Categories
            </Button>
            <div className="ui large icon input" >
                <input type="text" placeholder="Search..." id="searchitems" />
                <Icons iconName={'search icon'} iconsize={'large'}/> 
            </div>
        </div>
    )
}
