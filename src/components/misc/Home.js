import React, { Component } from 'react';
import { faceService }  from '../../services/';
import Webcam from 'react-webcam';

class Home extends Component{
    

    setRef = webcam => {
        this.webcam = webcam;
    };

    captureFace = () => {
        let imageB64 = this.webcam.getScreenshot();
        imageB64 = imageB64.split(',')[1];
        faceService.images(imageB64)
            .then(
                (res) => console.log(res.joyLikelihood),
                (error) => console.error(error)
                
            );
    };
    
    
    render(){

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user" // para la camara trasera poner aqui { exact: "environment" }
        };

        return(
            <div>
            <p>Give me a smile if you want to play!</p>
              <Webcam
                audio={false}
                height={250}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={290}
                videoConstraints={videoConstraints}
                />

            <button onClick={this.captureFace} className = "btn btn-primary btn-lg btn-block">Give it a try!</button>
            </div>
        )
    }
}

export default Home;