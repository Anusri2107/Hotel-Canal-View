import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ service }) {
  return (
    <div>
      <div class="card">
        <div class="card-details">
          <div className="text-5xl text-[color:var(--color1)]">{service}</div>
          <div>
            <p class="text-title font-face-ta">Card title</p>
            <p class="text-body font-face-fl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              cupiditate.
            </p>
          </div>
        </div>
        <Link to="/services&facilities">
          <button class="card-button font-face-ta">More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
