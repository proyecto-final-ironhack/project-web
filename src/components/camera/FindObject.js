import React, { Component } from 'react';
import { cameraService }  from '../../services/';
import NavBar from '../misc/NavBar';
import Webcam from 'react-webcam';
import CameraIcon from '../../images/camera.png'
import RightArrow from '../../images/right-chevron.png'
import JerryCamera from '../../images/JerryCamera.jpg'

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
                console.log(res.description)),
 
                (error) => console.error(error)
                
            );
    };


    randomObject = () => {
        const arrayNames = ['Dog', 'Glasses', 'Bottle', 'Ball', 'Gadget', 'Face']
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
            <div className="camera">
                <Webcam
                audio={false}
                height={250}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={290}
                videoConstraints={videoConstraints}
                />
            </div>
            <div className="container-find-object">
                           <button onClick={this.capture}> <img src={CameraIcon} /> </button>
             
                <button onClick={this.randomObject}className="kids-font next">Next<img src={RightArrow}/></button>
            </div>    
                
                    <div className= "box bubble">
                        Find this: {this.state.objectToFind}
                    </div>  
                    <div className="Jerry-veredict">
                        <img src={JerryCamera} width="20%"></img>
                        { this.state.message === this.state.objectToFind && this.state.clicked && <div className="box-jerry-match jerry">It' a match!</div> }
                        { this.state.message !== this.state.objectToFind && this.state.clicked && <div className="box-jerry-incorrect jerry">Try again!</div>}
                    </div>
                
            </div>
            </div>
        )
    }

}

export default FindObject;