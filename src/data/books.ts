export interface Book {
    id: string;
    name: string;
    price: string;
    description: string;
    images: string[];
    category: string;
}

import imagesData from './bksbksbksbooks_images.json';

export interface Book {
    id: string;
    name: string;
    price: string;
    description: string;
    images: string[];
    category: string;
}

export const books: Book[] = imagesData.map((item: any) => {
    const firstLine = item.description.split('\n')[0];
    const name = firstLine.length < 60 ? firstLine : item.code;
    const price = item.description.toUpperCase().includes('SOLD') ? 'SOLD' : 'Available via DM';
    return {
        id: item.code,
        name: name,
        price: price,
        description: item.description,
        images: item.urls,
        category: 'PHOTOGRAPHY'
    };
});

export const CONTACT_EMAIL = 'thedaddad2002@gmail.com';
