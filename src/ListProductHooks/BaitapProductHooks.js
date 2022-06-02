import React from "react";
import ModalProductHooks from "./ModalProductHooks";
import ProductHooks from "./ProductHooks";
import RenderListProductHooks from "./RenderListProductHooks";

export default function BaitapProductHooks() {
  return (
    <div className="container">
      <h2 className="text-right text-warning">Bài tập Giỏ Hàng Hooks</h2>
      <br />
      <ModalProductHooks />
      <br />
      <RenderListProductHooks />
      <ProductHooks />
    </div>
  );
}
