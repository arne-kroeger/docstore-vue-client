// tslint:disable
/**
 * perf::act Documentation API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: documentation@perf-act.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * cloned from product list api
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     *
     * @type {Array<ErrorItem>}
     * @memberof BadRequest
     */
    items?: Array<ErrorItem>;
}
/**
 *
 * @export
 * @interface Document
 */
export interface Document {
    /**
     *
     * @type {number}
     * @memberof Document
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof Document
     */
    uuid: string;
    /**
     *
     * @type {string}
     * @memberof Document
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof Document
     */
    content: string;
    /**
     *
     * @type {string}
     * @memberof Document
     */
    latestChange?: string;
    /**
     *
     * @type {string}
     * @memberof Document
     */
    latestUpdate: string;
    /**
     *
     * @type {Space}
     * @memberof Document
     */
    space: Space;
    /**
     *
     * @type {Environment}
     * @memberof Document
     */
    environment: Environment;
    /**
     *
     * @type {Array<Environment>}
     * @memberof Document
     */
    otherEnvironments: Array<Environment>;
    /**
     *
     * @type {Array<string>}
     * @memberof Document
     */
    tags: Array<string>;
}
/**
 *
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     *
     * @type {string}
     * @memberof Environment
     */
    name: string;
}
/**
 * definition of error item
 * @export
 * @interface ErrorItem
 */
export interface ErrorItem {
    /**
     *
     * @type {string}
     * @memberof ErrorItem
     */
    field?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorItem
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorItem
     */
    message?: string;
}
/**
 *
 * @export
 * @interface Space
 */
export interface Space {
    /**
     *
     * @type {string}
     * @memberof Space
     */
    name: string;
}
/**
 *
 * @export
 * @interface TemplateData
 */
export interface TemplateData {
    /**
     *
     * @type {string}
     * @memberof TemplateData
     */
    uuid: string;
    /**
     *
     * @type {Space}
     * @memberof TemplateData
     */
    space: Space;
    /**
     *
     * @type {Environment}
     * @memberof TemplateData
     */
    environment?: Environment;
    /**
     *
     * @type {Array<string>}
     * @memberof TemplateData
     */
    additionalTags?: Array<string>;
    /**
     *
     * @type {Array<TemplateVariable>}
     * @memberof TemplateData
     */
    variables: Array<TemplateVariable>;
}
/**
 *
 * @export
 * @interface TemplateVariable
 */
export interface TemplateVariable {
    /**
     *
     * @type {string}
     * @memberof TemplateVariable
     */
    name?: string;
    /**
     *
     * @type {object}
     * @memberof TemplateVariable
     */
    value?: object;
}

/**
 * DocumentApi - axios parameter creator
 * @export
 */
export const DocumentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary adds a new document
         * @param {Document} document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocument(document: Document, options: any = {}): RequestArgs {
            // verify required parameter 'document' is not null or undefined
            if (document === null || document === undefined) {
                throw new RequiredError('document','Required parameter document was null or undefined when calling addNewDocument.');
            }
            const localVarPath = `/document`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof document !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(document !== undefined ? document : {}) : (document || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary adds a new document by template
         * @param {string} templateUuid
         * @param {TemplateData} templateData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocumentForTemplate(templateUuid: string, templateData: TemplateData, options: any = {}): RequestArgs {
            // verify required parameter 'templateUuid' is not null or undefined
            if (templateUuid === null || templateUuid === undefined) {
                throw new RequiredError('templateUuid','Required parameter templateUuid was null or undefined when calling addNewDocumentForTemplate.');
            }
            // verify required parameter 'templateData' is not null or undefined
            if (templateData === null || templateData === undefined) {
                throw new RequiredError('templateData','Required parameter templateData was null or undefined when calling addNewDocumentForTemplate.');
            }
            const localVarPath = `/document/template/{templateUuid}`
                .replace(`{${"templateUuid"}}`, encodeURIComponent(String(templateUuid)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof templateData !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(templateData !== undefined ? templateData : {}) : (templateData || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary get latest updated documents
         * @param {string} uuid
         * @param {string} env
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocument(uuid: string, env: string, options: any = {}): RequestArgs {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling getDocument.');
            }
            // verify required parameter 'env' is not null or undefined
            if (env === null || env === undefined) {
                throw new RequiredError('env','Required parameter env was null or undefined when calling getDocument.');
            }
            const localVarPath = `/document/{uuid}/{env}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"env"}}`, encodeURIComponent(String(env)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary get latest updated documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestDocuments(options: any = {}): RequestArgs {
            const localVarPath = `/document`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary search for documents
         * @param {string} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchDocuments(body: string, options: any = {}): RequestArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling searchDocuments.');
            }
            const localVarPath = `/document/search`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'text/plain';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentApi - functional programming interface
 * @export
 */
export const DocumentApiFp = function(configuration?: Configuration) {
    return {
        /**
         *
         * @summary adds a new document
         * @param {Document} document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocument(document: Document, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document> {
            const localVarAxiosArgs = DocumentApiAxiosParamCreator(configuration).addNewDocument(document, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary adds a new document by template
         * @param {string} templateUuid
         * @param {TemplateData} templateData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocumentForTemplate(templateUuid: string, templateData: TemplateData, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document> {
            const localVarAxiosArgs = DocumentApiAxiosParamCreator(configuration).addNewDocumentForTemplate(templateUuid, templateData, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary get latest updated documents
         * @param {string} uuid
         * @param {string} env
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocument(uuid: string, env: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Document> {
            const localVarAxiosArgs = DocumentApiAxiosParamCreator(configuration).getDocument(uuid, env, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary get latest updated documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestDocuments(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Document>> {
            const localVarAxiosArgs = DocumentApiAxiosParamCreator(configuration).getLatestDocuments(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary search for documents
         * @param {string} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchDocuments(body: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Document>> {
            const localVarAxiosArgs = DocumentApiAxiosParamCreator(configuration).searchDocuments(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DocumentApi - factory interface
 * @export
 */
export const DocumentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         *
         * @summary adds a new document
         * @param {Document} document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocument(document: Document, options?: any): AxiosPromise<Document> {
            return DocumentApiFp(configuration).addNewDocument(document, options)(axios, basePath);
        },
        /**
         *
         * @summary adds a new document by template
         * @param {string} templateUuid
         * @param {TemplateData} templateData
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addNewDocumentForTemplate(templateUuid: string, templateData: TemplateData, options?: any): AxiosPromise<Document> {
            return DocumentApiFp(configuration).addNewDocumentForTemplate(templateUuid, templateData, options)(axios, basePath);
        },
        /**
         *
         * @summary get latest updated documents
         * @param {string} uuid
         * @param {string} env
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDocument(uuid: string, env: string, options?: any): AxiosPromise<Document> {
            return DocumentApiFp(configuration).getDocument(uuid, env, options)(axios, basePath);
        },
        /**
         *
         * @summary get latest updated documents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestDocuments(options?: any): AxiosPromise<Array<Document>> {
            return DocumentApiFp(configuration).getLatestDocuments(options)(axios, basePath);
        },
        /**
         *
         * @summary search for documents
         * @param {string} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchDocuments(body: string, options?: any): AxiosPromise<Array<Document>> {
            return DocumentApiFp(configuration).searchDocuments(body, options)(axios, basePath);
        },
    };
};

/**
 * DocumentApi - object-oriented interface
 * @export
 * @class DocumentApi
 * @extends {BaseAPI}
 */
export class DocumentApi extends BaseAPI {
    /**
     *
     * @summary adds a new document
     * @param {Document} document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApi
     */
    public addNewDocument(document: Document, options?: any) {
        return DocumentApiFp(this.configuration).addNewDocument(document, options)(this.axios, this.basePath);
    }

    /**
     *
     * @summary adds a new document by template
     * @param {string} templateUuid
     * @param {TemplateData} templateData
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApi
     */
    public addNewDocumentForTemplate(templateUuid: string, templateData: TemplateData, options?: any) {
        return DocumentApiFp(this.configuration).addNewDocumentForTemplate(templateUuid, templateData, options)(this.axios, this.basePath);
    }

    /**
     *
     * @summary get latest updated documents
     * @param {string} uuid
     * @param {string} env
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApi
     */
    public getDocument(uuid: string, env: string, options?: any) {
        return DocumentApiFp(this.configuration).getDocument(uuid, env, options)(this.axios, this.basePath);
    }

    /**
     *
     * @summary get latest updated documents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApi
     */
    public getLatestDocuments(options?: any) {
        return DocumentApiFp(this.configuration).getLatestDocuments(options)(this.axios, this.basePath);
    }

    /**
     *
     * @summary search for documents
     * @param {string} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApi
     */
    public searchDocuments(body: string, options?: any) {
        return DocumentApiFp(this.configuration).searchDocuments(body, options)(this.axios, this.basePath);
    }

}


