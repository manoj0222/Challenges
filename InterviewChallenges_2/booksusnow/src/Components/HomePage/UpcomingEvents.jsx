import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Card, Loader, Dimmer, Icon } from "semantic-ui-react";
import "../../styles/upcomingevents.css";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const recommen_shows_url =
    "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming";

  useEffect(() => {
    fecthData();
  }, []);

  async function fecthData() {
    try {
      const response = await axios.get(recommen_shows_url);
      const data = await response.data;
      if (data !== undefined && data.events.length > 0) {
        setEvents([...data.events]);
        setLoading(true);
      } else {
        setLoading(true);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
      <div className="upcomineventparent">
        {!loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading...</Loader>
          </Dimmer>
        ) : (
          events.map((item, index) => {
            return (
              <UpcomingEventsCard
                key={index}
                imgurl={item.imgUrl}
                date={item.date}
                eventName={item.eventName}
                cityName={item.cityName}
                weather={item.weather}
                distanceKm={item.distanceKm}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export function UpcomingEventsCard({
  imgurl,
  date,
  eventName,
  cityName,
  weather,
  distanceKm,
}) {
  return (
    
    <div className="upcoming-eventcardcontainer">{console.log(imgurl)}
      <section className="upcoming-eventcardthumbnail">
       <img src={imgurl} width="130px" height="130px"></img>
        <br></br>
        <span className="upcoming-eventcarddate">{date}</span>
      </section>
      <section className="upcoming-eventcarddescription">
        <section>
          <h5 className="upcoming-eventname">{eventName}</h5>
        </section>
        <section className="upcoming-eventcard-locoation">
          <section className="location-left">
            <span className="location-name">{cityName}</span>
          </section>
          <section className="location-right">
            <span>{weather.split(" ").join(",").toString()}&nbsp;&nbsp;{"|"}</span>
            <section>
              <span>&nbsp;{Math.round(distanceKm / 1000, 2)}</span>
              <span>{"Km"}</span>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
