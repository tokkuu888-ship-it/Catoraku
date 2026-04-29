// Simple auth utility
// Role constants
export const ROLES = {
  DEAN: 'DEAN',
  COORDINATOR: 'COORDINATOR',
  TECH: 'TECH',
  FACULTY: 'FACULTY',
  STUDENT: 'STUDENT',
};

export const isAuthenticated = () => !!localStorage.getItem('token');
export function getUserRole() {
  return localStorage.getItem('role');
}
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

// Role check helper
export function hasRole(role) {
  return getUserRole() === role;
}

// Permission matrix
export const PERMISSIONS = {
  APPROVE_SCHEDULE: [ROLES.DEAN],
  CREATE_SCHEDULE: [ROLES.COORDINATOR],
  SUBMIT_REPORT: [ROLES.STUDENT],
  REVIEW_REPORT: [ROLES.COORDINATOR, ROLES.FACULTY],
  MANAGE_SESSION: [ROLES.COORDINATOR, ROLES.TECH],
};

export function can(permission) {
  const role = getUserRole();
  return PERMISSIONS[permission]?.includes(role);
}
