import React from 'react'
import star from "../Images/Star 1.png";

function Card(props) {
    let badgeText;
    
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
    }   
    else if(props.country==='Online'){
        badgeText='ONLINE'
    }


    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.image} alt='katie' className='card-image'></img>
            <div className='card-stats '>
                <img src={star} alt='star'className='card-star' />
                <span>{props.rating}</span>
                <span className='grey'> ({props.reviewCount}) </span>
                <span className='grey'> .{props.country}</span>

            </div>
            <p>{props.title}</p>
            <p><span className = 'bold'> From ${props.price}</span> /person</p>

        </div>
    )
}

export default Card;
