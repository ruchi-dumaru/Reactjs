import LeftText from "./LeftText"
import RightText from "./RightText"

const page1Context = (props) => {
  return (
    <div className="h-[90vh] flex justify-between gap-10 px-14 pb-14 pt-5">
       <LeftText/>
       <RightText users={props.users}/>
    </div>
  )
}

export default page1Context  
