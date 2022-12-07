import { theURL } from './Wardrobe';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');


const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', theURL);

axios({
method: 'post',
url: 'https://api.remove.bg/v1.0/removebg',
data: formData,
responseType: 'arraybuffer',
headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'kLJT2Gev5QbZe5epeexwrrKn',
},
encoding: null
})
.then((response) => {
if(response.status != 200) return console.error('Error:', response.status, response.statusText);
fs.writeFileSync("no-bg.png", response.data);
})
.catch((error) => {
    return console.error('Request failed:', error);
});