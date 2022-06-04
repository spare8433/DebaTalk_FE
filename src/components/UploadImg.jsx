import React, { useState } from 'react'

const UploadImg = () => {
  const [imageFile,setImageFile] = useState([])
  // const [previewImage,setPreviewImage] = useState('/img/default_user.png')
  const [isDisableSubmit,setIsDisableSubmit] = useState(true)


  return (
    <div>UploadImg</div>
  )
}

export default UploadImg