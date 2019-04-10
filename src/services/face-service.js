import http from './base-http-service';

const images = (photo) => http.post('/', {photo})
    .then(response => {
        return response.data
        
})



export default { images };