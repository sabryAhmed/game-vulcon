import React from 'react'
import './Vulcon.css'


import gun_1 from '../../assets/imgs/vulc_stats_attack.png'
import gun_2 from '../../assets/imgs/vulc_stats_defense.png'
import gun_3 from '../../assets/imgs/vulc_stats_espionage.png'
import gun_4 from '../../assets/imgs/vulc_stats_forage.png'



import img_3 from '../../assets/imgs/download.webp'
import img_4 from '../../assets/imgs/boreas-img.png'
import img_5 from '../../assets/imgs/hades-img.png'
import img_6 from '../../assets/imgs/notus-img.png'

import {prodect_ai} from './VulconJSON'

function Brodect() {

  return (

<div className="container">
    <div className="row my-5    ">

<div className="prodects-box text-light my-5" >
    <div className="col-lg-12">
        <h1 className='text-center my-5 text-capitalize fs-1'><span>Vulcanites</span></h1>
        <p className='text-center my-4'>Vulcanites are the varied beasts that inhabit VulcanVerse. From minotaurs to dryads, demons to sabretooth tigers and mammoths, VulcanVerse’s lore tells the story of these creatures.</p>
    <p className='text-center my-4'>Each belonging to their own quadrant - they will do battle for you, find rare and interesting objects and artifacts, practice espionage in the hope of uncovering blueprints for your build and defend your plot from opposing Vulcanites who are attempting to spy on your plots.</p>
   <strong className='text-center my-4'>They can also be used in other Vulcan Forged ecosystem games and dApps, such as Forge Arena and Berserk.</strong>

    </div>
    
</div>


<div className="bord">
    <div className="row">

 <div className="col-lg-3 col-md-6 col-sm-12">
<img src={img_3} alt=""  className='w-100'/>
</div>
        
 <div className="col-lg-3 col-md-6 col-sm-12">
<img src={img_4} alt=""  className='w-100'/>
</div>
        
 <div className="col-lg-3 col-md-6 col-sm-12">
<img src={img_5} alt=""  className='w-100'/>
</div>
        
 <div className="col-lg-3 col-md-6 col-sm-12">
<img src={img_6} alt=""  className='w-100'/>
</div>
        
    </div>
</div>



        <div className="prodect .container my-5">
         

            <div className="row g-5">
{prodect_ai.map(value=>{
    return (

            <div className="card-prodect  col-lg-3 col-md-6 col-sm-12 " key={value.id}>
                <div className="box">
                    <div className='card-img'>
                        <img src={value.image} alt="" />

                    </div>

                    
                    <div className='sall'>
                        <div className="star_1">
                           <strong>statistics</strong>
                           <p> <img src={gun_1} alt="" /> 1000 / 2000</p>
                           <p> <img src={gun_2} alt="" /> 3000/4000</p>
                           <p> <img src={gun_3} alt="" /> 5000/6000</p>
                           <p> <img src={gun_4} alt="" /> 7000/8000</p>
                          
                        <p >{value.name} </p>
                        
                      

                          
                        </div>
                      
                    </div>
                </div>

                
                
            </div>
    )
})}

            </div>
        </div>
    </div>
</div>




   

        
  )
}










export default Brodect