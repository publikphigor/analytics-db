import { person1, person2, person3, person4, person5 } from '@assets/images';

interface Order {
  id: number;
  name: string;
  image: string;
  date: string;
  amount: string;
  status: string;
}

export const headers: string[] = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];
export const orders: Order[] = [
  {
    id: 1,
    name: 'Marcus Bergson',
    image: person1,
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
  },
  {
    id: 2,
    name: 'Jaydon Vaccaro',
    image: person2,
    date: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
  },
  {
    id: 3,
    name: 'Corey Schleifer',
    image: person3,
    date: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
  },
  {
    id: 4,
    name: 'Cooper Press',
    image: person4,
    date: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
  },
  {
    id: 5,
    name: 'Phillip Lubin',
    image: person5,
    date: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
  },
];

interface Platform {
  name: string;
  amount: string;
  percentage: string;
  color: string;
}

export const platforms: Platform[] = [
  {
    name: 'Book Bazaar',
    amount: ' $2,500,000',
    percentage: '15',
    color: '#6160DC',
  },
  {
    name: 'Artisan Aisle',
    amount: '$1,800,000',
    percentage: '10',
    color: '#54C5EB',
  },
  {
    name: 'Toy Troop',
    amount: '$1,200,000',
    percentage: '8',
    color: '#FFB74A',
  },
  {
    name: 'XStore',
    amount: '$1,200,000',
    percentage: '8',
    color: '#FF4A55',
  },
];
