import React, { Component } from 'react';
import { cameraService }  from '../../services/';
import NavBar from '../misc/NavBar';
import Webcam from 'react-webcam';

class FindObject extends Component{
    
    
    state = {
        message: '',
        objectToFind: '',
        clicked: false
    }

    componentDidMount() {
        this.randomObject();
    }

    setRef = webcam => {
        this.webcam = webcam;
    };
   
    capture = () => {
        let imageB64 = this.webcam.getScreenshot();
        imageB64 = imageB64.split(',')[1];
        cameraService.images(imageB64)
            .then(
                (res) => (this.setState({
                    message: res.description,
                    clicked: true
                }),
                console.log(res.description),
                this.checkMatch()),
                (error) => console.error(error)
                
            );
    };

    checkMatch = () => {
        if (this.state.message === this.state.objectToFind) {
            this.randomObject();
        }
    }

    randomObject = () => {
        const arrayNames = ['Dog', 'Glasses', 'Bottle']
        const findRandom = arrayNames[Math.floor(Math.random() * arrayNames.length)];

        this.setState({
         objectToFind: findRandom
     })
    };

   

    render(){

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user" // para la camara trasera poner aqui { exact: "environment" }
        };
        
        

        return(
            <div>
                <NavBar />
            <div id="container">

                <Webcam
                audio={false}
                height={250}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={290}
                videoConstraints={videoConstraints}
                />

                <button onClick={this.capture} className = "btn btn-primary btn-lg btn-block">Take a photo!</button>
                <button onClick={this.randomObject}className="btn btn-secondary btn-lg btn-block">Skip</button>
                <div className= "display-message">
                    <p>Find this:</p>
                    <p>{this.state.objectToFind}</p>
                </div>  

                <div>
                    { this.state.message === this.state.objectToFind && this.state.clicked && <p>It' a match!</p> }
                    { this.state.message !== this.state.objectToFind && this.state.clicked && <p>Try again!</p>}
                </div>
            </div>
            </div>
        )
    }

}

export default FindObject;