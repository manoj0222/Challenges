import React, { useEffect, useState } from "react";
import { Loader, Card, CardGroup } from "semantic-ui-react";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import HeaderImage from "./HeaderImage";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    setIsLoading(true);
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      setData(prevData => [...prevData, ...response.data]);
      setPage(prevPage => prevPage + 1);
      setIsLoading(false);
      console.log(response)
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const fetchMoreData = () => {
    fetchData();
  };

  return (
    <div className="parent">
      <Loader active={isLoading} inline="centered" />
      {!isLoading && (
        <main>
          <HeaderImage />
          <InfiniteScroll
            next={fetchMoreData}
            hasMore={true}
            dataLength={data.length}
            loader={<h4>Loading...</h4>}
          >
            <section className="scrollViewer">
              {data.map((item, index) => (
                <div className="eachImageItem">
                 <img src={item.download_url} ></img>
                </div>
              ))}
            </section>
          </InfiniteScroll>
        </main>
      )}
    </div>
  );
}
