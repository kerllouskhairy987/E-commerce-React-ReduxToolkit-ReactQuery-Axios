export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    thumbnail: string;
    discountPercentage: number;
    rating?: number;
    quantity: number
}