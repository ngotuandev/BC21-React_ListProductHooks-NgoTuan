import React from "react";
import { useSelector } from "react-redux";
import ItemproductHooks from "./ItemproductHooks";

export default function RenderListProductHooks() {
  let { dataProduct } = useSelector((state) => state.Product);

  let renderList = () => {
    return dataProduct?.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ItemproductHooks data={item} />
        </div>
      );
    });
  };

  return <div className="row">{renderList()}</div>;
}
