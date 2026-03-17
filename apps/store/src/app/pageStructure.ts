const lang = 'ua';

const pageCategory = {
  id: 'string',
  name: 'string',
};

const pageTemplate = {
  id: 'string',
  name: 'string',
};

const pageStructure = {
  main: {
    id: 'string',
    parentCategory: 'pageCategory | null',
    url: 'string',
    title: {
      [lang]: 'string',
    },
    template: 'pageTemplate',
    isHidden: 'boolean',
    includeInSitemap: 'boolean',
  },
  seo: {
    title: {
      [lang]: 'string',
    },
    description: {
      [lang]: 'string',
    },
    noindex: 'boolean',
    nofollow: 'boolean',
  },

  common: {
    description: { [lang]: 'string' },
  },
};

const storePageCategory = {
  isPopularCategory: 'boolean',
  listViewByDefault: 'boolean',
};

const storeMainProduct = {
  category: 'pageCategory | null',
  additionalCategories: '[pageCategory] | null',
  article: 'string',
  shortDescription: { [lang]: 'string' },
  color: 'string',
  colorImage: 'url',
  price: 'number',
  oldPrice: 'number',
  discount: 'number',
  brand: 'brandId',
  countryOfOrigin: 'string',
  unit: 'string',
  rating: {
    value: 'number',
    votesCount: 'number',
    popularity: 'number',
  },
};

const blog = {
  previewImage: 'url',
  image: 'url',
  previewText: { [lang]: 'string' },
  text: { [lang]: 'string' },
};

const brashProduct = {
  hairType: 'string',
  hairConcern: 'string',
  appointment: 'string',
  size: 'string',
  sizeType: 'string',
  weight: 'string',
};
