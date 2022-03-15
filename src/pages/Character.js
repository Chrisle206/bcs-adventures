import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import coins from '../assets/images/coins.png'
import track from '../assets/sounds/character.mp3'
import characterImg from '../assets/images/cement-shoes2.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import getCharacter from '../Javascript/getCharacter.js'
/////////////////
import bloodysword from '../assets/images/bloody-sword.png'
import shield from '../assets/images/rosa-shield.png'
import diploma from '../assets/images/diploma.png'
import up from '../assets/images/hp.png'
import flask from '../assets/images/flask.png'
// import portal from '../assets/images/portal.png'
// import arrow from '../assets/images/arrow.png'
import scroll2 from '../assets/images/scroll2.png'
// import staff from '../assets/images/staff.png'
// import syringe from '../assets/images/syringe.png'
import bug from '../assets/images/bug.png'
import box from '../assets/images/box.png'
import keyboard from '../assets/images/keyboard.png'
import frog from '../assets/images/frog.png'
import quiver from '../assets/images/quiver.png'
import compass from '../assets/images/compass.png'
import orb from '../assets/images/orb.png'
import wand from '../assets/images/wand.png'
import dagger from '../assets/images/dagger.png'
import ring from '../assets/images/ring.png'
import armor from '../assets/images/armor.png'
import pen from '../assets/images/pen.png'
import dagger2 from '../assets/images/dagger2.png'
import cog from '../assets/images/cog.png'
import key from '../assets/images/key.png'
import book from '../assets/images/book.png'
import skis from '../assets/images/skis.png'
import sunglasses from '../assets/images/sunglasses.png'
import mallet from '../assets/images/mallet.png'
import bottle from '../assets/images/bottle.png'
import rock from '../assets/images/rock.png'
import scroll from '../assets/images/scroll.png'
import fangs from '../assets/images/fangs.png'
import soda from '../assets/images/soda.png'
import map from '../assets/images/map.png'
import book2 from '../assets/images/book2.png'
import LoadingScreen from './Loading'

//characters
import Assassin from '../assets/images/characters/assassin.png'
import Master from '../assets/images/characters/routeMaster.png'
import Ranger from '../assets/images/characters/ranger.png'
import Warrior from '../assets/images/characters/warrior.png'

var arr = [];
export default function Character() {

    const [loading, isLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => isLoading(false), 2000)
    }, [])

    const [charData, setcharData] = useState({
        characterName: "",
    });

    useEffect(() => {
        getCharacter().then(function (result) {
            console.log(result);
            setcharData(result);
            return;
        });
    }, []);

const { characterName, characterClass, currency, def, exp, hp, level, items, atk, image } = charData


    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            console.log('muting')
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            console.log('unmuting')
            setStatus(false)
        }
    }
    /////////////////////////////////////////////////////////////////////////////////// SHOP LOGIC
    const [currHp, setCurrHp] = useState();
    const [currAtk, setCurrAtk] = useState();
    const [currDef, setCurrDef] = useState();
    const [currCoins, setCurrCoins] = useState();
    const [currChar, setCurrChar] = useState();
    // setCurrAtk(atk);
    // setCurrDef(def);
    // setCurrCoins(currency);
    let shopItem = '';
    let itemCost = '';
    let obj = {};
//////////////////// Renders Char to page
    function renderChar() {
        if (image === 'assassin') {
            setCurrChar(Assassin)
        } else if (image === 'master') {
            setCurrChar(Master)
        } else if (image === 'ranger') {
            setCurrChar(Ranger)
        } else if (image === 'warrior') {
            setCurrChar(Warrior)
        }
        console.log(image)
    }

/////////////////// RENDERS STATS TO PAGE
    function refresh() {
        setCurrHp(hp);
        setCurrAtk(atk);
        setCurrDef(def);
        setCurrCoins(currency);
        renderChar()
    }

    useEffect(() => {
        refresh()
    })
    
/////////////////// ADDS ITEMS STATS TO PLAYER STATS
    function addToStat(item) {
        if(item === 'Potion of Postponement') {
            setCurrHp(currHp + 10);
        }
        if(item === '101 Manatee Jokes') {
            setCurrDef(currDef + 1);
        }
        if(item === 'Bug Squisher') {
            setCurrAtk(currAtk + 5);
        }
        if(item === 'La Croix') {
            setCurrHp(currHp + 5);
        }
        if(item === 'Shiva\'s Fang') {
            setCurrAtk(currAtk + 5);
        }if(item === 'Bahamut\'s Box') {
            setCurrDef(currDef + 2);
        }if(item === 'Dom Map') {
            setCurrDef(currDef + 2);
        }if(item === 'MIT License') {
            setCurrDef(currDef + 3);
        }if(item === 'UDEMY Course Coupon') {
            setCurrDef(currDef + 3);
        }if(item === 'Best Practices Handbook') {
            setCurrAtk(currAtk + 8);
        }
        if(item === 'Mongo\'s Compass') {
            setCurrDef(currDef + 4);
        }
        if(item === 'Flexbox Froggy') {
            setCurrAtk(currAtk + 10);
        }
        if(item === 'Magic Keyboard') {
            setCurrAtk(currAtk + 15);
        }
        if(item === 'Callback Quiver') {
            setCurrAtk(currAtk + 15);
        }
        if(item === 'Orb of OOP') {
            setCurrAtk(currAtk + 15);
        }if(item === 'Wand of Recursion') {
            setCurrAtk(currAtk + 15);
        }if(item === 'Bootstrap Dagger') {
            setCurrAtk(currAtk + 20);
        }if(item === 'Ring of Regex') {
            setCurrHp(currHp + 10);
        }if(item === 'Paradigm-Padded Armor') {
            setCurrDef(currDef + 5);
        }if(item === 'Excalidraw') {
            setCurrAtk(currAtk + 25);
        }
        if(item === 'Nodemon Dagger') {
            setCurrAtk(currAtk + 10);
        }
        if(item === 'HashSync Shield') {
            setCurrDef(currDef + 10);
        }
        if(item === 'Arcane Config') {
            setCurrAtk(currAtk + 10);
        }
        if(item === 'API Skeleton Key') {
            setCurrAtk(currAtk + 10);
            setCurrDef(currDef + 5);
        }
        if(item === 'Ronnel\'s Memoir') {
            setCurrAtk(currAtk + 4);
            setCurrDef(currDef + 4);
            setCurrHp(currHp + 20);
        }if(item === 'Brett\'s Skis') {
            setCurrHp(currHp + 35);
        }if(item === 'Louis\' Sunglasses') {
            setCurrHp(currHp + 30);
            setCurrAtk(currAtk + 5);
        }if(item === 'Sword of Sequelize') {
            setCurrAtk(currAtk + 15);
        }if(item === 'Hu-Mongo Mallet') {
            setCurrAtk(currAtk + 15);
        }if(item === 'Tutor In-A-Bottle') {
            setCurrHp(currHp + 50);
        }
    }
    
/////////////////// ADD ITEM TO INVENTORY
    function addItem() {
        if(!arr.includes(shopItem) && parseInt(obj.itemCost) < currCoins) {
            arr.push(obj.shopItem);
            setCurrCoins(currCoins-obj.itemCost);
            addToStat(shopItem);
        }
        console.log(arr);

    }

////////////////// SELECT ITEM 1 of 30
    function currentItem() {
        let element = document.getElementById('shopitem1');
        let element2 = document.getElementById('cost1');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem2() {
        let element = document.getElementById('shopitem2');
        let element2 = document.getElementById('cost2');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem3() {
        let element = document.getElementById('shopitem3');
        let element2 = document.getElementById('cost3');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem4() {
        let element = document.getElementById('shopitem4');
        let element2 = document.getElementById('cost4');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem5() {
        let element = document.getElementById('shopitem5');
        let element2 = document.getElementById('cost5');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem6() {
        let element = document.getElementById('shopitem6');
        let element2 = document.getElementById('cost6');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem7() {
        let element = document.getElementById('shopitem7');
        let element2 = document.getElementById('cost7');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem8() {
        let element = document.getElementById('shopitem8');
        let element2 = document.getElementById('cost8');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem9() {
        let element = document.getElementById('shopitem9');
        let element2 = document.getElementById('cost9');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem10() {
        let element = document.getElementById('shopitem10');
        let element2 = document.getElementById('cost10');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem11() {
        let element = document.getElementById('shopitem11');
        let element2 = document.getElementById('cost11');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem12() {
        let element = document.getElementById('shopitem12');
        let element2 = document.getElementById('cost12');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem13() {
        let element = document.getElementById('shopitem13');
        let element2 = document.getElementById('cost13');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem14() {
        let element = document.getElementById('shopitem14');
        let element2 = document.getElementById('cost14');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem15() {
        let element = document.getElementById('shopitem15');
        let element2 = document.getElementById('cost15');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem16() {
        let element = document.getElementById('shopitem16');
        let element2 = document.getElementById('cost16');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem17() {
        let element = document.getElementById('shopitem17');
        let element2 = document.getElementById('cost17');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem18() {
        let element = document.getElementById('shopitem18');
        let element2 = document.getElementById('cost18');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem19() {
        let element = document.getElementById('shopitem19');
        let element2 = document.getElementById('cost19');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem20() {
        let element = document.getElementById('shopitem20');
        let element2 = document.getElementById('cost20');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem21() {
        let element = document.getElementById('shopitem21');
        let element2 = document.getElementById('cost21');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem22() {
        let element = document.getElementById('shopitem22');
        let element2 = document.getElementById('cost22');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem23() {
        let element = document.getElementById('shopitem23');
        let element2 = document.getElementById('cost23');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem24() {
        let element = document.getElementById('shopitem24');
        let element2 = document.getElementById('cost24');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem25() {
        let element = document.getElementById('shopitem25');
        let element2 = document.getElementById('cost25');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem26() {
        let element = document.getElementById('shopitem26');
        let element2 = document.getElementById('cost26');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem27() {
        let element = document.getElementById('shopitem27');
        let element2 = document.getElementById('cost27');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem28() {
        let element = document.getElementById('shopitem28');
        let element2 = document.getElementById('cost28');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem29() {
        let element = document.getElementById('shopitem29');
        let element2 = document.getElementById('cost29');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    function currentItem30() {
        let element = document.getElementById('shopitem30');
        let element2 = document.getElementById('cost30');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    ///////////////////////////////////////////////////////////////////////////////////

    return (
        <>
        {loading === false ? (

        <div className="pageContainer creationBg">
            <div className='rotate'>Rotate to play</div>
            <div className="mainCharContainer">
                <div className="topNavContainer">
                    <Link to={'/Tavern'} style={{textDecoration: 'none', color: 'white'}} className="backbutton"><img className='backbuttonimg' src={back} alt="Back_Button" /> Back</Link>
                </div>
                <div className="widthChar2Container">
                <div className="charboxContainer">
                    <div className='charBox pixel-border'>

                        <h1 className='boxtitle'>
                            {characterName}'s Stats
                        </h1>
                        <div className='statusbox'>
                            <div className='statbottom'>
                                <h3 className='statfontbig'>Level: {level}</h3>
                                <h3 className='statfontbig'>Available Skillpoints: 4</h3>
                            </div>
                            <img className="characterEmpty2" src={currChar} alt="Empty_character" />
                            <div className='statcontainer'>
                                <div className='stats'>
                                    <h3 className='statfont'> Health: {currHp}</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'>Attack: {currAtk}</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'> Defense: {currDef}</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                            </div>
                        </div>

                    </div>
                    <div className='charBox pixel-border'>
                        <h1 className='boxtitle'>
                            Shop
                        </h1>
                        <div className='shoprow'>
                            <button className='shopitem bought' onClick={currentItem}><img className="itemimg" src={flask} alt="Flask" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem1'>Potion of Postponement</h4>
                                        <h4>The label says "For emergency deadline extensions only." It seems to be sealed with a magic riddle.</h4>
                                        <h4>HP: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost1'>50</div>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button className='shopitem' onClick={currentItem2}><img className="itemimg" src={scroll} alt="scroll" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem2'>101 Manatee Jokes</h4>
                                        <h4>You'll be swimming in good times.</h4>
                                        <h4>Def: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost2'>10</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem3}><img className="itemimg" src={bug} alt="bug" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem3'>Bug Squisher</h4>
                                        <h4>This hammer has been deconstructed, making its properties easier to access. This makes it notably harder to kill bugs with, however.</h4>
                                        <h4>Attack: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost3'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem4}><img className="itemimg" src={soda} alt="soda" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem4'>La Croix</h4>
                                        <h4>You don't like the taste but drink it anyways.</h4>
                                        <h4>HP: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost4'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem5}><img className="itemimg" src={fangs} alt="fangs" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem5'>Shiva's Fang</h4>
                                        <h4>It smells kind of funny.</h4>
                                        <h4>Atk: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost5'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem6}><img className="itemimg" src={box} alt="box" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem6'>Bahamut's Box</h4>
                                        <h4>The perfect size for a cat.</h4>
                                        <h4>Defense: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost6'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem7}><img className="itemimg" src={map} alt="map" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem7'>Dom Map</h4>
                                        <h4>This should help navigate those nested arrays.</h4>
                                        <h4>Defense: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost7'>25</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem8}><img className="itemimg" src={diploma} alt="diploma" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem8'>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost8'>30</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem9}><img className="itemimg" src={scroll2} alt="scroll2" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem9'>UDEMY Course Coupon</h4>
                                        <h4>You're gonna need this.</h4>
                                        <h4>Defense: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost9'>35</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem10}><img className="itemimg" src={book2} alt="book2" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem10'>Best Practices Handbook</h4>
                                        <h4>For all your RESTful needs. Touching it makes you sleepy.</h4>
                                        <h4>Atk: +8</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost10'>40</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem11}><img className="itemimg" src={compass} alt="compass" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem11'>Mongo's Compass</h4>
                                        <h4>It's a magical compass but it lacks cardinal directions.</h4>
                                        <h4>Defense: +4</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost11'>45</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem12}><img className="itemimg" src={frog} alt="frog" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem12'>Flexbox Froggy</h4>
                                        <h4>He looks ready for combat!</h4>
                                        <h4>Atk: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost12'>50</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem13}><img className="itemimg" src={keyboard} alt="keyboard" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem13'>Magic Keyboard</h4>
                                        <h4>Rainbow keys! Cool!</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost13'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem14}><img className="itemimg" src={quiver} alt="quiver" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem14'>Callback Quiver</h4>
                                        <h4>Filled with arrow functions.</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost14'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem15}><img className="itemimg" src={orb} alt="orb" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem15'>Orb of OOP</h4>
                                        <h4>The orb bids you near, promising paradigm-shifting advantages. But it seems a bit obtuse.</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost15'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem16}><img className="itemimg" src={wand} alt="wand" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem16'>Wand of Recursion</h4>
                                        <h4>Great at creating loops, but dangerous in untrained hands.</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost16'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem17}><img className="itemimg" src={dagger} alt="dagger" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem17'>Bootstrap Dagger</h4>
                                        <h4>Simple and convenient.</h4>
                                        <h4>Atk: +20</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost17'>200</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem18}><img className="itemimg" src={ring} alt="ring" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem18'>Ring of Regex</h4>
                                        <h4>This ring is hideous.</h4>
                                        <h4>HP: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost18'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem19}><img className="itemimg" src={armor} alt="armor" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem19'>Paradigm-Padded Armor</h4>
                                        <h4>This should offer ideal protection from all edge-cases. But it probably doesn't.</h4>
                                        <h4>Def: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost19'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem20}><img className="itemimg" src={pen} alt="pen" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem20'>Excalidraw</h4>
                                        <h4>This sword is easy to use but is lacking in extra features.</h4>
                                        <h4>Atk: +25</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost20'>250</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem21}><img className="itemimg" src={dagger2} alt="dagger2" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem21'>Nodemon Dagger</h4>
                                        <h4>Ideal for fighting demons and document changes.</h4>
                                        <h4>Atk: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost21'>250</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem22}><img className="itemimg" src={shield} alt="shield" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem22'>HashSync Shield</h4>
                                        <h4>Offers ideal protection against hackers. It is covered in salt.</h4>
                                        <h4>Def: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost22'>300</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem23}><img className="itemimg" src={cog} alt="cog" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem23'>Arcane Config</h4>
                                        <h4>It is beyond your comprehension. Luckily, it works anyways.</h4>
                                        <h4>Atk: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost23'>300</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem24}><img className="itemimg" src={key} alt="key" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem24'>API Skeleton Key</h4>
                                        <h4>Instant access to any API, ever. Wow!</h4>
                                        <h4>Atk: +10, Def: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost24'>350</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem25}><img className="itemimg" src={book} alt="book" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem25'>Ronnel's Memoir</h4>
                                        <h4>This powerful artifact contains memories of projects past. It is stained with tears.</h4>
                                        <h4>Atk: +4, Def: +4, HP: +20</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost25'>500</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem26}><img className="itemimg" src={skis} alt="skis" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem26'>Brett's Skis</h4>
                                        <h4>They are second-hand but still in good shape.</h4>
                                        <h4>HP: +35</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost26'>450</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem27}><img className="itemimg" src={sunglasses} alt="sunglasses" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem27'>Louis' Sunglasses</h4>
                                        <h4>Only the coolest of cats can equip these bad-boys.</h4>
                                        <h4>HP: +30, Atk: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost27'>500</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem28}><img className="itemimg" src={bloodysword} alt="Sword" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem28'>Sword of Sequelize</h4>
                                        <h4>Requires a lot of setup to use but well worth it.</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost28'>350</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem29}><img className="itemimg" src={mallet} alt="mallet" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem29'>Hu-Mongo Mallet</h4>
                                        <h4>It's easy to use. Smack! But pretty heavy.</h4>
                                        <h4>Atk: +15</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost29'>350</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem30}><img className="itemimg" src={bottle} alt="bottle" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem30'>Tutor In-A-Bottle</h4>
                                        <h4>This tiny tutor will bend to your whim and logic, no matter how flawed.</h4>
                                        <h4>HP: +50</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost30'>500</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
    

                        </div>
                        <div className='shopbottom'>
                            <div className='coinrow'>
                                <img className="coinshop" src={coins} alt="Coins" />
                                <div className='row'>{currCoins}</div>
                            </div>
                            {/* If click on unbought item the the button is Buy, if clicked on bought item then the button is equip */}
                            <button className='buyequip' onClick={addItem}>Buy</button>
                        </div>
                        </div>
                        <div className='paddingbottom'></div> 
                    </div>

                </div>
                <div className="bottomNavContainer">
                <>
                        <audio autoPlay loop ref={audioRef} src={track}/>
                        {speaker ? (
                                <button onClick={volOn} className="backbutton"><img className='soundbuttonimg'src={speakeroff} alt="speaker" /></button>                    
                            ) : (
                                <>
                                <button onClick={volOff} className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button> 
                                </>
                        )}                   
                    </> 
                </div>
            </div>
        </div>
        ) : (
            <LoadingScreen />
        )}
        </>
    )
}