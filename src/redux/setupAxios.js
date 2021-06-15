export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
      (config) => {
        const authToken = localStorage.getItem("ndovuToken");
  
        if (authToken && authToken !== null) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
  
        return config;
      },
      (err) => Promise.reject(err)
    );
  }
  