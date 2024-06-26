import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';

import {
    type AppDispatch,
    type RootState
} from '../index';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;