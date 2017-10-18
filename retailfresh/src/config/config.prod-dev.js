//Production Development Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.retailfresh.fpad.io';
const websiteDomain = 'https://retailfresh.fpad.io:8080';
const metadata = `
eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vcmV0YWlsZnJlc2guZnBhZC5pbzo4MDgwL29hdXRoMi9yZWRpcmVjdC5odG1sIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoidXJuOmlldGY6cGFyYW1zOm9hdXRoOmNsaWVudC1hc3NlcnRpb24tdHlwZTpqd3QtYmVhcmVyIiwiZ3JhbnRfdHlwZXMiOlsiaW1wbGljaXQiXSwicmVzcG9uc2VfdHlwZXMiOlsidG9rZW4iLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiUmV0YWlsRnJlc2giLCJjbGllbnRfdXJpIjoiaHR0cHM6Ly9mcGFkLmlvLyIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwic29mdHdhcmVfaWQiOiIxNzMwZjJiNi1kNWZhLTRmMjgtOTRhNC1mNTMxYjMwYzljMWMiLCJyZWdpc3RyYXRpb25fcHJvdmlkZXIiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbSIsImlhdCI6MTUwODI5NDIyNX0.t-vQjoAM_dgxVP3gBHM9szjLUTt7O2rSI3BmfnVjhUXo_2-1Cj5VZr8xVf388nPc3y2urMElQH4QknRbBtsYIMkIhFxML45ekQU7b7kHSwSSGZYtBVSu7J46dr2V4uT7onS1imyWGhpnP3c75KLT8SpuJEoV1aONkSLkUFqUHMw
`.trim()

const defaultNewConnectionURL = 'https://api.distributingexcellence.fpad.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}
