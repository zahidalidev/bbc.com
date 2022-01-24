import React from 'react';

import "./HeaderCard.css"

function HeaderCard(props) {
    return (
        <div style={{ height: "21rem", width: "37.2rem", backgroundImage: "url(https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/119D3/production/_122974127_bidenukraine.jpg)" }} className='header-card' >
            <div style={{ height: "21rem", width: "37.2rem", }} className='media-shade' ></div>
            <div className='media-content text-light' >
                <h3 className='media-title' >
                    <a className='media-link' >
                        US troops on high alert over Ukraine stand-off
                    </a>
                </h3>
                <p className='media-description' >
                    Some 8,500 combat-ready US troops are on high alert to deploy at short notice, the Pentagon says.
                </p>

                <a className='media-tag' rev="hero1|source" >
                    Europe
                </a>
            </div>
        </div>
    );
}

export default HeaderCard;