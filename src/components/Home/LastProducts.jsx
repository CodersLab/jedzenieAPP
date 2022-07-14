import React from "react";
import Panel from "../Panel/Panel";
import {useSelector} from "react-redux";

const LastProducts = () => {
    let products = useSelector(state=>state.products.slice(0,5));
  console.log({products});
    return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={products} />
  );
};

export default LastProducts;