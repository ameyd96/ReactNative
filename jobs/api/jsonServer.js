import axios from 'axios';

export default axios.create({
baseURL:'http://9a0ad3b6dc7c.ngrok.io'
});

//every 2 hrs url needs to change


/*Steps to crete server
0. to install jsonServer and ngrok
npm install json-server ngrok

1. https://zetcode.com/javascript/jsonserver/  go to link and follow steps
2. job_server => package.json => scripts => add  "tunnel" :"ngrok http 3000"

3.run "tunnel" :"ngrok http 3000" to get url and copy http to above baseUrl
4. to run jsonServer use cmmand   json-server --watch users.json






*/