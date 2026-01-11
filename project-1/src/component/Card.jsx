import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

          <div className="top">
            <img class="logo" src={props.img} alt="" />
            <button className="save">Save<Bookmark size={12}/></button>
          </div>
           
           <div className="mid">
           <h3>{props.company} <span>{props.time}</span> </h3>
           <h2>{props.title}</h2>
        
            <button className="time">{props.time}</button>

             <button className="time">{props.level}</button>
           </div>
         
       
           <div className="end">
            
            <div className="hr">
           
              <h4>{props.pay}</h4>
              <p>{props.location}</p>
            </div>

            <button className="apply">Apply now</button>

           </div>


      </div>
  )
}

export default Card
