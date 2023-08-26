/* eslint-disable */

const login = async (email, password) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3001/api/v1/users/login',
            data: {
                email: email,
                password: password,
            },
        });
        console.log(res);
    } catch (error) {
        console.log(error.response.data);
    }
};

document.querySelector('.form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
});

// import axios from 'axios';
// import { showAlert } from './alerts';

// export const login = async (email, password) => {
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: '/api/v1/users/login',
//       data: {
//         email,
//         password
//       }
//     });

//     if (res.data.status === 'success') {
//       showAlert('success', 'Logged in successfully!');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//   }
// };

// export const logout = async () => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url: '/api/v1/users/logout'
//     });
//     if ((res.data.status = 'success')) location.reload(true);
//   } catch (err) {
//     console.log(err.response);
//     showAlert('error', 'Error logging out! Try again.');
//   }
// };
