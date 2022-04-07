export default function Product() {
  //const products = ["Laptop", "Phone", "Modem", "USB Drive", "iPhone 13"];
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 },
    { id: 3, name: "Modem", price: 100 },
    { id: 4, name: "Computer", price: 800 },
  ];
  const productList = products.map((product, index) => (
    <h1 key={index}>
      {product.name}: ${product.price}
    </h1>
  ));
  return <div>{productList}</div>;

  //   const fruits = ["Apple", "Mango", "Orange", "Banana", "Coconut"];

  //   const fruitsList = fruits.map((fruit, index) => <h1 key={index}>{fruit}</h1>);

  //   return <div>{fruitsList}</div>;
}
