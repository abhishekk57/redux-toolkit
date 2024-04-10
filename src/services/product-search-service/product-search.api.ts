import makeApi from '../../libs';
import { PRODUCT_SEARCH_URL } from '../../utill';

const api = makeApi(PRODUCT_SEARCH_URL);

const ADDITIONAL_PATH = '';

const getFilterProducts = async (): Promise<any> => api.get(ADDITIONAL_PATH);

export default getFilterProducts;