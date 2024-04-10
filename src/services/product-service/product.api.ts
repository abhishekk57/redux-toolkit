import makeApi from '../../libs';
import { BASE_URL } from '../../utill';

const api = makeApi(BASE_URL);

const ADDITIONAL_PATH = '';

const getProducts = async (): Promise<any> => api.get(ADDITIONAL_PATH);

export default getProducts;