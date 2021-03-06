import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Hal',
            email: 'you.ha@northeastern.edu',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Mina',
            email: 'wang.mingx@northeastern.edu',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            //_id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',  // 679px * 829px
            price: 120,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            //_id: '2',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 30,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            //_id: '3',
            name: 'Lacoste Free Shirt',
            slug: 'locoste free shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 13,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            //_id: '4',
            name: 'Nike Slim Pant',
            slug: 'nike-slim pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            //_id: '5',
            name: 'Puma Slim Pant',
            slug: 'puma-slim pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 15,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            //_id: '6',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 13,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
    ]
}
export default data;