// var auth = require('./generateBearer')
import getSignedJWT from "./generateBearer";
// import file from '/home/zadmin/Work/skyflow-dev-exp/creditagency-sample-app/src/credentials.json';
import userJson from "../credentials/credentials_user.json";
import analystJson from "../credentials/credentials_analyst.json";

const accessTokens = {};
let globalRoleName = null;

const setAccessToken = (token) => {
    accessTokens[globalRoleName] = token.accessToken;
};


const getAccessToken = async (roleName) => {
    globalRoleName = roleName;
    let text;
    if (!accessTokens.hasOwnProperty(roleName) || (accessTokens.hasOwnProperty(roleName) && !accessTokens[roleName])) {
        // const data = roleName === 'user' ? await fetch('./credentials.json') : await fetch('./credentials_analyst.json');
        // const text = await analystJson.json();
        await getSignedJWT(roleName === 'user' ? userJson: analystJson, setAccessToken);
    }
    return accessTokens[roleName];
};

export default getAccessToken;
