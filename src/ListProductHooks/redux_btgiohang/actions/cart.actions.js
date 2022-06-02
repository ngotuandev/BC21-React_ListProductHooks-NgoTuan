import {
  TANG_GIAM_SP,
  THEM_SAN_PHAM,
  XEM_CHI_TIET,
  XOA_SAN_PHAM,
} from "../constant/sanPham";

export const handleThemSanPham = (payload) => ({
  type: THEM_SAN_PHAM,
  payload,
});

export const handleChange = (payload) => ({
  type: XEM_CHI_TIET,
  payload,
});

export const handleDelete = (payload) => ({
  type: XOA_SAN_PHAM,
  payload,
});

export const handleTangGiam = (payload, number) => ({
  type: TANG_GIAM_SP,
  payload,
  number,
});
