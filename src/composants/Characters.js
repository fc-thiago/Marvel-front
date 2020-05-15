import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Characters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fechData = async () => {
    const response = await axios.get(
      " https://marvel-project-back.herokuapp.com/characters"
    );
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fechData();
  }, []);

  return loading ? (
    <span>Loading..xxxx></span>
  ) : (
    <div className="container">
      {" "}
      <div className="cards">
        {data.data.results.map((char, index) => {
          return (
            //recuperar o id pra usar no Offer com a funcao Params
            <Link key={char.id} to={`/comics/${char.id}`}>
              <div className="display">
                <span>
                  <main>
                    <img
                      className="imgHero"
                      alt=""
                      src={char.thumbnail.path + "." + char.thumbnail.extension}
                    />

                    {char.description && (
                      <p>{char.description.slice(0, 40)}...</p>
                    )}

                    <h2>{char.name}</h2>
                  </main>

                  {/* <span>{char.comics} euros</span> */}
                </span>
              </div>
              MARVEL
            </Link>
          );
        })}
      </div>
    </div>
    //td sera substraido usando offer por causa do map
  );
}

export default Characters;
