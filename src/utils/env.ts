// ../app/frontend/src/utils/env.ts

const getBackendURL = (): string => {
  if (import.meta.env.VITE_BACKEND_URL === undefined || import.meta.env.VITE_BACKEND_URL === '') {
    // return 'http://localhost:3001';
    // return 'http://189.71.214.150:3001';
    // return 'https://9047-189-71-214-150.ngrok-free.app/'
    return 'https://orgiy71zxj.execute-api.us-east-1.amazonaws.com/';
  } else {
    return import.meta.env.VITE_BACKEND_URL;
  }
};

export default getBackendURL;
