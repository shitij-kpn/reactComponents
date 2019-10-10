import React from 'react'

import './cards.css'

const Item = (props) => {

    const { name, specs, username, favourites } = props.item;

    return(
        <div class="card">
            <img src="book.jpg" alt="Akash books" />
            <h1>{name}</h1>
            <p class="price">price</p>
            <p>{specs}</p>
            <p>by: {username}</p>
            <p><button> Favourites: {favourites}</button></p>
        </div>
    )
}
        
export default Item
