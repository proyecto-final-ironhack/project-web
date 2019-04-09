import http from './base-http-service';

const images = (photo) => http.post('/images', {photo})
    .then(response => {
        return response.data
        
})



export default { images };