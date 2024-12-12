import React, { useState, useEffect } from "react";
import "./infiniteScroll.css";

// InfiniteScroll component

function InfiniteScroll() {
  const [data, setData] = useState([]); // Data to display
  const [page, setPage] = useState(1); // Current page number
  const [loading, setLoading] = useState(false); // Loading state

  // Simulate fetching data
  const fetchData = async (pageNumber) => {
    setLoading(true);
    // Replace with your data fetching logic (e.g., API call)
    const newItems = Array.from(
      { length: 20 },
      (_, i) => `Item ${i + 1 + (pageNumber - 1) * 20}`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setData((prevData) => [...prevData, ...newItems]);
    setLoading(false);
  };

  // Fetch data on page change
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Infinite scroll logic: detect when the user is near the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="infinite-scroll-container">
      {data.map((item) => (
        <div key={item}>
          <div className="scroll-card">
            <p>{item}</p>
          </div>
        </div>
      ))}
      {loading && (
        <div className="loading">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default InfiniteScroll;
