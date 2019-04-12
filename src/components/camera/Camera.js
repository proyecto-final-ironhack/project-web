import React, { Component } from 'react';
import NavBar from '../misc/NavBar';
import axios from 'axios';
import { cameraService }  from '../../services/';
import Webcam from 'react-webcam';
import CameraIcon from '../../images/camera.png'
import JerryCamera from '../../images/JerryCamera.jpg'



class Camera extends Component{
    
    state = { selectedFile: null,
        message: ''
    }


    setRef = webcam => {
        this.webcam = webcam;
    };
   


    capture = () => {
        let imageB64 = this.webcam.getScreenshot();
        imageB64 = imageB64.split(',')[1];
        cameraService.images(imageB64)
            .then(
                (res) => this.setState({
                    message: res.description
                }),
                (error) => console.error(error),
              
            );


    };
    




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
                
                    <div className="container-home">
                           <button onClick={this.capture}> <img src={CameraIcon} /> </button>
                    </div>  
                <div className= "display-message">
                    {this.state.message !== '' && <div><div className="box bubble">{this.state.message}!</div>
                     <img src={JerryCamera} width="20%"></img></div>}
                </div>

                {/* <input type="file" onChange={this.fileChangedHandler}/>
                <button onClick={this.uploadHandler}>Upload!</button>
                
         */}

            </div>
            </div>
        )
    }

}

export default Camera;