import properties from '../utils/properties';


export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'production' ? `https://${properties.ORG_NAME}.${properites.ACCOUNT_NAME}.vault.skyflowapis.dev/v1/vaults/${properties.VAULT_ID}/` : 
  `/vault/v1/vaults/${properties.VAULT_ID}/`;
};

export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}