import axios from "axios";
import { call } from "file-loader";
import { VAULT_PARAMS } from "../utils/constants";
import { getBaseUrl } from "../utils/helper";
import Qs from "qs";

export const bulkGetRecords = (tableName, options, accessToken, callback) => {
  axios
    .get(`https://sb.area51.vault.skyflowapis.dev/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName, {
      headers: { Authorization: "Bearer " + accessToken },
      params: {
        skyflow_ids: options.skyflowIds,
        redaction: options.redaction,
        tokenization: options.tokenization,
        fields: options.fields,
        offset: options.offset,
        limit: options.limit,
      },
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: "repeat" });
      },
    })
    .then((res) => {
      if (callback) {
        callback(res.data);
      }
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const getRecord = (
  tableName,
  recordId,
  options = {},
  accessToken,
  callback
) => {
  axios
    .get(
      `https://sb.area51.vault.skyflowapis.dev/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName + `/${recordId}`,
      {
        headers: { Authorization: "Bearer " + accessToken },
        params: {
          redaction: options.redaction,
          tokenization: options.tokenization,
          fields: options.fields,
        },
        paramsSerializer: function(params) {
          return Qs.stringify(params, { arrayFormat: "repeat" });
        },
      }
    )
    .then((res) => {
      if (callback) {
        callback(res.data);
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const updateRecord = (
  tableName,
  recordId,
  record,
  accessToken,
  callback,
  errorCallback
) => {
  axios
    .put(
      `https://sb.area51.vault.skyflowapis.dev/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName + `/${recordId}`,
      record,
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    )
    .then((res) => {
      if (callback) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback) {
        errorCallback(err);
      }
      console.log("error", err);
    });
};

export const insertRecord = (tableName, records, accessToken, callback) => {
  axios
    .post(`https://sb.area51.vault.skyflowapis.dev/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName, records, {
      headers: { Authorization: "Bearer " + accessToken },
    })
    .then((res) => {
      if (callback) {
        callback(res.data);
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const searchQuery = (query, accessToken, callback) => {
  axios
    .post(`https://sb.area51.vault.skyflowapis.dev/v1/vaults/${VAULT_PARAMS.VAULT_ID}/query`, query, {
      headers: { Authorization: "Bearer " + accessToken },
    })
    .then((res) => {
      if (callback) {
        callback(res.data);
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};
//     deleteRecord(tableName, recordId, callback) {
//         return this.callApi(
//             ({ tableName, recordId }) => {
//                 return axios.delete(this.vaultUrl + '/' + tableName + '/' + recordId
//                     , {
//                         headers: this.defaultHeaders
//                     })
//                     .then(res => {
//                         if (callback) {
//                             callback(res.data);
//                         }
//                         return res.data;
//                     })
//                     .catch(err => err && err.response && err.response.data)
//             }, { tableName, recordId })
//     },

//     bulkDeleteRecords(tableName,skyflowIds = [], callback) {
//         return this.callApi(
//             ({ tableName,skyflowIds }) => {
//                 return axios.delete(this.vaultUrl + '/' + tableName,
//                     {
//                         headers: this.defaultHeaders,
//                         params : {
//                             skyflow_ids : skyflowIds,
//                         }
//                     })
//                     .then(res => {
//                         if (callback) {
//                             callback(res.data);
//                         }
//                         return res.data;
//                     })
//                     .catch(err => err && err.response && err.response.data)
//             }, { tableName,skyflowIds })
//     }

// }
