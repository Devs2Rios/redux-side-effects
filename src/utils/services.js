import { apiUrl } from './config';

export const getProducts = async () => {
    const response = await fetch(`${apiUrl}/products.json`)
        .then(data => data.json())
        .catch((err) => console.error(err));
    return response;
}

export const getCart = async () => {
    const response = await fetch(`${apiUrl}/cart.json`)
        .then(response => response)
        .then(data => data.json())
        .catch(err => console.error(err));
    return response
}

export const changeCart = async (items) => {
    const response = await fetch(`${apiUrl}/cart.json`,
        {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        .then((data) => data)
        .catch((err) => console.error(err));
    console.log(response)
    return response
}

console.log(getCart());