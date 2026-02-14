import Navbar from './Navbar'
import Page1Context from './page1Context'

const Section1 = (props) => {
  return (
    <div className="h-screen w-full bg-white p-4">
      <Navbar/>
      <Page1Context users={props.users}/>
    </div>
  )
}

export default Section1
