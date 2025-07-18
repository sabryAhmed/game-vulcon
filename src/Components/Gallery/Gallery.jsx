import React from 'react'
import './Gallery.css'
import vulcon_2 from '../../assets/imgs/news-article-img-6.png'
import vulcon_logo from '../../assets/imgs/logo.png'
import huslover from '../../assets/imgs/Huslverse.webp'
import mype from '../../assets/imgs/CHUMBI-VALLEY-play-to-earn-nft-game-1536x864.webp'
function Gallery() {
  return (
    <div className='container'>
        <div className="row my-5">

            <div className="text-center fw-bolde text-light col-lg-12 col-sm-12">
                <p>eGamers.io - P2E NFT Games Portal  VULCAN FORGED GAMES LIST</p>
                <h1>VULCAN FORGED GAMES LIST</h1>
           

                <img src={vulcon_2} alt=""  className='w-100'/>
                 
            </div>
            
            <div className="lore text-light col-lg-12 col-sm-12">
                <a href="" className='text-light'>Elysium </a> <p>will use proof-of-stake to be energy efficient, and developers will be able to create any kind of web3 apps like dapps and games. Fast transaction speeds, low fees, and a growing number of projects agreed to join make Elysium one of the hottest EVM-compatible chains to wait for.</p>

                <p>The main token of Elysium will be $PYR, while $LAVA will be used for transaction fees. Fees will be cheap.</p>

                <p>The native NFT creator of VF will support all projects that need an easy and advanced tool to create their assets. With the Elysium, new opportunities arrive with item-sharing across games, the known concept of Multiverse.</p>
          
          <p>Elysium games could create different variations of Metaverses with assets sharing. Imagine owning a sword in VulcanVerse and being able to play another 100 games with that sword.</p>
            
            <h2 className='fw-bolde'>VULCAN FORGED GAMES LIST</h2>
            <strong>VulcanVerse is an open-world fantasy MMORPG and a metaverse based in the ancient Greco-Roman age with fascinating lore and a fantastic community.</strong>

            <p>Land Ownership, Play-To-Earn, Leaderboard, and Scholarships are some aspects that make this game unique. The future updates will make VulcanVerse a fully-fledged MMORPG.</p>
            <b>VulcanVerse</b>

            <p>Every single NFT of the 10,000 land plots was sold-out in the previous sales, and the only way to acquire one was through the marketplace.</p>

            <p>VulcanVerse is available in open beta for everyone to play. Free scholarships are available too!</p>

            <a href="">Play VulcanVerse</a>


            <img src={vulcon_logo} alt=""  className='w-50'/>
 
            </div>


        <div className="huslverse my-5 text-light  col-lg-12 col-sm-12 ">
            

            <img src={huslover} alt=""  className='w-100'/>
              

            <p className='my-5'> -- HUSL</p>
            <p>HUSL is a blockchain music company focused on NFT music and gaming. The HUSL, together with Vulcan Forged, will bring HUSLVerse metaverse to the community.</p>
            <p>The HUSLVerse will feature some of the top music, clothing, entertainment, and sports brands in its astonishing world. </p>

            <b>Users of The HUSL metaverse will also attend musical concerts, events, conferences, and everything your mind can imagine, all within a play-to-earn model, meaning earning via playing different games around HUSLVerse.</b>
            <a href="">VISIT HUSL</a>
            <strong>Chumbi Valley</strong>
            <p>Chumbi Valley is an upcoming role-playing game playable on every platform except iOS (coming soon), and based on the Polygon Network, Chumbi Valley is a game we presented to you with a review back in October 2021.</p>

            <p>With its spectacular concept of gameplay inspired by classics like Pokemon and Zelda, Chumbi Valley is a game like no other, with Chumbi NFTs roaming rule less and free around the Valleys waiting for a master to govern them.</p>

<b>Together with Chumbis, you can explore, offline farm, and battle other Chumbis in order to get rewarded while fulfilling your champion’s wishes.</b>
      
      <img src={mype} alt=""  className='w-100 my-5'/>
        </div>




        </div>
    </div>
  )
}

export default Gallery
