import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    available: boolean;
    category: Category;
    price: bigint;
}
export interface RestaurantInfo {
    hours: string;
    instagram: string;
    name: string;
    whatsapp: string;
    email: string;
    facebook: string;
    address: string;
    phone: string;
}
export interface Review {
    customerName: string;
    date: string;
    comment: string;
    rating: bigint;
}
export enum Category {
    chaat = "chaat",
    soup = "soup",
    sandwich = "sandwich",
    fastFood = "fastFood",
    friesSnacks = "friesSnacks",
    tandoori = "tandoori"
}
export interface backendInterface {
    getMenu(): Promise<Array<MenuItem>>;
    getMenuByCategory(category: Category): Promise<Array<MenuItem>>;
    getRestaurantInfo(): Promise<RestaurantInfo>;
    getReviews(): Promise<Array<Review>>;
    submitReview(customerName: string, rating: bigint, comment: string, date: string): Promise<void>;
}
