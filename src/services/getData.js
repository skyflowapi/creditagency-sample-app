import {connect} from 'skyflow-node';
import { RECORD,RECORDS } from '../utils/constants';
import getAccessToken from './authentication';
import { bulkGetRecords, getRecord, insertRecord, updateRecord } from './records';


export const getData = async (callback) => {
    const accessToken = await getAccessToken("user");
    bulkGetRecords("persons", {"limit" : '25',"redaction" : 'PLAIN_TEXT'}, accessToken, callback);
    getRecord("persons", "5df976bf-41c0-4bcf-afbb-256fb5d22e0e", {}, accessToken, callback);
    updateRecord("persons", "5df976bf-41c0-4bcf-afbb-256fb5d22e0e", RECORD, accessToken, callback);
    insertRecord("persons", RECORDS, accessToken, callback);
};