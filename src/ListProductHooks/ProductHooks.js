import React from "react";
import { useSelector } from "react-redux";

export default function ProductHooks() {
  let { dataProductDetail } = useSelector((state) => state.Product);
  let { hinhAnh, giaBan, tenSP, maSP, cameraTruoc, cameraSau, rom, ram } =
    dataProductDetail;

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-5">
          <h2 className="text-center">Hình ảnh sản phẩm</h2>
          <img
            src={hinhAnh}
            style={{ width: "100%", height: "500px" }}
            alt=""
          />
        </div>
        <div className="col-7">
          <h2 className="text-center">Thông tin sản phẩm</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>{tenSP}</td>
              </tr>
              <tr>
                <td>Giá sản phẩm</td>
                <td>{giaBan.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{rom}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{ram}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
