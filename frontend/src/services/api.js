// Simulated API service for login and seminar actions
export const login = async (email, password, role) => {
  // Simulate authentication
  if (email && password) {
    return { success: true, token: 'mock-token', role };
  }
  return { success: false, message: 'Invalid credentials' };
};

export const createSeminar = async (seminarData) => {
  // Simulate seminar creation
  return { success: true, seminar: seminarData };
};

// Add more API functions as needed
