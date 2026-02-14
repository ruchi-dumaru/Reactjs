import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const App = () => {
  const users=[
    {
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'royalblue',
      tag:'Senior'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'pink',
      tag:'Junior'
    },

    {
      img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'lightgreen',
      tag:'Senior'
    }, 

    {
      img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      tag:'mid-level',
      color:'white'
    }, 


    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmt8ZW58MHx8MHx8fDA%3D',
      tag:'intern',
      color:'orange'
    }, 

  ]
  return (
    <div>
      <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App
