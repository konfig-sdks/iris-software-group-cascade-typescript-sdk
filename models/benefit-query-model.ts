/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BenefitModel } from './benefit-model';

/**
 * 
 * @export
 * @interface BenefitQueryModel
 */
export interface BenefitQueryModel {
    /**
     * 
     * @type {string}
     * @memberof BenefitQueryModel
     */
    'ODataContext'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BenefitQueryModel
     */
    'ODataCount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BenefitQueryModel
     */
    'ODataNextLink'?: string | null;
    /**
     * 
     * @type {Array<BenefitModel>}
     * @memberof BenefitQueryModel
     */
    'Value'?: Array<BenefitModel> | null;
}

