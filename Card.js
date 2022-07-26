import React from "react";
const Card = function (props) {
  return (
    // <><h1>RoboFriends</h1>
    <div className="tc bg-green dib br3 pa2 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?200*200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
    // </>
  );
};
export default Card;
