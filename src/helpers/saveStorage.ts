const saveStorage = {
  setToken: (token: string) => localStorage.setItem('token', token),
  setID: (userID: string) => localStorage.setItem('user_id', userID),
  getToken: () => localStorage.getItem('token'),
  getID: () => localStorage.getItem('user_id'),
};

export default saveStorage;