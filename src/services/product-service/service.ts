import { useCallback } from 'react';

import { productApiActions, productResult } from '../../redux/reducers/features/prodcuts/slice';
import { useAppDispatch, useAppSelector } from '../../redux/root-saga/hooks';

interface ProductServiceInterface {
    data: any;
    fetchProduct: () => void;
}

const useProductService = (): Readonly<ProductServiceInterface> => {
    const dispatch: any = useAppDispatch();

    return {
        data: useAppSelector(productResult),
        fetchProduct: useCallback(() => {
            dispatch(productApiActions.fetchAllisLoading());
            dispatch(productApiActions.fetchAll());
        }, [dispatch]),
    };
};

export default useProductService;