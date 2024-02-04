const API_URL = 'http://localhost:8080';

export const getUsersEndpoint = () => `${API_URL}/user`;
export const getUserEndpoint = (id) => `${API_URL}/user/${id}`;