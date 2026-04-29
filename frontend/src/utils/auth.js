// Simple auth utility
export const isAuthenticated = () => !!localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};
