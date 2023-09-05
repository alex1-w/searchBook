import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, MainState } from "../store";


export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector  