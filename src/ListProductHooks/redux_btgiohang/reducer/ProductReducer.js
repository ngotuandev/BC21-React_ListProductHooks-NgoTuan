import { dataProductGH } from "../../dataProduct";
import {
  TANG_GIAM_SP,
  THEM_SAN_PHAM,
  XEM_CHI_TIET,
  XOA_SAN_PHAM,
} from "../constant/sanPham";

let initialState = {
  dataProduct: dataProductGH,
  dataProductDetail: dataProductGH[0],
  gioHangModal: [],
};

export const ProductReducer = (
  state = initialState,
  { type, payload, number }
) => {
  switch (type) {
    case XEM_CHI_TIET: {
      state.dataProductDetail = payload;
      return { ...state };
    }
    case THEM_SAN_PHAM: {
      let gioHangCopy = [...state.gioHangModal];

      let index = state.gioHangModal.findIndex(
        (spGH) => spGH.maSP === payload.maSP
      );
      if (index == -1) {
        let spGioHang = { ...payload, soLuong: 1 };
        gioHangCopy.push(spGioHang);
      } else {
        gioHangCopy[index].soLuong += 1;
      }
      state.gioHangModal = gioHangCopy;
      return { ...state };
    }
    case XOA_SAN_PHAM: {
      let gioHangCopy = [...state.gioHangModal];
      let index = state.gioHangModal.findIndex(
        (spGH) => spGH.maSP === payload.maSP
      );
      if (index !== -1) {
        gioHangCopy.splice(index, 1);
      }
      state.gioHangModal = gioHangCopy;
      return { ...state };
    }
    case TANG_GIAM_SP: {
      let gioHangCopy = [...state.gioHangModal];
      let index = state.gioHangModal.findIndex(
        (spGH) => spGH.maSP === payload.maSP
      );
      if (index !== -1) {
        gioHangCopy[index].soLuong = gioHangCopy[index].soLuong + number;
        gioHangCopy[index].soLuong === 0 && gioHangCopy.splice(index, 1);
      }
      state.gioHangModal = gioHangCopy;
      return { ...state };
    }
    default:
      return state;
  }
};
