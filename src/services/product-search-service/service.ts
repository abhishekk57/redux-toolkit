import { useCallback } from 'react';

import { productSearchActions, productSearchResult } from '../../redux/reducers/features/home/slice';
import { useAppDispatch, useAppSelector } from '../../redux/root-saga/hooks';

interface ProductSearchService {
    searchResult: any;
    fetchSearchProduct: () => void;
}

const useSearchProductService = (): Readonly<ProductSearchService> => {
    const dispatch: any = useAppDispatch();

    return {
        searchResult: useAppSelector(productSearchResult),
        fetchSearchProduct: useCallback(() => {
            dispatch(productSearchActions.fetchAllisLoading());
            dispatch(productSearchActions.fetchAll());
        }, [dispatch]),
    };
};

export default useSearchProductService;