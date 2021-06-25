import axios from "axios";
import { call } from "file-loader";
import { VAULT_PARAMS } from "../utils/constants";
import { getBaseUrl } from "../utils/helper";
import Qs from 'qs';

export const bulkGetRecords = (tableName, options, accessToken, callback) => {
  axios
    .get(`/vault/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName, {
      headers: { Authorization: "Bearer " + accessToken },
      params: {
        skyflow_ids: options.skyflowIds,
        redaction: options.redaction,
        tokenization: options.tokenization,
        fields: options.fields,
        offset: options.offset,
        limit: options.limit,
      },
      paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'repeat'});
      },
    })
    .then((res) => {
      console.log("ress", res.data);
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
  console.log("vault id", VAULT_PARAMS.VAULT_ID);
  axios
    .get(
      `/vault/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName + `/${recordId}`,
      {
        headers: { Authorization: "Bearer " + accessToken },
        params: {
          redaction: options.redaction,
          tokenization: options.tokenization,
          fields: options.fields,
        },
      }
    )
    .then((res) => {
      console.log("record", res.data);
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
  callback
) => {
  console.log("vault id", VAULT_PARAMS.VAULT_ID);
  axios
    .put(
      `/vault/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName + `/${recordId}`,
      record,
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    )
    .then((res) => {
      console.log("record", res.data);
      if (callback) {
        callback(res.data);
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};


export const insertRecord = (
    tableName,
    records,
    accessToken,
    callback
  ) => {
    console.log("vault id", VAULT_PARAMS.VAULT_ID);
    axios
      .post(
        `/vault/v1/vaults/${VAULT_PARAMS.VAULT_ID}/` + tableName,
        records,
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      )
      .then((res) => {
        console.log("record", res.data);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  

