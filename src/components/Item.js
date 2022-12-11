import React from 'react'

function Item({ imageUrl, name, description, color, price, rating }) {
  return (
    <div className="item">
      <div className="item_info">
        <div className="item_image">
          <img src={imageUrl} alt="img" />
        </div>
        <div className="item_name">
          <p>{name}</p>
        </div>
        <div className="item_description">
          <p>{description}</p>
        </div>
        <div className="item_color">
          <p className="info_text">Цвет:</p>
          <p> {color}</p>
        </div>
        <div className="item_price">
          <p className="info_text">Цена: </p>
          <p>{price} byn</p>
        </div>
        <div className="item_rating">
          <p className="info_text">Рейтинг:</p>
          <p> {rating}</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Item)
