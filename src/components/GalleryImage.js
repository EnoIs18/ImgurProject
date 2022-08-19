/* eslint-disable no-unused-vars */
import React from "react";
import ThumbnailDetails from "./ThumbnailDetails";
import { Link } from "react-router-dom";

const GroupImages = ({ data }) => {
  return (
    <>
      {data.images &&
        data.images.map((element) => (
          <Link to={`details/${data.id}`}>
            <ThumbnailDetails key={element.id} details={element} />
          </Link>
        ))}
    </>
  );
};

export default GroupImages;
