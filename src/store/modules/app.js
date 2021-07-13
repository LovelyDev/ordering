const state = {
  products: [
    {
      id: "1",
      name: "Nike shoes",
      price: 50,
      category: "fashion",
      description: "This is a Nike Shoe",
    },
    {
      id: "2",
      name: "Play station 2",
      price: 40,
      category: "games",
      description: "Play stations 4 for your entertainment",
    },
    {
      id: "3",
      name: "iphone 7",
      price: 48,
      category: "phones",
      description: "Sleek iphone 7. With a lot of cool features",
    },
    {
      id: "4",
      name: "Samsung galaxy s7",
      price: 64,
      category: "phones",
      description: "Samsung phone. Not to be outdone by the iphone",
    },
    {
      id: "5",
      name: "Hamburger",
      price: 58,
      category: "Food",
      description: "Delicious hamburger for your pleasure",
    },
    {
      id: "6",
      name: "Sofa",
      price: 38,
      category: "household",
      description: "Comfortable sofa for your comfort",
    },
    {
      id: "7",
      name: "Electric Iron",
      price: 35,
      category: "household",
      description: "Straighten your clothes",
    },
  ],
  carts: [],
};

const getters = {
  PRODUCTS: (state) => state.products,
  CARTS: (state) => state.carts,
};

const mutations = {
  ADD_CARTS: (state, item) => {
    state.carts.push(item);
  },
  REMOVE_CARTS: (state, i) => {
    state.carts.splice(i, 1);
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
