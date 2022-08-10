import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => any = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector