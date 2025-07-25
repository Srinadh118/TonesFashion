// Import images correctly for Vite
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.jpg";

export const products = [
  {
    id: "prod_01",
    name: "Essential Oversized Tee",
    category: "T-Shirts",
    price: 1899,
    imageUrl: product1,
    description:
      "The cornerstone of any wardrobe. Our Essential Oversized Tee is crafted from 240 GSM heavy-weight cotton for a structured drape and premium feel. Perfect for a minimalist statement.",
    details: [
      "100% Premium Cotton",
      "240 GSM Fabric",
      "Oversized Fit",
      "Pre-Shrunk",
    ],
  },
  {
    id: "prod_02",
    name: "Utility Cargo Pants",
    category: "Pants",
    price: 3499,
    imageUrl: product2,
    description:
      "Function meets fashion. These cargo pants are built from durable twill fabric, featuring multiple pockets and an adjustable waistband for a custom fit. Your go-to for urban exploration.",
    details: [
      "Durable Cotton Twill",
      "Multi-Pocket Design",
      "Relaxed Fit",
      "Adjustable Waistband",
    ],
  },
  {
    id: "prod_03",
    name: "TONES Signature Hoodie",
    category: "Hoodies",
    price: 3999,
    imageUrl: product3,
    description:
      "The TONES Signature Hoodie. Made from ultra-soft fleece-back cotton, this hoodie provides ultimate comfort without compromising on style. Features a subtle embroidered TONES logo.",
    details: [
      "320 GSM Fleece-Back Cotton",
      "Embroidered Logo",
      "Dropped Shoulders",
      "Kangaroo Pocket",
    ],
  },
  {
    id: "prod_04",
    name: "Vintage Wash Shirt",
    category: "Shirts",
    price: 2799,
    imageUrl: product4,
    description:
      "A timeless piece re-imagined. This shirt features a unique vintage wash, giving it a soft, lived-in feel from the very first wear. The relaxed silhouette makes it perfect for layering.",
    details: [
      "100% Cotton",
      "Custom Vintage Wash",
      "Relaxed Fit",
      "Button-Front Closure",
    ],
  },
  // Add 4 more products to make a total of 8 for a nice grid
  {
    id: "prod_05",
    name: "Street-Tech Cargos",
    category: "Pants",
    price: 3799,
    imageUrl: product5,
    description:
      "Engineered for movement. These cargos blend technical nylon with a modern tapered fit, featuring zip pockets and an elasticated cuff for a clean, contemporary look.",
    details: [
      "Nylon-Spandex Blend",
      "Water-Resistant",
      "Tapered Fit",
      "Zippered Pockets",
    ],
  },
  {
    id: "prod_06",
    name: "Graphic Print Tee",
    category: "T-Shirts",
    price: 2199,
    imageUrl: product6,
    description:
      "Art you can wear. This tee showcases a custom graphic print inspired by modern architecture, printed on our signature oversized silhouette.",
    details: [
      "100% Premium Cotton",
      "240 GSM Fabric",
      "High-Quality Screen Print",
      "Oversized Fit",
    ],
  },
  {
    id: "prod_07",
    name: "Minimalist Zip Hoodie",
    category: "Hoodies",
    price: 4299,
    imageUrl: product7,
    description:
      "Elevated simplicity. This zip hoodie features a two-way zipper and clean seam detailing, crafted from our heavyweight fleece for warmth and structure.",
    details: [
      "320 GSM Fleece-Back Cotton",
      "Two-Way YKK Zipper",
      "Minimalist Design",
      "Hidden Side Pockets",
    ],
  },
  {
    id: "prod_08",
    name: "Everyday Linen Shirt",
    category: "Shirts",
    price: 2999,
    imageUrl: product8,
    description:
      "Breathable and effortlessly cool. Our linen shirt is perfect for warm climates, offering a relaxed fit that looks great on its own or layered over a tee.",
    details: [
      "Linen-Cotton Blend",
      "Breathable Fabric",
      "Relaxed Fit",
      "Mother of Pearl Buttons",
    ],
  },
];
