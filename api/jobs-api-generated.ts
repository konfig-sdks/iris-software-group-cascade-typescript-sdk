/* tslint:disable */
/* eslint-disable */
/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateJobCommand } from '../models';
// @ts-ignore
import { JobQueryModel } from '../models';
// @ts-ignore
import { UpdateJobCommand } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a new Job.
         * @param {CreateJobCommand} [createJobCommand] New Job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewJob: async (createJobCommand?: CreateJobCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json;odata.metadata=minimal;odata.streaming=true; version=2';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createJobCommand,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createJobCommand, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a single Job referenced by an ID.
         * @param {string} id Job ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a list of Jobs.
         * @param {number} [$top] Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)
         * @param {number} [$skip] Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)
         * @param {string} [$filter] Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)
         * @param {Array<string>} [$select] Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
         * @param {string} [$orderby] Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
         * @param {boolean} [$count] Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async ($top?: number, $skip?: number, $filter?: string, $select?: Array<string>, $orderby?: string, $count?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)
            if ($top !== undefined) {
                localVarQueryParameter['$top'] = $top;
            }

            if ($skip !== undefined) {
                localVarQueryParameter['$skip'] = $skip;
            }

            if ($filter !== undefined) {
                localVarQueryParameter['$filter'] = $filter;
            }

            if ($select) {
                localVarQueryParameter['$select'] = $select.join(COLLECTION_FORMATS.csv);
            }

            if ($orderby !== undefined) {
                localVarQueryParameter['$orderby'] = $orderby;
            }

            if ($count !== undefined) {
                localVarQueryParameter['$count'] = $count;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Job referenced by an ID.
         * @param {string} id The ID of the Job to update.
         * @param {UpdateJobCommand} [updateJobCommand] The new state of the Job.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, updateJobCommand?: UpdateJobCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            const localVarPath = `/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Bearer", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json;odata.metadata=minimal;odata.streaming=true; version=2';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateJobCommand,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateJobCommand, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a new Job.
         * @param {JobsApiCreateNewJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewJob(requestParameters: JobsApiCreateNewJobRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const createJobCommand: CreateJobCommand = {
                JobTitle: requestParameters.JobTitle,
                Classification: requestParameters.Classification,
                StartDate: requestParameters.StartDate,
                EndDate: requestParameters.EndDate,
                WorkingCalendar: requestParameters.WorkingCalendar,
                LineManagerId: requestParameters.LineManagerId,
                HierarchyNodeId: requestParameters.HierarchyNodeId,
                Active: requestParameters.Active,
                Salary: requestParameters.Salary,
                EmployeeId: requestParameters.EmployeeId,
                Contract: requestParameters.Contract,
                PayFrequency: requestParameters.PayFrequency,
                PayBasis: requestParameters.PayBasis,
                FullTimeEquivalent: requestParameters.FullTimeEquivalent,
                ChangeReason: requestParameters.ChangeReason,
                NextIncrementDate: requestParameters.NextIncrementDate,
                TimesheetLocation: requestParameters.TimesheetLocation,
                TimesheetLunchDuration: requestParameters.TimesheetLunchDuration,
                ExpenseSubmissionFrequency: requestParameters.ExpenseSubmissionFrequency,
                CostCentre: requestParameters.CostCentre,
                JobFamily: requestParameters.JobFamily,
                ApprenticeUnder25: requestParameters.ApprenticeUnder25,
                ApprenticeshipEndDate: requestParameters.ApprenticeshipEndDate,
                ContractEndDate: requestParameters.ContractEndDate,
                NormalHours: requestParameters.NormalHours,
                RealTimeInformationIrregularFrequency: requestParameters.RealTimeInformationIrregularFrequency,
                NoticePeriod: requestParameters.NoticePeriod
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewJob(createJobCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a single Job referenced by an ID.
         * @param {JobsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: JobsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a list of Jobs.
         * @param {JobsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: JobsApiGetListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobQueryModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.$top, requestParameters.$skip, requestParameters.$filter, requestParameters.$select, requestParameters.$orderby, requestParameters.$count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a Job referenced by an ID.
         * @param {JobsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: JobsApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const updateJobCommand: UpdateJobCommand = {
                JobTitle: requestParameters.JobTitle,
                Classification: requestParameters.Classification,
                StartDate: requestParameters.StartDate,
                EndDate: requestParameters.EndDate,
                WorkingCalendar: requestParameters.WorkingCalendar,
                LineManagerId: requestParameters.LineManagerId,
                HierarchyNodeId: requestParameters.HierarchyNodeId,
                Active: requestParameters.Active,
                Salary: requestParameters.Salary,
                Contract: requestParameters.Contract,
                PayFrequency: requestParameters.PayFrequency,
                PayBasis: requestParameters.PayBasis,
                FullTimeEquivalent: requestParameters.FullTimeEquivalent,
                ChangeReason: requestParameters.ChangeReason,
                NextIncrementDate: requestParameters.NextIncrementDate,
                TimesheetLocation: requestParameters.TimesheetLocation,
                TimesheetLunchDuration: requestParameters.TimesheetLunchDuration,
                ExpenseSubmissionFrequency: requestParameters.ExpenseSubmissionFrequency,
                CostCentre: requestParameters.CostCentre,
                JobFamily: requestParameters.JobFamily,
                ApprenticeUnder25: requestParameters.ApprenticeUnder25,
                ApprenticeshipEndDate: requestParameters.ApprenticeshipEndDate,
                ContractEndDate: requestParameters.ContractEndDate,
                NormalHours: requestParameters.NormalHours,
                RealTimeInformationIrregularFrequency: requestParameters.RealTimeInformationIrregularFrequency,
                NoticePeriod: requestParameters.NoticePeriod,
                Id: requestParameters.Id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, updateJobCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a new Job.
         * @param {JobsApiCreateNewJobRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewJob(requestParameters: JobsApiCreateNewJobRequest = {}, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.createNewJob(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a single Job referenced by an ID.
         * @param {JobsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: JobsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a list of Jobs.
         * @param {JobsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: JobsApiGetListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<JobQueryModel> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Job referenced by an ID.
         * @param {JobsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: JobsApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewJob operation in JobsApi.
 * @export
 * @interface JobsApiCreateNewJobRequest
 */
export type JobsApiCreateNewJobRequest = {
    
} & CreateJobCommand

/**
 * Request parameters for getById operation in JobsApi.
 * @export
 * @interface JobsApiGetByIdRequest
 */
export type JobsApiGetByIdRequest = {
    
    /**
    * Job ID.
    * @type {string}
    * @memberof JobsApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for getList operation in JobsApi.
 * @export
 * @interface JobsApiGetListRequest
 */
export type JobsApiGetListRequest = {
    
    /**
    * Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)
    * @type {number}
    * @memberof JobsApiGetList
    */
    readonly $top?: number
    
    /**
    * Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)
    * @type {number}
    * @memberof JobsApiGetList
    */
    readonly $skip?: number
    
    /**
    * Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)
    * @type {string}
    * @memberof JobsApiGetList
    */
    readonly $filter?: string
    
    /**
    * Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)
    * @type {Array<string>}
    * @memberof JobsApiGetList
    */
    readonly $select?: Array<string>
    
    /**
    * Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)
    * @type {string}
    * @memberof JobsApiGetList
    */
    readonly $orderby?: string
    
    /**
    * Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)
    * @type {boolean}
    * @memberof JobsApiGetList
    */
    readonly $count?: boolean
    
}

/**
 * Request parameters for updateById operation in JobsApi.
 * @export
 * @interface JobsApiUpdateByIdRequest
 */
export type JobsApiUpdateByIdRequest = {
    
    /**
    * The ID of the Job to update.
    * @type {string}
    * @memberof JobsApiUpdateById
    */
    readonly id: string
    
} & UpdateJobCommand

/**
 * JobsApiGenerated - object-oriented interface
 * @export
 * @class JobsApiGenerated
 * @extends {BaseAPI}
 */
export class JobsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Creates a new Job.
     * @param {JobsApiCreateNewJobRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public createNewJob(requestParameters: JobsApiCreateNewJobRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).createNewJob(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a single Job referenced by an ID.
     * @param {JobsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getById(requestParameters: JobsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a list of Jobs.
     * @param {JobsApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getList(requestParameters: JobsApiGetListRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Job referenced by an ID.
     * @param {JobsApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public updateById(requestParameters: JobsApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
