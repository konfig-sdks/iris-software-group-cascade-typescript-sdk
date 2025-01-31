/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An HR Attendance Absence Reason.
 * @export
 * @interface AbsenceReasonModel
 */
export interface AbsenceReasonModel {
    /**
     * The Parent ID of this Absence Reason. <br />  Cascade Source: [ValidAttendanceTypes].[Key].
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'ParentId'?: string | null;
    /**
     * The Name of this Absence Reason. <br />  Cascade Source: <br />  [ValidAttendanceCategory].[Category] when ParentID is null; <br />  [ValidAttendanceTypes].[Type] when ParentID is not null.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'Name'?: string | null;
    /**
     * This Absence Reason represents a Holiday. <br />  Cascade Source: [ValidAttendanceCategory].[Holiday]
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'Holiday'?: boolean | null;
    /**
     * This Absence Reason represents an Absence. <br />  Cascade Source: [ValidAttendanceCategory].[Absent]
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'Absent'?: boolean | null;
    /**
     * This Absence Reason represents a Sickness. <br />  Cascade Source: [ValidAttendanceCategory].[Sick]
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'Sick'?: boolean | null;
    /**
     * This Absence Reason has Statutory Maternity Pay. <br />  Cascade Source: [ValidAttendanceCategory].[SMPApplicable]
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'StatutoryMaternityPayApplicable'?: boolean | null;
    /**
     * This Absence Reason represents an absence for Study or Exam. <br />  Cascade Source: [ValidAttendanceCategory].[Code] = 96 or 97
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'StudyExam'?: boolean | null;
    /**
     * This Absence Reason represents Flexi Leave. <br />  Cascade Source: [ValidAttendanceCategory].[Code] = 11
     * @type {boolean}
     * @memberof AbsenceReasonModel
     */
    'FlexiLeave'?: boolean | null;
    /**
     * The ID of the Absence Reason. <br />  This field is generated by Iris HR platform and not related to the Cascade ID.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'Id'?: string | null;
    /**
     * The date time when the Absence Reason was created in the Iris HR platform.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'CreatedOn'?: string;
    /**
     * Not used as the Iris HR platform has no concept of users at the moment.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'CreatedBy'?: string | null;
    /**
     * The date time when the Absence Reason was created or last updated.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'LastModifiedOn'?: string | null;
    /**
     * Not used as the Iris HR platform has no concept of users at the moment.
     * @type {string}
     * @memberof AbsenceReasonModel
     */
    'LastModifiedBy'?: string | null;
}

