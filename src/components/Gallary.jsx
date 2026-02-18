import React from 'react'

const Gallary = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
            <div className="h-40 w-52 ">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-semibold">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Gallary
