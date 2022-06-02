import React from "react";
import { useDispatch } from "react-redux";
import {
  handleChange,
  handleThemSanPham,
} from "./redux_btgiohang/actions/cart.actions";

export default function ItemproductHooks(props) {
  let { hinhAnh, tenSP, giaBan } = props.data;

  let dispatch = useDispatch();

  return (
    <div className="card text-left">
      <img
        className="card-img-top"
        src={hinhAnh}
        style={{ width: "100%", height: "300px" }}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{tenSP}</h4>
        <p className="card-text">{giaBan}</p>
        <div className="row">
          <button
            className="btn btn-success col-5 mx-2"
            onClick={() => {
              dispatch(handleChange(props.data));
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-primary col-5"
            onClick={() => {
              dispatch(handleThemSanPham(props.data));
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
