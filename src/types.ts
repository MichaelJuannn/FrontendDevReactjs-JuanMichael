export type Restaurant = {
    id: string;
    name: string;
    description: string;
    pictureId: string;
    city: string;
    rating: number;
    isOpen?: boolean;
    price: number
}

export type RestaurantResponse = {
    error: boolean;
    message: string;
    count: number;
    restaurants: Restaurant[];
}