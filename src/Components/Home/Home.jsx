import React from 'react'
import './Home.css'

import img_2 from '../../assets/imgs/news-article-img-20.jpg'
import img_3 from '../../assets/imgs/download.webp'
import img_4 from '../../assets/imgs/boreas-img.png'
import img_5 from '../../assets/imgs/hades-img.png'
import img_6 from '../../assets/imgs/notus-img.png'
function Home() {
  return (

    <div className="container">
        <div className="row my-5">


            <div className="bg-body ">
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12  ">

                        <div className="box-bg  d-flex align-items-center    justify-content-center   ">
                         <p className='fs-4 text-light'>BETA OUT NOW <span> OPEN TO ALL MORTALS </span> JOIN US NOW....</p>
                        <div className='card-btn '>
                <button className='btn  border border-1 text-light '>create  my forge account</button>
                <button className='btn  border border-1 text-light mx-1'>download game</button>
         </div>
                        </div>

                    </div>
                    


                   <div className="col-lg-6 col-sm-12 video-home text-center">
                   <iframe className='w-100' src="https://www.youtube.com/embed/u_eNX400QHc" title="VulcanVerse Trailer 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   </div>
                   
                        
                </div>

            </div>



<div className="box-map-bg my-2">
    <h1 className='text-light fw-bolder text-capitalize text-center my-2'>welcome to <span>Vulcan Verse</span></h1>

    <div className="row my-5">
            <div className="col-lg-6 col-sm-12">
                <div className="card-map-bd-detils text-light ">
                <p>VulcanVerse is an open-world massive multiplayer online role-playing game (MMORPG) with lore written by fighting fantasy authors. Inside VulcanVerse, players can truly own assets in the form of Non-Fungible Tokens (NFTs).</p>
                    <b>In VulcanVerse, create your own quests and adventures, forage for NFTs, and battle against other Vulcanites. The native token for VulcanVerse, $PYR, is used as a settlement, staking, and gaming token.</b>
                    <span>We Sleep. We Dream. We Fade into Eternity.</span>
                </div>
                
            </div>

            <div className="col-lg-6 col-sm-12">
                <div className="card-map-bg-photo my-3">
                    <img src={img_2} alt=""  className='w-100'/>
                </div>
            </div>

    </div>

</div>






<div className="bg-faroze">
    <div className="row my-5">

    <div className="col-lg-6 col-sm-12 text-light ">
        <p className='h2'>Land<span> In The Vulcanverse</span>Is Split Into Four <span>Quadrants</span> </p> 
        <div className="pox-bg-faroze  fs-5 my-5">
              <summary>
              Each area will grant landowners its own unique look, designs, and building materials. Rich lore written by award-winning fantasy authors will surround each area, and add intrigue and storyline to the gameplay. Landowners will be able to level up their land, unlocking new assets, buildings, and characters (Vulcanites) to explore the world with.
              </summary>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim at itaque voluptatibus doloremque tempora repellat debitis atque earum. Quaerat fugiat perspiciatis nulla inventore esse sed porro, incidunt placeat earum ipsum!</p>
    <button className='btn w-50 border border-1 text-dark fw-bold text-capitalize bg-warning'>show info</button>
    </div>
    <div className="col-lg-6 col-sm-12 text-light ">
       
       <div className="row my-5">

        <div className="col-lg-6 col-sm-12 my-1 box-div" >
          <img src={img_3} alt="" className='w-100 my-1'  />
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={img_4} alt="" className='w-100 my-1 box-div'  />
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={img_5} alt="" className='w-100 my-1 box-div'  />
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={img_6} alt="" className='w-100 my-1 box-div'  />
        </div>
       </div>
    </div>

    </div>
   
</div>

        
            
<div className="col-12 location my-5" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298965.4674712512!2d-74.3091695806123!3d40.69719334793303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2seg!4v1748733505429!5m2!1sen!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100'></iframe>
                </div>

        
        
        </div>
    </div>
    


  )
}


export default Home