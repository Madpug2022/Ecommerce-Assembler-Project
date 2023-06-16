import { Product } from "../interfaces/product";
import { uuid } from 'uuidv4';

export let featuredProducts: Product[] = [
    {
        productId: '',
        name: 'God of War: Ragnarok',
        price: 69.99,
        img: '.resources/featured-p/0.jpg'
    },
    {
        productId: '',
        name: 'Horizon: Forbiden West',
        price: 69.99,
        img: '.resources/featured-p/1.jpg'
    },
    {
        productId: '',
        name: 'Resident Evil 4: Remake',
        price: 69.99,
        img: '.resources/featured-p/2.jpg'
    },
    {
        productId: '',
        name: 'Zelda: Tears of the Kingdom',
        price: 69.99,
        img: '.resources/featured-p/4.jpg'
    },
    {
        productId: '',
        name: 'Wireless controller for Xbox Robot Blue',
        price: 49.99,
        img: '.resources/featured-p/5.jpg'
    },
    {
        productId: '',
        name: 'Razer Kraken Kitty Edition Headset',
        price: 158.99,
        img: '.resources/featured-p/6.jpg'
    },
    {
        productId: '',
        name: 'HyperX Headset',
        price: 86.99,
        img: '.resources/featured-p/7.jpg'
    },
    {
        productId: '',
        name: 'Mouse Razer Kraken',
        price: 24.99,
        img: '.resources/featured-p/8.jpg'
    },
];

featuredProducts.forEach(product => {
    let key = uuid();
    product.productId = key;
})
