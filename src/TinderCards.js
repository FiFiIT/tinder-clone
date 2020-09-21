import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { getTinderCards } from "./api/tinderApi";
import "./TinderCards.css";

const TinderCards = () => {
  const defaultCardState = [{ name: "", url: "" }];
  const [people, setPeople] = useState(defaultCardState);

  useEffect(() => {
    setPeople(getTinderCards());
  }, []);

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
