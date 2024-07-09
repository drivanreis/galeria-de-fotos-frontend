// ../app/frontend/src/utils/env.ts

const getBackendURL = (): string => {
  if (import.meta.env.VITE_BACKEND_URL === undefined || import.meta.env.VITE_BACKEND_URL === '') {
    return 'http://localhost:3001';
  } else {
    return import.meta.env.VITE_BACKEND_URL;
  }
};

export default getBackendURL;
