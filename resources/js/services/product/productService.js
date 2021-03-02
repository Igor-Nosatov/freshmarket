import requestService from './../requestService.js';

const apiEndpoint = '/catalog/product/';

const productService = { 
    async fetchProductApi(params) {
        const response = await requestService.get(
            apiEndpoint + params
        );
        return response?.data?.product
    }, 
    async fetchProducerApi(params) {
        const response = await requestService.get(
            apiEndpoint + params
        );
        return response?.data?.product?.producers
    }, 
}
export default productService;