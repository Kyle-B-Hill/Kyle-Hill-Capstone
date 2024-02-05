const API_URL = 'http://localhost:8080';

export const getUsersEndpoint = () => `${API_URL}/user`;
export const getUserEndpoint = (id) => `${API_URL}/user/${id}`;
export const postUserLogin = () => `${API_URL}/user/login`;
export const getUserMatches = (id) => `${API_URL}/palominos/${id}`;
export const getUserEnjoysEndpoint = (id) => `${API_URL}/user/${id}/enjoys`;
export const getUserEnjoysMatches = () => `${API_URL}/enjoys/connect`;
export const getFindMatchesEndpoints = (Activity) => `${API_URL}/enjoys/${Activity}`;  
