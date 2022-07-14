import React from "react"
import Panel from "../Panel/Panel";
import {useSelector} from "react-redux";
//
// const fakeProducts = [
//   { id: 1, name: "Pomidory" },
//   { id: 2, name: "Przyprawa curry" },
//   { id: 3, name: "Olej" },
//   { id: 4, name: "Wołowina 500g" },
//   { id: 5, name: "Ziemniaki" },
//   { id: 6, name: "Pomidory" },
//   { id: 7, name: "Przyprawa curry" },
//   { id: 8, name: "Olej" },
//   { id: 9, name: "Wołowina 500g" },
//   { id: 10, name: "Ziemniaki" },
// ];

const AllProducts = () => {
  const products = useSelector((state)=>state.products)
  console.log({products});
  return (
    <>
      <h1 className="title">Wszystkie produkty</h1>
      <Panel iconName={"folder"} path={"products"} listElements={products} heading={false} footer={false} />
    </>
  );
};

export default AllProducts;
