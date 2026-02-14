import RightCardContent from "./RightCardContent"


const RightCards = (props) => {
  return (
    <div className='shrink-0 overflow-hidden relative h-full w-150 rounded-4xl' >
      <img className='h-full w-full object-cover'src={props.img} alt=""/>
    <RightCardContent id={props.id}  color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCards
