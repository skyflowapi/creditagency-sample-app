import {connect} from 'skyflow-node';
import { ANALYST_PLAIN_TEXT_FIELDS, ANALYST_REDACTED_TEXT_FIELDS, RECORD,RECORDS } from '../utils/constants';
import getAccessToken from './authentication';
import { bulkGetRecords, getRecord, insertRecord, searchQuery, updateRecord } from './records';


export const getData = async (roleName, callback) => {
    const accessToken = await getAccessToken(roleName);
    bulkGetRecords("persons", {"limit" : '25',"redaction": "PLAIN_TEXT", "fields" : ANALYST_PLAIN_TEXT_FIELDS}, accessToken, callback);
};

export const queryData = async(query, roleName, callback) => {
    const accessToken = await getAccessToken(roleName);
    searchQuery({'query': query}, accessToken, callback);
};

export const revealData = async(key, recordId, roleName, callback) => {
    const accessToken = await getAccessToken(roleName);
    getRecord("persons", recordId, {"redaction": "PLAIN_TEXT", "fields" : [key]}, accessToken, callback);
};

export const updateRecordData = async(recordId, record, roleName, callback, errorCallback) => {
    const accessToken = await getAccessToken(roleName);
    updateRecord("persons", recordId, record, accessToken, callback, errorCallback);
};