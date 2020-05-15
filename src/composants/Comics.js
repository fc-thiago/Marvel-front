import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Comics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const fechData = async () => {
    const response = await axios.get(
      `https://marvel-project-back.herokuapp.com/comics?offset=${offset}`
    );
    setData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fechData();
  }, []);

  return loading ? (
    <span>Loading..xxxx></span>
  ) : (
    <div className="container">
      <div className="cards">
        {data.results.map((comics, index) => {
          return (
            <div className="display">
              <span>
                <section>
                  <h3 key={index}>{comics.title}</h3>
                  <img
                    className="imgComics"
                    alt=""
                    src={
                      comics.thumbnail.path + "." + comics.thumbnail.extension
                    }
                  />
                </section>
              </span>
            </div>
          );
        })}
        <button
          onClick={() => {
            offset > 0 && setOffset(offset - 20);
          }}
        >
          Page précédente
        </button>
        <button
          onClick={() => {
            setOffset(offset + 20);
          }}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
}

export default Comics;
