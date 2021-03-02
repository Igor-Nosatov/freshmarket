import requestService from './../requestService.js';

const apiEndpoint = '/catalog/';

const catalogService = {
    async fetchProductsByType( params, body){
        const response = await requestService.get(
            apiEndpoint + params, body
        );
        return response
    },
    async fetchCategories(params, body){
        const response = await requestService.get(
            apiEndpoint + params, body
        );
        return response?.data?.categories
    },
    async fetchProducers(params, body){
        const response = await requestService.get(
            apiEndpoint + params, body
        );
        return response?.data?.producers
    },
    async fetchPrices(params, body){
        const response = await requestService.get(
            apiEndpoint + params, body
        );
        return response?.data?.prices;
    }
}
export default catalogService;