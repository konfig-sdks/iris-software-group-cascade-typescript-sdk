/*
HR API

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

The version of the OpenAPI document: 2
Contact: hrapi@iris.co.uk

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UpdateAbsenceCommand
 */
export interface UpdateAbsenceCommand {
    /**
     * The Narrative relating to the Attendance. <br />  Cascade Source: [EmployeeAttendance].[Narrative]
     * @type {string}
     * @memberof UpdateAbsenceCommand
     */
    'Narrative'?: string | null;
    /**
     * The Start Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[StartDate]
     * @type {string}
     * @memberof UpdateAbsenceCommand
     */
    'StartDate'?: string | null;
    /**
     * The End Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[EndDate]  Null if Opened Ended - Cascade Source: [EmployeeAttendance].[OpenEnded]
     * @type {string}
     * @memberof UpdateAbsenceCommand
     */
    'EndDate'?: string | null;
    /**
     * The ID of the Absence. <br />  Must exist in the Attendance Absences Service.
     * @type {string}
     * @memberof UpdateAbsenceCommand
     */
    'Id'?: string | null;
}

