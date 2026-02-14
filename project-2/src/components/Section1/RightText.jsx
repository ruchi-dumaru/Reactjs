import RightCards from './RightCards';

const RightText = (props) => {
  console.log(props);
  console.log(props.users)
  return (
     <div id='right' className='h-full w-2/3 p-5 overflow-x-auto rounded-5xl; flex flex-nowrap gap-5'>
    {
      props.users.map((elem,idx)=>{
        return <RightCards key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
      })
    }
      
      </div>
  )
}

export default RightText
