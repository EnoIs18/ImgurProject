// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
const Data = () => {
  const url =
    "https://api.imgur.com/3/gallery/hot/top/top/?showViral=true&mature=false&album_previews=true";
  const config = {
    headers: {
      Authorization: "Bearer 897ba61182d65604b92d667a3c8cf1856fbc5906 ",
    },
  };

  useEffect(() => {
    axios
      .get(url, config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div>Data</div>;
};

export default Data;
