import React from "react";
import "./news.css";

const News = () => {
  const beaches = {
    name: "MiaMi Florida",
    img: "https://i2.wp.com/onedayitinerary.com/wp-content/uploads/2019/01/One-day-in-Miami-Itinerary.jpg?fit=800%2C600&ssl=1"
  }

  return(
    <div className="news_details">
      <h5>The World's Most Nice Beaches</h5>
     
      <div className="rumors">
        <h4>{beaches.name}</h4>
        <img src={beaches.img} alt="beach_pic"/>
        <p>Miami florida is one of the best beaches around the world and it's located in the United states of America.But recently it was affected by the global pandemic, that was brought by covid 19.</p>
        <div className="link"><a href="#">More Details</a></div>
      </div>
    </div>  
  )
}

export default News;