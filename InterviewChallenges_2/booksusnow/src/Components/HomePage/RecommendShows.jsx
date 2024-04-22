import React, { useEffect, useState, useRef } from "react";
import "../../styles/recommendshows.css";
import axios from "axios";
import { Card, Image, Loader, Dimmer, Icon } from "semantic-ui-react";
import image_1 from "../../Images/Image_1.svg";
import image_2 from "../../Images/Image_2.svg";
import image_3 from "../../Images/Image_3.svg";
import image_4 from "../../Images/Image_4.svg";
import image_5 from "../../Images/Image_5.svg";
import image_6 from "../../Images/Image_6.svg";
import image_7 from "../../Images/Image_7.svg";
import image_8 from "../../Images/Image_8.svg";

export default function RecommendShows() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const recommen_shows_url =
    "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

  const imagesUrl = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
  ];

  useEffect(() => {
    fecthData();
  }, []);

  async function fecthData() {
    try {
      const response = await axios.get(recommen_shows_url);
      const data = await response.data;
      if (data !== undefined && data.events.length > 0) {
        setShows([...data.events]);
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

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) 
    return;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const totalWidth = container.scrollWidth;
    const cardWidth = container.children[0].offsetWidth;
    if (scrollLeft === 0) {
      // Scrolled to the beginning, show last images
      container.scrollLeft = totalWidth - containerWidth - cardWidth;
    } 
    else if (scrollLeft + containerWidth >= totalWidth) {
      // Scrolled to the end, show first images
      container.scrollLeft = cardWidth;
    }
  };

  return (
    <div className="recommendshows-parent">
      <section className="recommendshows-container">
        <section>
          <h3 className="recommendshows-headerright">Recommened Shows</h3>
          <Icon className="recommendshows-headericon"
          name="long arrow alternate right icon" size="large" color="white"></Icon>
          <h6 className="recommendshows-headerleft"><u>see all</u></h6>
        </section>
        <section className="shows-scroll">
          <div
            className="recommendshows-cardcontent"
            ref={containerRef}
            onScroll={handleScroll}
          >
            {shows.map((show, index) => (
              <RecommendShowCardView
                key={index}
                imageurl={imagesUrl[index]}
                eventName={show.eventName}
                date={show.date}
                iconsize={"large"}
              />
            ))}
            {!loading && (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

function RecommendShowCardView({
  imageurl,
  eventName,
  date,
  cityName,
  iconsize,
}) {
  return (
    <Card>
      <Image src={imageurl} />
      <Card.Content>
        <Card.Header>{eventName}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
  );
}
