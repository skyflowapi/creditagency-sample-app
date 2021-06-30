import jwt from 'jsonwebtoken';
// import fetch from 'node-fetch'

// const fs = require('file-system');
 
const getBearerToken = async (signedJWT, creds) => {
    const body = {
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: signedJWT,
    };
    const tokenURI = creds["tokenURI"];
    const response = await fetch('https://manage.skyflowapis.dev/v1/auth/sa/oauth/token', {
        method: "post",
        body: JSON.stringify(body),
        mode: 'cors'
        // headers: { "Content-Type": "text/plain"},
    });
    return response.json();
};

const getSignedJWT = async (creds, callback) => {
    const claims = {
        iss: creds["clientID"],
        key: creds["keyID"],
        aud: creds["tokenURI"],
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        sub: creds["clientID"],
    };
    const token = jwt.sign(claims, creds["privateKey"], { algorithm: "RS256" });
    return getBearerToken(token, creds).then(data => {
        callback(data);
    });
};

export default getSignedJWT;