import Icons from '../Navbar/Icons';
import "../../styles/eventMenu.css"
import Chip from '@mui/material/Chip';
import { useRef } from 'react';

export default function EventMenu() {
  const listofActivites = ["LiveShows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"];
  return (
    <div>
      <main id="eventMenu">
        <section className='eventMenu-location'>
          <Icons iconName={"map marker alternate icon"} iconsize={"large"} />
          <i>Mumbai,India</i>
          <Icons iconName={"angle right icon"} iconsize={"large"} />
        </section>
        <section className='eventMenu-listofevents'>
          <div className="eventMenu-chip-container">
            {listofActivites.map((item, index) => {
              return <Chip className={"eventMenu-chip"} key={index} label={`${item}`} size={"large"} />
            })
            }
          </div>
        </section>
      </main>
    </div>
  )
}
