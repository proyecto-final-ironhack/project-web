import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { faceService }  from '../../services/';
import Webcam from 'react-webcam';

class Home extends Component{
    

    state = {
        expression: 'hola',
        clicked: false
     }

    setRef = webcam => {
        this.webcam = webcam;
    };

    
    
    captureFace = () => {
        let imageB64 = this.webcam.getScreenshot();
        imageB64 = imageB64.split(',')[1];
        faceService.images(imageB64)
            .then(
                (res) => (this.setState({
                    expression: res.joyLikelihood,
                    clicked: true
                }),                
                console.log(res.joyLikelihood)),
                (error) => console.error(error)
                
            );
    };
    
    grantAccess = () => {
        if (this.state.expression === "VERY_LIKELY"){
           return <Redirect to="/menu"  />
        }
       }
   

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
            <div>
            { this.state.expression === "VERY_LIKELY" && <Redirect to="/menu"  /> }
            { this.state.expression !== "VERY_LIKELY" && this.state.clicked && <p>Come on! I want to see your smile!</p>}
            </div>
            </div>
        )
    }
}

export default Home;