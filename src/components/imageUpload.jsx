import { useState } from "react";

function ImageUpload() {
    const [image, setImage] = useState('')
    function handleImage(e) {
        setImage(e.target.files[0])
    }
    return (
        <div>
            <input type='file' name='file' onChange={handleImage} />
            <button className='bg-red-600 text-lg'>Submit</button>
        </div>
    )
}

export default ImageUpload