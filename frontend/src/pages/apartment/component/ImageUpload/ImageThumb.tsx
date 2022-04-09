import React from 'react'

interface Props {
  path?: string
}

const ImageThumb: React.FC<Props> = ({ path }) => (
  <div className=" flex flex-col justify-center items-center text-center w-300px h-232px border rounded-lg overflow-hidden  mb-8">
    <img src={path} alt="" className=" w-full h-full object-cover" />
  </div>
)

export default ImageThumb
