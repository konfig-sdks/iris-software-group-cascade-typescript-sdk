/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { Email } from './email';
import { Phone } from './phone';

/**
 * 
 * @export
 * @interface CreateEmployeeCommand
 */
export interface CreateEmployeeCommand {
    /**
     * The Display ID of the Employee. <br />  If provided must be unqiue, If null then it will automatically be generated. <br />  Cascade Source: [Employee].[DisplayEmployeeId]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'DisplayId'?: string | null;
    /**
     * The Title of the Employee. E.g. Mr, Mrs, Miss. <br />  Cascade Source: [Employee].[Title] translated through the TITLE system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'TitleHonorific'?: string | null;
    /**
     * The First Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Forename]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'FirstName'?: string | null;
    /**
     * The name the Employee is commonly known as. <br />  Cascade Source: [Employee].[KnownAs]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'KnownAs'?: string | null;
    /**
     * Any other name that the Employee has. <br />  Cascade Source: [Employee].[OtherName]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'OtherName'?: string | null;
    /**
     * The Last Name, Surname or Family Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Surname]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'LastName'?: string | null;
    /**
     * The Cost Centre assigned to the Employee. <br />  Cascade Source: [Employee].[CostCentre]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'CostCentre'?: string | null;
    /**
     * The Status of the Employee E.g. On Holiday, Sick. <br />  Automatically Calculated. <br />  Cascade Source: [Sysview_Employee_Status].[StatusDescription]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'WorkingStatus'?: string | null;
    /**
     * Indicates if the Employee is a Manager. <br />  True if any other Employee\'s active <see cref=\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Job\">Job</see> has this Employee as their Line Manager. <br />  Automaticaly Calculated.
     * @type {boolean}
     * @memberof CreateEmployeeCommand
     */
    'IsManager'?: boolean | null;
    /**
     * The National Insurance Number of the Employee. <br />  Cascade Source: [Employee].[NationalInsuranceNo]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'NationalInsuranceNumber'?: string | null;
    /**
     * The Payroll ID of the Employee. <br />  Cascade Source: [Employee].[PayrollId]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'PayrollId'?: string | null;
    /**
     * The Tax Code of the Employee. <br />  Cascade Source: [Employee].[TaxCode]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'TaxCode'?: string | null;
    /**
     * Indicates if the Employee should be included in Payroll. <br />  Cascade Source: [Employee].[IncludeInPayroll]
     * @type {boolean}
     * @memberof CreateEmployeeCommand
     */
    'IncludeInPayroll'?: boolean | null;
    /**
     * The date the Employee started with their current Employer. <br />  Cascade Source: [Employee].[EmployeeStartDate]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'EmploymentStartDate'?: string | null;
    /**
     * The date the Employee left their current Employer. <br />  Cascade Source: [Employee].[EmployementLeftDate]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'EmploymentLeftDate'?: string | null;
    /**
     * The date the Employee\'s continuous service should be applied from. <br />  Cascade Source: [Employee].[ContServiceDate]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'ContinuousServiceDate'?: string | null;
    /**
     * The Date of Birth of the Employee. <br />  Cascade Source: [Employee].[DateOfBirth]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'DateOfBirth'?: string | null;
    /**
     * The date of the last working date of the Employee. <br />  Cascade Source: [Employee].[LeaverLastWorkDate]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'LastWorkingDate'?: string | null;
    /**
     * The Gender of the Employee. <br />  Cascade Source: [Employee].[Sex] translated through the GENDER system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'Gender'?: string | null;
    /**
     * The Ethnicity of the Employee. <br />  Cascade Source: [Employee].[EthnicOrigin] translated through the ETHNICTORIGIN system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'Ethnicity'?: string | null;
    /**
     * The Nationality of the Employee. <br />  Cascade Source: [Employee].[Nationality] translated through the NATIONALITY system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'Nationality'?: string | null;
    /**
     * The Religion of the Employee. <br />  Cascade Source: [Employee].[Religion] transalated through the RELIGION system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'Religion'?: string | null;
    /**
     * The reason for the Employee to Leave. <br />  Cascade Source: [Employee].[LeaverReason]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'LeaverReason'?: string | null;
    /**
     * The marrital status of the Employee. <br />  Cascade Source: [Employee.[MaritalStatus] translated through the MARITALSTATUS system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'MaritalStatus'?: string | null;
    /**
     * The <see cref=\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Phone\">Phone Numbers</see> belonging to the Employee.
     * @type {Array<Phone>}
     * @memberof CreateEmployeeCommand
     */
    'Phones'?: Array<Phone> | null;
    /**
     * The <see cref=\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Email\">Email Addresses</see> belonging to the Employee.
     * @type {Array<Email>}
     * @memberof CreateEmployeeCommand
     */
    'Emails'?: Array<Email> | null;
    /**
     * The <see cref=\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Address\">Addresses</see> belonging to the Employee.
     * @type {Array<Address>}
     * @memberof CreateEmployeeCommand
     */
    'Addresses'?: Array<Address> | null;
    /**
     * The Gender Identity of the Employee. <br />  Cascade Source: [Employee].[GenderIdentity] translated through the GenderIdentity system list.
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'GenderIdentity'?: string | null;
    /**
     * The Windows Username of the Employee. <br />  Cascade Source: [Employee].[WindowsUsername]
     * @type {string}
     * @memberof CreateEmployeeCommand
     */
    'WindowsUsername'?: string | null;
}

