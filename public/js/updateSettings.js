import axios from 'axios';

import { showAlert } from './alerts';

/**
 *
 * @param {data that will update} data
 * @param {password or data} type
 */
export const updateSettings = async (data, type) => {
    const url =
        type === 'password'
            ? '/api/v1/users/updateMyPassword'
            : '/api/v1/users/updateMe';
    try {
        const res = await axios({
            method: 'PATCH',
            url,
            data,
        });

        if (res.data.status === 'success') {
            showAlert('success', `${type.toUpperCase()} updated successfully!`);
        }
    } catch (error) {
        showAlert('error', error.response.data.message);
    }
};
