import React from 'react'

const Button = ({index,setIndex,userData,setUserData}) => {
  return (
    <div>
       <div className="flex gap-5 justify-center mt-15">
        <button
          className="bg-gray-500/30 backdrop-blur-md
          border border-gray-400/30
          text-white font-medium
           px-5  py-2 mb-5 rounded-xl
          hover:bg-gray-400/50 hover:scale-120
          transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          prev
        </button>
        <h4
          className="font-medium
           px-2  py-2 mb-5"
        >
          Page {index}
        </h4>
        <button
          className="bg-gray-500/30 backdrop-blur-md
          border border-gray-400/30
          text-white font-medium
           px-5  py-2 mb-5  rounded-xl
          hover:bg-gray-400/50 hover:scale-120
          transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Button
