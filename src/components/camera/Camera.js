import React, { Component } from 'react';
import axios from 'axios';
import { cameraService }  from '../../services/';
import Webcam from 'react-webcam';




class Camera extends Component{
    
    setRef = webcam => {
        this.webcam = webcam;
    };
   

    capture = () => {
        let imageB64 = this.webcam.getScreenshot();
        imageB64 = imageB64.split(',')[1];
        cameraService.images(imageB64)
            .then(
                (description) => console.log(description),
                (error) => console.error(error)
            );
    };
    

    state = { selectedFile: null }

    fileChangedHandler = event => {
      this.setState({ selectedFile: event.target.files[0] })
    }


    uploadHandler = () => {
        const formData = new FormData()
        formData.append(
          'myFile',
          this.state.selectedFile,
          this.state.selectedFile.name
        )
        axios.post('http://localhost:3001/images', formData)
       
    }

    
    render(){

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user" // para la camara trasera poner aqui { exact: "environment" }
        };
    
        return(
            <div id="container">

                <Webcam
                audio={false}
                height={250}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={290}
                videoConstraints={videoConstraints}
                />

                <button onClick={this.capture} className = "btn btn-primary btn-lg btn-block">Make your photo!</button>

                <input type="file" onChange={this.fileChangedHandler}/>
                <button onClick={this.uploadHandler}>Upload!</button>
                
        

            </div>
        )
    }

}

export default Camera;