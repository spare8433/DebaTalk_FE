import { removeCookie } from "@cookie/";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "store/actions"

const dispatch = useDispatch;
const navigate = useNavigate;

export const logout = () => {
  removeCookie('token');
  dispatch(deleteUser());
  navigate('/');
}