const plants = [
  // =========================
  // INDOOR PLANTS
  // =========================
  // {
  //   id: 1,
  //   name: "Snake Plant",
  //   category: "Indoor Plants",
  //   price: 18.99,
  //   image:
  //   "https://images.unsplash.com/photo-1593482892290-f54927ae2c9c?auto=format&fit=crop&w=600&q=80",
  //   description:
  //     "A beautiful and easy-to-care-for indoor plant that adds a fresh look to any room.",
  // },
  {
    id: 2,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description:
      "A tropical plant with large decorative leaves, perfect for bright indoor spaces.",
  },
  // {
  //   id: 3,
  //   name: "Peace Lily",
  //   category: "Indoor Plants",
  //   price: 22.99,
  //   image:
  //     "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  //   description:
  //     "An elegant indoor plant with beautiful green leaves and white flowers.",
  // },
  // {
  //   id: 4,
  //   name: "ZZ Plant",
  //   category: "Indoor Plants",
  //   price: 19.99,
  //   image:
  //     "https://images.unsplash.com/photo-1632207691143-643e2f7f4c35?auto=format&fit=crop&w=600&q=80",
  //   description:
  //     "A low-maintenance plant with glossy leaves, ideal for homes and offices.",
  // },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description:
      "A stylish indoor plant with large glossy leaves and a tropical appearance.",
  },
  {
    id: 6,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description:
      "A graceful tropical palm that adds a relaxing natural feeling to your home.",
  },

  // =========================
  // FLOWERING PLANTS
  // =========================
  {
    id: 7,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
    description:
      "A classic flowering plant that brings beautiful roses to your garden.",
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=600&q=80",
    description:
      "An elegant flowering plant known for beautiful and long-lasting flowers.",
  },
  {
    id: 9,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=600&q=80",
    description:
      "A tropical flowering plant with bright flowers and attractive heart-shaped leaves.",
  },
  {
    id: 10,
    name: "African Violet",
    category: "Flowering Plants",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description:
      "A compact flowering plant that adds beautiful color to indoor spaces.",
  },
  {
    id: 11,
    name: "Begonia",
    category: "Flowering Plants",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    description:
      "A colorful flowering plant perfect for brightening homes and gardens.",
  },
  {
    id: 12,
    name: "Jasmine Plant",
    category: "Flowering Plants",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=600&q=80",
    description:
      "A fragrant flowering plant that fills your surroundings with a pleasant scent.",
  },

  // =========================
  // SUCCULENTS
  // =========================
  {
    id: 13,
    name: "Aloe Vera",
    category: "Succulents",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description:
      "A popular succulent that is easy to maintain and looks great in bright spaces.",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=600&q=80",
    description:
      "A beautiful rosette-shaped succulent that requires very little maintenance.",
  },
  {
    id: 15,
    name: "Jade Plant",
    category: "Succulents",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=600&q=80",
    description:
      "A hardy succulent with thick green leaves that is perfect for beginners.",
  },
  {
    id: 16,
    name: "Haworthia",
    category: "Succulents",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description:
      "A small decorative succulent ideal for desks, shelves, and windowsills.",
  },
  {
    id: 17,
    name: "String of Pearls",
    category: "Succulents",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description:
      "A unique trailing succulent with small round leaves that looks beautiful in hanging pots.",
  },
  {
    id: 18,
    name: "Zebra Plant",
    category: "Succulents",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description:
      "A compact succulent with distinctive leaves and a modern appearance.",
  },
];

export default plants;