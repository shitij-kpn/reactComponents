import React from 'react'
import Item from '../card/cards'

import './cardlist.css'

const cardList = [
    {
        name:"pro1",
        specs:"good",
        username:"a",
        favourites: 1
    },
    {
        name:"rpo2",
        specs:"ok",
        username:"b",
        favourites:2
    },
    {
        name:'something',
        specs:'nice',
        username:'lmao',
        favourites:5
    },
    {
        name:'pronads',
        specs:'asasasa',
        username:'sucks',
        favourites:3
    },
    {
        name:'aanus',
        specs:'asasa',
        username:'hojo',
        favourites:4
    },
    {
        name:'jojo',
        specs:'siwa',
        username:"e",
        favourites:5
    }

]

const CardList = () => {
    
    const cards = cardList.map((card,i) => {
        return <Item key={i} item={card} />
    })

    return (
        <div className="container">
            {cards}
        </div>
    )
}

export default CardList
