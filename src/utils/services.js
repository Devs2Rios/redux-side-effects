import { apiUrl } from './config';

export const getProducts = async () => {
    return await fetch(`${apiUrl}products.json`)
        .then(data => data.json());
}

export const getCart = async () => {
    return await fetch(`${apiUrl}cart.json`)
        .then(data => data.json());
}

export const replaceCart = async (items) => {
    return await fetch(`${apiUrl}cart.json`,
        {
            method: 'PUT',
            body: JSON.stringify({ items }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then((data) => data.json())
}
