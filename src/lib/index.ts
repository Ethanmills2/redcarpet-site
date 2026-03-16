export const ROUTE_PATHS = {
  HOME: '/',
} as const;

export interface EventType {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Feature {
  title: string;
  icon: string;
}

export const VENUE_INFO = {
  name: "Red Carpet Events Centre",
  address: "Boundary Road, Accra, Ghana",
  googleMapsCode: "JRJW+JQ Accra",
  phone: "024 448 5219",
  whatsapp: "233244485219",
  hours: "Monday – Sunday: Opens 9 AM",
  rating: 4.2,
  reviewsCount: 276,
};

export const EVENT_TYPES: EventType[] = [
  {
    title: "Weddings",
    description: "Create your dream wedding in our elegant and spacious hall with premium decor options.",
    icon: "Heart",
  },
  {
    title: "Birthday Parties",
    description: "Celebrate another year in style with vibrant lighting and a celebratory atmosphere.",
    icon: "Cake",
  },
  {
    title: "Corporate Events",
    description: "Professional settings for conferences, galas, and corporate celebrations.",
    icon: "Briefcase",
  },
  {
    title: "Engagement Parties",
    description: "Mark the beginning of your journey together with an intimate and stylish celebration.",
    icon: "Gem",
  },
  {
    title: "Private Celebrations",
    description: "Exclusive space for any private gathering, tailored to your specific needs.",
    icon: "Users",
  },
  {
    title: "Kids Birthday Events",
    description: "Fun, safe, and family-friendly environment perfect for unforgettable kids' parties.",
    icon: "Baby",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "Kwame A.",
    rating: 5,
    comment: "One of the best event spots in Accra. Amazing vibe and the staff are incredibly professional!",
    date: "2 months ago",
  },
  {
    name: "Abena B.",
    rating: 5,
    comment: "Great place for weddings. The hall is spacious and the lighting is just perfect for photos.",
    date: "1 month ago",
  },
  {
    name: "John D.",
    rating: 4,
    comment: "Good music, great atmosphere, and friendly staff. Highly recommended for corporate events.",
    date: "3 weeks ago",
  },
];

export const FEATURES: Feature[] = [
  { title: "Spacious event hall", icon: "Maximize" },
  { title: "Wheelchair-accessible car park", icon: "ParkingCircle" },
  { title: "Wheelchair-accessible entrance", icon: "Accessibility" },
  { title: "Wheelchair-accessible toilets", icon: "Accessibility" },
  { title: "Clean restroom facilities", icon: "Droplets" },
  { title: "Family-friendly environment", icon: "Home" },
];

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
  if (href.startsWith('#')) {
    if (e) e.preventDefault();
    const id = href.substring(1);
    const element = id ? document.getElementById(id) : null;
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#' || !id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};