import React from 'react'
import '../App.css'
import coins from '../assets/images/coins.png'
import book from '../assets/images/spell-book-white.png'
import charIcon from '../assets/images/mona-lisa-white.png'
import cage from '../assets/images/cage-white.png'
import beer from '../assets/images/beer-stein-white.png'


export default function Tavern() {
    return (
        <div className="pageContainer creationBg">
            <div className="mainContainer">
            
                <div className="widthContainer">
                <h3 className="logContainer"> <button>Logout</button></h3>
                    <h3 className="coinContainer"> <img className="coinImg" src={coins} alt="Coins" /> 200</h3>
                    <h1 className="TavernTitle">Tavern<img className="TavernBeer" src={beer} alt="Beer" /></h1>
                    <div className="TavernMenuContainer">
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={charIcon} alt="Character" />Character</div>
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={book} alt="Story" />Story</div>
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={cage} alt="Dungeon" />Dungeon</div>
                    </div>
                </div>

            </div>
        </div>
    )
}