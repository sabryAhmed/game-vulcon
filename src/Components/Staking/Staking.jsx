import React from 'react'
import './Staking.css'
import gadwel from '../../assets/imgs/Staking.jpg'
function Staking() {
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="text-light my-5">
            <h1 className='text-center my-5'><span>Staking</span></h1>
            <p className='text-center'>The native digital crypto token powering the VulcanVerse economy is PYR. Vulcan Forged carefully crafted this ERC20 token together with their blockchain partner Polygon. PYR allows the users of the VulcanVerse game to earn from their positive efforts, and thoroughly increase user engagement within this dynamic ecosystem. One of the most lucrative Play to Earn possibilities is through staking PYR into various in-game assets. This process essentially soft-locks the tokens in order to enhance gameplay functionality & special privileges.</p>
       
            </div>
       
       <p className='text-left fs-3 text-light'> <span>The 3 most common ways to stake PYR are:</span></p>
       
       <div className="dt text-light text-capitalize">
<ul>
<li>
    <oi>Leveling up Land (where each plot has 7 Levels)</oi>
</li>
<li>
    <oi>PYR staking programs to provide liquidity (when available)</oi>
</li>
<li>
    <oi>Harvesting Seeds in return for Special Items from Vulcan’s Vault.</oi>
</li>
<li>
    <oi>As a reward for these positive actions, users are entitled to receive PYR tokens from the Staking (Reward) pool.</oi>
</li>
</ul>
     
</div>

       <p className='text-left fs-3 text-light'> <span>How do I upgrade my Land?</span></p>
       
<div className="text-light">
    <p>There are two stages to Levelling Up land through staking:</p>
    <ul>
        <li>
            First, the land needs to be SOWN. This is only required once. Land can be sown and sold to enable a buyer to skip the fee before they level it. Once land has been sown, it will never lose the sown status.

        </li>

   
   <li className='my-4'>Secondly, there is a 20-day period before it is open to be leveled up. To upgrade the land you must stake the required PYR inside. If PYR is removed then the plot will drop level instantly.</li>
    </ul>
</div>


        
        <div className="card-gadwel">
            <img src={gadwel} alt=""  className='w-100'/>
        </div>

    <span className='text-center my-5'>How do I calculate my share of the PYR Land staking Pool?</span>
        <p className='text-capitalize text-light'>Vulcan is allocating 10 million of the entire PYR supply into the PYR staking rewards pool, over a period of 48 months. The earnings that you’ll receive from staking will be proportional to the amount of spending/contribution of each user relative to the others. Unless a user continues to participate, its corresponding token rewards will gradually be diluted. Rewards will be paid out monthly into your My Forge account.
Copyrights</p>


        </div>
        

    </div>
  )
}

export default Staking