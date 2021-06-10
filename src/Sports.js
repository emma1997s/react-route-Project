import React from "react";

const Sports = () => {
  const transfers = {
    name: "Lionel Messi",
    img: "https://i.ytimg.com/vi/9h1lvLycLXw/maxresdefault.jpg"
  }

  return(
    <div className="news_details">
      <h5>Europe Transfers</h5>
     
      <div className="rumors">
        <h4>{transfers.name}</h4>
        <img src={transfers.img} alt="messi_pic"/>
        <p>Messi's transfer speculations are now done because he has already come into agreements with the English premier league club and that is Manchester City</p>
        <a href="#">More Details</a>
      </div>
    </div>  
  )
}

export default Sports;