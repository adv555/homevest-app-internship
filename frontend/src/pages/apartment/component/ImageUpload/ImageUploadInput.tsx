/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import clsx from 'clsx'

import { ReactComponent as ImagesLoad } from 'assets/images/images-load.svg'

interface Props {
  size?: string
  onImageUpload?: any
  inputFile?: any
}

const ImageUploadInput: React.FC<Props> = ({ size, onImageUpload, inputFile }) => {
  return (
    <>
      <div
        className={clsx(
          ' flex flex-col justify-center items-center text-center border border-dashed border-grey border-box rounded-lg mb-8 ',
          size,
        )}
      >
        <label htmlFor="file" ref={inputFile}>
          <ImagesLoad className="w-80 h-60px cursor-pointer" />
        </label>
        <input
          className=" hidden"
          id="file"
          name="images"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onImageUpload}
          ref={inputFile}
          multiple
        />
        <div>
          <p className="text-center text-black font-semibold text-body leading-body mt-6">
            Drag or click to browse photos of your property (up to 6 photos)
          </p>
        </div>
      </div>
    </>
  )
}

export default ImageUploadInput
