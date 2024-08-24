"use client";
import React, { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: searchInput }),
    });
    const data = await res.json();
    setSearchResults(data.results);
  };

  return (
    <>
      <nav>
        <span id="logo">M</span> <h2>Mira</h2>
      </nav>
      <div id="headsearch">
        <h1 id="headline">
          Your Answers, <span>Simplified.</span>
        </h1>
        <div id="input-wrapper">
          <form onSubmit={handleSearch}>
            <textarea
              name="search"
              rows={3}
              placeholder="Search something"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></textarea>
            <button type="submit">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="rgba(90, 110, 90, 0.50)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div id="content">{searchResults && <p>{searchResults}</p>}</div>
    </>
  );
}
