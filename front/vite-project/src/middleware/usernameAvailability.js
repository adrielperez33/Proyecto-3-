import axios from 'axios';

const checkUsernameAvailability = async (username) => {
  try {
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data;

    const isUsernameTaken = users.some(user => user.username === username);
    return !isUsernameTaken; 
  } catch (error) {
    console.error('Error checking username availability:', error);
    return false;
  }
};

export default checkUsernameAvailability;
