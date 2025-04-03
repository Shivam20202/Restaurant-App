export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface Reservation {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  specialRequests?: string;
}