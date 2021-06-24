// var auth = require('./generateBearer')
import getSignedJWT from "./generateBearer";
// import file from '/home/zadmin/Work/skyflow-dev-exp/creditagency-sample-app/src/credentials.json';

const accessTokens = {};
let globalRoleName = null;

const setAccessToken = (token) => {
    accessTokens[globalRoleName] = token.accessToken;
};


const getAccessToken = async (roleName) => {
    globalRoleName = roleName;
    console.log("role", accessTokens[roleName]);
    let text;
    if (!accessTokens.hasOwnProperty(roleName) || (accessTokens.hasOwnProperty(roleName) && !accessTokens[roleName])) {
        console.log("text entered");
        const data = await fetch('./credentials.json');
        const text = await data.json();
        // reader.readAsText('/home/zadmin/Work/skyflow-dev-exp/creditagency-sample-app/src/credentials.json');
        console.log("text1", text);
        await getSignedJWT(setAccessToken, text);
    }
    // const data = await fetch(file);
    // console.log("data entered", data);
    // const text = await data.json();
    console.log("text", text);
    console.log("access token", accessTokens);
    return accessTokens[roleName];
};

export default getAccessToken;

// (async () => { token = await getAccessToken(""); console.log("token", token) })();
// setTimeout((async () => { token = await getAccessToken(""); console.log("token", token) }), 2000);