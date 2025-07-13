import React from 'react'
import './boreas.css'
import photo_2 from '../../assets/imgs/boreas_map_4.png'
function Boreas() {

 

  return (
<div className="container">
  <div className="row my-5">

    <div className="col-lg-12 col-sm-12 mx-3">

    <h1 className='text-center text-light'>The Mountains of Boreas</h1>
      <div className="loo text-light">
    <span className='my-5'>Boreas is the  the North Wind and of Winter and this quarter is filled with ice-bound mountains, eyries, crag castles, hilltop towns, sinkholes, and mines. The borders of Boreas are mountain ranges, tall, white-maned, slate grey mountains that reach up to the heavens. It is easy to get lost in the labyrinthine passages running through the mountains and it might be safer to take one of the high passes. In this icy and windy environment, only a few creatures will survive like powerful Minotaurs, mischievous Kobolois, Harpies, Cyclops, and a terrifying Sabre-tooth
    </span>


    <div className="col-lg-12 my-3">

<iframe className='w-100' width="670" height="377" src="https://www.youtube.com/embed/C4W0HJo_OJs" title="Welcome to Boreas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
 
    <h2 className='my-5 '> Landmarks have a zone of influence, providing both nearby players and plots with unique in-game benefits.</h2>
    <p>Such as foraging boosts, or increased combat stats.</p>
      </div>
    </div>

<div className="col-lg-12 col-sm-12">
  <img src={photo_2} alt="" className='w-100' />
</div>

 
  </div>
</div>
  )
}

export default Boreas