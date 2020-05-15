import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Marvel = () => {
  const history = useHistory();
  return (
    <>
      <div className="button">
        <button
          onClick={() =>
            history.push("/characters", {
              // productId: data._id,
              // img: data.picture.secure_url,
              // title: data.title,
              // price:       data.price,
            })
          }
        >
          <h1>Characters</h1>
        </button>
        <button
          onClick={() =>
            history.push("/comics", {
              // productId: data._id,
              // img: data.picture.secure_url,
              // title: data.title,
              // price:       data.price,
            })
          }
        >
          <h1>Comics</h1>
        </button>
      </div>
    </>
  );
};

export default Marvel;
