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
    let text;
    if (!accessTokens.hasOwnProperty(roleName) || (accessTokens.hasOwnProperty(roleName) && !accessTokens[roleName])) {
        const data = await fetch('./credentials.json');
        const text = await data.json();
        await getSignedJWT(text, setAccessToken);
    }
    return accessTokens[roleName];
};

export default getAccessToken;
