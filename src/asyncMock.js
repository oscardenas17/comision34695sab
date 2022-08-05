const products = [
  {
    id: "1",
    name: "Desayuno Sorpresa Mini",
    price: 1000,
    category: "desayunos",
    img: "https://i.imgur.com/5v22Iv6.jpeg",
    stock: 25,
    description: "Desayuno ideal para iniciar el dia",
  },
  {
    id: "2",
    name: "Peluche Pig",
    price: 800,
    category: "peluches",
    img: "https://minisocol.vtexassets.com/arquivos/ids/200058-600-600?v=637811266115500000&width=600&height=600&aspect=true",
    stock: 16,
    description: "Peluche cerdito",
  },
  {
    id: "3",
    name: "Decoracion quince años",
    price: 1200,
    category: "decoracion",
    img: "https://keefiesta.com/wp-content/uploads/2021/10/decoracion-para-15-anos-en-casa-con-globos-1.jpg",
    stock: 10,
    description: "Decoracion quince años",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
