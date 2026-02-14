

function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'> 
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold '>{props.id+1}</h2>
        <div>
          <p className='text-shadow-2xs text-4xl leading-relax text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quasi neque non laudantium sapiente quidem?</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' font-semibold text-3xl px-8 py-3  rounded-full my-5'>{props.tag}</button >

            <button style={{backgroundColor:props.color}} className=' font-semibold px-4 py-3 text-3xl rounded-full my-5'>
             <i  class="ri-arrow-right-line"></i>
            </button>
            
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
