export const msalConfig = {
    auth: {
      clientId: "1d60cb5b-d392-4a64-a569-3b75b689920a",
      authority: "https://login.microsoftonline.com/2a00728e-f0d0-40b4-a4e8-ce433f3fbca7", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000/",
    },
    // cache: {
    //   cacheLocation: "sessionStorage", // This configures where your cache will be stored
    //   storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    // }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };
  