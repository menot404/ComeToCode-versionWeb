// Simulate API calls for offline/online mode
export const fetchPatients = async () => {
    // In a real app, this would be an actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          // Mock data
        ]);
      }, 500);
    });
  };
  
  export const savePatient = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, id: 'PAT' + Date.now() });
      }, 700);
    });
  };
  
  export const authenticate = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'medecin@sanba.bf' && password === 'password') {
          resolve({
            id: 'med1',
            name: 'Dr. Aminata Ouédraogo',
            role: 'doctor',
            speciality: 'Médecin Généraliste'
          });
        } else {
          resolve(null);
        }
      }, 600);
    });
  };