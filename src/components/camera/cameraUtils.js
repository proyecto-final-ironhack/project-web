const video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;
var videoSelect = document.querySelector('select#videoSource');


const button = document.querySelector('button');

button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  
  canvas.toBlob(function(blob) {
    var newImg = document.createElement('img'),
        url = URL.createObjectURL(blob);
  
    newImg.onload = function() {
      // no longer need to read the blob so it's revoked
      URL.revokeObjectURL(url);
    };
  
    newImg.src = url;
    document.body.appendChild(newImg);
  }, "image/jpg");


};



navigator.mediaDevices.enumerateDevices()
  .then(gotDevices).then(getStream).catch(handleError);

videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || 'camera ' +
        (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Found one other kind of source/device: ', deviceInfo);
    }
  }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  var constraints = {
    audio: false,
    video: {
      deviceId: {exact: videoSelect.value}
    }
  };  

  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
}

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}
