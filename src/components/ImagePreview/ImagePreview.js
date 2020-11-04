import React , { useState} from 'react';
import { Container } from 'react-bootstrap';
import './imagePreview.css'
const ImagePreview = () => {
   
    const [previewImage, setPreviewImage] = useState([])

    //upload preview images
    const multipleImageHandler = e => {
        // console.log(e.target.files)
        if (e.target.files){
            const fileCollections = Array.from(e.target.files).map(file => URL.createObjectURL(file) )
            setPreviewImage(previewImg => previewImg.concat(fileCollections) )

        }
    }
    //remove preview images
    const removeImageHandler = (id) => {
        const remainingImg = previewImage.filter((item, i) => i !== id )
        setPreviewImage(remainingImg)
    }


   

    return (
        <Container>
            <h3 className="my-5">React Multiple Image Preview and Delete</h3>
            <input type="file" multiple onChange={multipleImageHandler} />
            <div className="img-container">
                    {
                    previewImage.map((img, i) => 
                    
                        <div key={i} className="content">
                            <img className="img-size" src={img} onClick={() => removeImageHandler(i)}/><br/>
                            <button className="btn btn-danger"  onClick={() => removeImageHandler(i)} >Remove Image</button>
                        </div>
                       
                        )
                    }
               
            </div>
        </Container>
    );
};

export default ImagePreview;