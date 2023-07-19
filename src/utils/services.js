import { apiUrl } from './config';

export const getProducts = async () => {
    const response = await fetch(`${apiUrl}/products.json`)
        .then(data => data.json())
        .catch((err) => console.error(err));
    return response;
}

export const getCart = async () => {
    const response = await fetch(`${apiUrl}/cart.json`)
        .then(data => data.json())
        .catch(err => console.error(err));
    return response
}

export const replaceCart = async (items) => {
    const response = await fetch(`${apiUrl}/cart.json`,
        {
            method: 'PUT',
            body: JSON.stringify({ items }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then((data) => data.json())
        .catch((err) => console.error(err));
    return response
}
