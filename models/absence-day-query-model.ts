/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayModel } from './absence-day-model';

/**
 * 
 * @export
 * @interface AbsenceDayQueryModel
 */
export interface AbsenceDayQueryModel {
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayQueryModel
     */
    'ODataContext'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayQueryModel
     */
    'ODataCount'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayQueryModel
     */
    'ODataNextLink'?: string | null;
    /**
     * 
     * @type {Array<AbsenceDayModel>}
     * @memberof AbsenceDayQueryModel
     */
    'Value'?: Array<AbsenceDayModel> | null;
}

