import {connect} from 'skyflow-node';
import { ANALYST_PLAIN_TEXT_FIELDS, RECORD,RECORDS } from '../utils/constants';
import getAccessToken from './authentication';
import { bulkGetRecords, getRecord, insertRecord, searchQuery, updateRecord } from './records';


export const getData = async (roleName, callback) => {
    const accessToken = await getAccessToken(roleName);
    bulkGetRecords("persons", {"limit" : '25', "redaction" : "PLAIN_TEXT", "fields" : ANALYST_PLAIN_TEXT_FIELDS}, accessToken, callback);
};

export const queryData = async(query, roleName, callback) => {
    const accessToken = await getAccessToken(roleName);
    searchQuery({'query': query}, accessToken, callback);
};