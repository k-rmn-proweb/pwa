import jsonPlaceholder from './jsonPlaceholderApi';

const { api, ...jsonPlaceholderHooks } = jsonPlaceholder;

export { api as jsonPlaceholderApi, jsonPlaceholderHooks };
