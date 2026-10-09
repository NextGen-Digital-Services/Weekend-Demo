import { Booking } from '@/types';

export const INITIAL_BOOKINGS: Booking[] = Array.from({ length: 25 }, (_, i) => {
  const names = [
    'Rajesh Verma', 'Priya Kulkarni', 'Siddharth Rao', 'Ananya Gupta', 'Vikramaditya Joshi',
    'Neha Deshmukh', 'Rahul Saxena', 'Kavita Menon', 'Manish Patil', 'Shruti Iyer',
    'Arjun Kapoor', 'Pooja Hegde', 'Nikhil Chawla', 'Meera Nair', 'Aditya Mehta',
    'Sonal Solanki', 'Deepak More', 'Swati Bhosle', 'Varun Dhavan', 'Riya Sen',
    'Kiran Pawar', 'Gaurav Shinde', 'Tanvi Mahajan', 'Rohit Shetty', 'Isha Tambe'
  ];
  const stayTypes: ('camping' | 'villa' | 'resorts' | 'cottages')[] = ['camping', 'camping', 'villa', 'resorts', 'cottages'];
  const properties = [
    'Alibaug Revdanda Beach Camping',
    'Pawna Lake Lakeside Camping',
    'Alibaug Casa Amalfi Private Pool Villa',
    'Lonavala Mist & Cloud Luxury Villa',
    'Alibaug Palms Boutique Beach Resort',
    'Alibaug Coconut Grove Heritage Cottage',
    'Matheran Eco Jungle Camping'
  ];
  const statuses: ('New' | 'Contacted' | 'Confirmed' | 'Cancelled' | 'Completed')[] = ['New', 'Contacted', 'Confirmed', 'Confirmed', 'Completed'];

  const dateOffset = Math.floor(Math.random() * 30);
  const date = new Date(Date.now() - dateOffset * 86400000).toISOString().split('T')[0];

  return {
    id: `WT-BK-${1000 + i}`,
    guestName: names[i % names.length],
    guestPhone: `+91 98${Math.floor(10000000 + Math.random() * 90000000)}`,
    checkInDate: date,
    guestsCount: Math.floor(Math.random() * 6) + 2,
    stayType: stayTypes[i % stayTypes.length],
    propertyName: properties[i % properties.length],
    status: statuses[i % statuses.length],
    totalAmount: (Math.floor(Math.random() * 8) + 1) * 1500,
    notes: i % 3 === 0 ? 'Prefers non-veg BBQ, celebratory birthday setup.' : 'Standard booking request via website.',
    createdAt: date,
  };
});
