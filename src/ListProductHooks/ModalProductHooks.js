import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { giamSoLuongSP, tangSoLuongSP } from "./cartUtil";
import {
  handleDelete,
  handleTangGiam,
} from "./redux_btgiohang/actions/cart.actions";

export default function ModalProductHooks() {
  let { gioHangModal } = useSelector((state) => state.Product);

  let dispatch = useDispatch();

  let renderGioHang = () => {
    return gioHangModal.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>
            <img src={sp.hinhAnh} alt="" width={100} height={75} />
          </td>
          <td>{sp.tenSP}</td>
          <td>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                dispatch(handleTangGiam(sp, tangSoLuongSP));
              }}
            >
              +
            </button>
            {sp.soLuong}
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                dispatch(handleTangGiam(sp, giamSoLuongSP));
              }}
            >
              -
            </button>
          </td>
          <td>{sp.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(handleDelete(sp));
              }}
            >
              Xóa
            </button>
          </td>
          <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
        </tr>
      );
    });
  };

  let sumQuantityCart = gioHangModal.reduce((sum, data, index) => {
    return (sum += data.soLuong);
  }, 0);

  let sumMoney = gioHangModal.reduce((sumM, data, index) => {
    return (sumM += data.soLuong * data.giaBan);
  }, 0);
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Giỏ hàng ({sumQuantityCart})
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "60vw" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>{renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}></td>
                    <td>Tổng tiền</td>
                    <td>{sumMoney.toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
