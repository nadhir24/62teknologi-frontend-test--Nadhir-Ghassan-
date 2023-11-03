// RestaurantDetail.js
import React from "react";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      {/* Tambahkan slideshow foto */}
      <ul>
        {restaurant.photos.map((photo) => (
          <img src={photo} alt="Restaurant Photo" key={photo} />
        ))}
      </ul>
      {/* Tambahkan daftar ulasan */}
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      {/* Tambahkan peringkat dan tautan ke Google Maps */}
      <p>Rating: {restaurant.rating}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${restaurant.latitude},${restaurant.longitude}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See on Google Maps
      </a>
    </div>
  );
};

export default RestaurantDetail;
