import React from 'react'
import homepage from "../../Images/Banner.svg"
import "../../styles/homePage.css"
import RecommendShows from './RecommendShows';
import UpcomingEvents from "./UpcomingEvents";

export default function HomePage() {

  

  return (
    <main>
      <section className='homePage-appDescription'>
        {/* <img className='homePage-appDescription-image' src={homepage}></img> */}
        <div className='home-description-container'>
          <h1 className='main-heading'>Discover Exciting Events Happening Near You -Stay Tuned for Updates!</h1>
          <h6 class="sub-heading">
            Dorem ipsum dolor sit amet,consectetur asipiscing elit.Nunc vulputate libero et velit interdum,ac aliquet odio mattis.Class aptent taciti sociosqu ad
            litora torquent per conubia nostra,per
          </h6>
        </div>
      </section>
      <section className='homePage-Recommendshows'>
        <RecommendShows/>
      </section>
      <section className='homePage-upcomingEvents'>
        <UpcomingEvents/>
      </section>
    </main>
  )
}
