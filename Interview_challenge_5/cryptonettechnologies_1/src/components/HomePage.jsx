import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  Image,
  Item,
} from "semantic-ui-react";
import "../styles/homepage.css";

export default function HomePage() {
  const [listOfItems, setItems] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {
      setItems([]);
    };
  }, []);

  const fetchData = async () => {
    let response;
    try {
      response = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      if (response.status === 200 && response.data.results.length > 0) {
        setItems(response.data.results);
        console.log(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <main className="parent-container">
        {listOfItems.length > 0 ? (
          <div>
            {listOfItems.map((eachItem) => {
              return (
                <section key={eachItem.id.value} className="eachItem">
                  <section className="itemImages">
                    <picture>
                      <source
                        media={{ "min-width": "600px" }}
                        srcSet={eachItem.picture.thumbnail}
                      ></source>
                      <source
                        media={{ "max-width": "900px" }}
                        srcSet={eachItem.picture.medium}
                      ></source>
                      <img src={eachItem.picture.large} alt="_itemimage"></img>
                    </picture>
                  </section>
                  <section className="itemDescription">
                    <p className="name">
                      <b>
                        {eachItem.name.title +
                          " " +
                          eachItem.name.first +
                          " " +
                          eachItem.name.last}
                      </b>
                    </p>
                    <address className="location-details">
                      <h4>Address</h4>
                      <p>
                        {eachItem.location.street.number +
                          " " +
                          eachItem.location.street.name +
                          "," +
                          eachItem.location.city +
                          "," +
                          eachItem.location.state +
                          "," +
                          eachItem.location.country}
                      </p>
                    </address>
                    <br></br>
                    <section>
                      <h4>Contact Details</h4>
                      <span>
                        <b>{eachItem.email}</b>
                      </span>
                      <br></br>
                      <span>{eachItem.cell}</span>
                      <br></br>
                      <span>
                        age:{eachItem.dob.age}
                        {","}
                        {eachItem.gender}
                      </span>
                      <br />
                    </section>
                  </section>
                </section>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
