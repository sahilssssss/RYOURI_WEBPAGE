import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'Rs.350',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'Rs.419',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'Rs.309',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Rs.210',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'Rs.189',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Rs.539',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs.615',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs.789',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'rs.999',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs.749',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Gourme's Choice Award",
    subtitle: ' "Recognizing the Crème de la Crème of Dining Experiences."',
  },
  {
    imgUrl: images.award02,
    title: 'Culinary Excellence Award',
    subtitle: ' "Celebrating the Epitome of Gastronomic Artistry." ',
  },

  {
    imgUrl: images.award03,
    title: 'Top Taste Experience Honors',
    subtitle: '"Elevating Palates and Redefining Dining Brilliance."',
  },
  {
    imgUrl: images.award05,
    title: 'Dining Destination of the Year',
    subtitle: 'Where Every Meal Becomes a Memorable Journey.',
  }
];

export default { wines, cocktails, awards };
