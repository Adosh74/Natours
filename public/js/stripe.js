/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alerts';

const stripe = Stripe(
    'pk_test_51NqQYYG5jSROj21bkxiFXThUfUAIIQwjzR3wvE8tOqyEXwB9cTA3l20tDEiKGey8H21Ah966zaieM8CKwkKg8lxe00FmFY71Ji',
);

export const bookTour = async (tourId) => {
    try {
        // 1) Get checkout session from API
        const session = await axios({
            method: 'GET',
            url: `http://localhost:3001/api/v1/bookings/checkout-session/${tourId}`,
        });
        console.log(session);
        // 2) Create checkout form + charge credit card
        stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });

        // 3) Render the form to the screen
    } catch (error) {
        console.log(error);
        showAlert('error', error);
    }
};
