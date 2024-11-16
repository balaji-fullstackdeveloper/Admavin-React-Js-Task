import React, { useState, useEffect } from "react";
import "./infiniteScroll.css";

// InfiniteScroll component

function InfiniteScroll() {
  const [items, setItems] = useState([0]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetches the next page of items when the page number changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch the next page of items
        const newItems = await Promise.all(
          Array.from({ length: 10 }, (_, i) => i + 1 + (page - 1) * 10).map(
            async (i) => i
          )
        );

        // Update the list of items
        setItems((prevItems) => [...prevItems, ...newItems]);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    // Fetch the next page of items when the page number changes
    fetchData();
  }, [page]);

  // Adds an event listener to the window to detect when the user scrolls to the bottom of the page

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight;

      // If the user has scrolled to the bottom of the page, load the next page
      if (isAtBottom) setPage((prevPage) => prevPage + 1);
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="infinite-scroll-container">
      {items.map((item) => (
        <div key={item}>
          <div className="scroll-card">
            <p>Container {item}</p>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="loading">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default InfiniteScroll;
