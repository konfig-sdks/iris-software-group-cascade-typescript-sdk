<div align="center">

[![Visit Iris software group](./header.png)](https://www.iris.co.uk&#x2F;products&#x2F;iris-cascade&#x2F;)

# [Iris software group](https://www.iris.co.uk&#x2F;products&#x2F;iris-cascade&#x2F;)<a id="iris-software-group"></a>

<a href='swaggerv2.json'>Download Swagger Json in OAS2 Format.</a>

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`irissoftwaregroupcascade.absenceDays.createAbsenceDay`](#irissoftwaregroupcascadeabsencedayscreateabsenceday)
  * [`irissoftwaregroupcascade.absenceDays.deleteById`](#irissoftwaregroupcascadeabsencedaysdeletebyid)
  * [`irissoftwaregroupcascade.absenceDays.getById`](#irissoftwaregroupcascadeabsencedaysgetbyid)
  * [`irissoftwaregroupcascade.absenceDays.getList`](#irissoftwaregroupcascadeabsencedaysgetlist)
  * [`irissoftwaregroupcascade.absenceDays.updateAbsenceDay`](#irissoftwaregroupcascadeabsencedaysupdateabsenceday)
  * [`irissoftwaregroupcascade.absenceReasons.getById`](#irissoftwaregroupcascadeabsencereasonsgetbyid)
  * [`irissoftwaregroupcascade.absenceReasons.getEmployeeById`](#irissoftwaregroupcascadeabsencereasonsgetemployeebyid)
  * [`irissoftwaregroupcascade.absenceReasons.list`](#irissoftwaregroupcascadeabsencereasonslist)
  * [`irissoftwaregroupcascade.absences.createNewAbsence`](#irissoftwaregroupcascadeabsencescreatenewabsence)
  * [`irissoftwaregroupcascade.absences.deleteById`](#irissoftwaregroupcascadeabsencesdeletebyid)
  * [`irissoftwaregroupcascade.absences.getById`](#irissoftwaregroupcascadeabsencesgetbyid)
  * [`irissoftwaregroupcascade.absences.getList`](#irissoftwaregroupcascadeabsencesgetlist)
  * [`irissoftwaregroupcascade.absences.updateById`](#irissoftwaregroupcascadeabsencesupdatebyid)
  * [`irissoftwaregroupcascade.bankDetails.createBankDetail`](#irissoftwaregroupcascadebankdetailscreatebankdetail)
  * [`irissoftwaregroupcascade.bankDetails.getById`](#irissoftwaregroupcascadebankdetailsgetbyid)
  * [`irissoftwaregroupcascade.bankDetails.getList`](#irissoftwaregroupcascadebankdetailsgetlist)
  * [`irissoftwaregroupcascade.bankDetails.updateBankDetail`](#irissoftwaregroupcascadebankdetailsupdatebankdetail)
  * [`irissoftwaregroupcascade.benefits.getById`](#irissoftwaregroupcascadebenefitsgetbyid)
  * [`irissoftwaregroupcascade.benefits.getList`](#irissoftwaregroupcascadebenefitsgetlist)
  * [`irissoftwaregroupcascade.employees.createNewEmployee`](#irissoftwaregroupcascadeemployeescreatenewemployee)
  * [`irissoftwaregroupcascade.employees.getById`](#irissoftwaregroupcascadeemployeesgetbyid)
  * [`irissoftwaregroupcascade.employees.getList`](#irissoftwaregroupcascadeemployeesgetlist)
  * [`irissoftwaregroupcascade.employees.updateById`](#irissoftwaregroupcascadeemployeesupdatebyid)
  * [`irissoftwaregroupcascade.entitlements.getById`](#irissoftwaregroupcascadeentitlementsgetbyid)
  * [`irissoftwaregroupcascade.entitlements.getList`](#irissoftwaregroupcascadeentitlementsgetlist)
  * [`irissoftwaregroupcascade.hierarchy.getList`](#irissoftwaregroupcascadehierarchygetlist)
  * [`irissoftwaregroupcascade.hierarchy.getNodeById`](#irissoftwaregroupcascadehierarchygetnodebyid)
  * [`irissoftwaregroupcascade.hierarchy.getPathById`](#irissoftwaregroupcascadehierarchygetpathbyid)
  * [`irissoftwaregroupcascade.jobs.createNewJob`](#irissoftwaregroupcascadejobscreatenewjob)
  * [`irissoftwaregroupcascade.jobs.getById`](#irissoftwaregroupcascadejobsgetbyid)
  * [`irissoftwaregroupcascade.jobs.getList`](#irissoftwaregroupcascadejobsgetlist)
  * [`irissoftwaregroupcascade.jobs.updateById`](#irissoftwaregroupcascadejobsupdatebyid)
  * [`irissoftwaregroupcascade.publicHolidays.getLocationListById`](#irissoftwaregroupcascadepublicholidaysgetlocationlistbyid)
  * [`irissoftwaregroupcascade.publicHolidays.getLocations`](#irissoftwaregroupcascadepublicholidaysgetlocations)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=IRIS%20Software%20Group&serviceName=Cascade&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { IrisSoftwareGroupCascade } from "iris-software-group-cascade-typescript-sdk";

const irissoftwaregroupcascade = new IrisSoftwareGroupCascade({
  // Defining the base path is optional and defaults to https://api.iris.co.uk/hr/v2
  // basePath: "https://api.iris.co.uk/hr/v2",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createAbsenceDayResponse =
  await irissoftwaregroupcascade.absenceDays.createAbsenceDay({
    DayPart: "AM",
  });

console.log(createAbsenceDayResponse);
```

## Reference<a id="reference"></a>


### `irissoftwaregroupcascade.absenceDays.createAbsenceDay`<a id="irissoftwaregroupcascadeabsencedayscreateabsenceday"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAbsenceDayResponse =
  await irissoftwaregroupcascade.absenceDays.createAbsenceDay({
    DayPart: "AM",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### AbsenceId: `string`<a id="absenceid-string"></a>

The ID of the parent Absence. <br />  Must exist in the Attendance Absence Service.

##### EmployeeId: `string`<a id="employeeid-string"></a>

The ID of the Employee. <br />  Must exist in the Employees Service.

##### Date: `string`<a id="date-string"></a>

The date of the Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[StartDate]

##### DurationDays: `number`<a id="durationdays-number"></a>

The duration in days for this Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[DurationDays]

##### DurationMinutes: `number`<a id="durationminutes-number"></a>

The duration in minutes for this Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[Duration]

##### DayPart: [`DayPart`](./models/day-part.ts)<a id="daypart-daypartmodelsday-partts"></a>

The parts of days.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencedays` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceDays.deleteById`<a id="irissoftwaregroupcascadeabsencedaysdeletebyid"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse =
  await irissoftwaregroupcascade.absenceDays.deleteById({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Absence Day to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencedays/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceDays.getById`<a id="irissoftwaregroupcascadeabsencedaysgetbyid"></a>

Gets a single Absence Day based on ID given.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.absenceDays.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Absence Day ID.

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceDayModel](./models/absence-day-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencedays/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceDays.getList`<a id="irissoftwaregroupcascadeabsencedaysgetlist"></a>

Gets a list of all Absence Days.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.absenceDays.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceDayQueryModel](./models/absence-day-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencedays` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceDays.updateAbsenceDay`<a id="irissoftwaregroupcascadeabsencedaysupdateabsenceday"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAbsenceDayResponse =
  await irissoftwaregroupcascade.absenceDays.updateAbsenceDay({
    id: "id_example",
    DayPart: "AM",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Absence Day to update.

##### Date: `string`<a id="date-string"></a>

The date of the Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[StartDate]

##### DurationDays: `number`<a id="durationdays-number"></a>

The duration in days for this Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[DurationDays]

##### DurationMinutes: `number`<a id="durationminutes-number"></a>

The duration in minutes for this Absence Day. <br />  Cascade Source: [EmployeeAttendanceDates].[Duration]

##### DayPart: [`DayPart`](./models/day-part.ts)<a id="daypart-daypartmodelsday-partts"></a>

The parts of days.

##### Id: `string`<a id="id-string"></a>

The ID of the Absence Day. <br />  Must exist in the Attendance Absence Day Service.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencedays/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceReasons.getById`<a id="irissoftwaregroupcascadeabsencereasonsgetbyid"></a>

Gets a single Absence Reason referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.absenceReasons.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Absence Reason ID.

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceReasonModel](./models/absence-reason-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencereasons/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceReasons.getEmployeeById`<a id="irissoftwaregroupcascadeabsencereasonsgetemployeebyid"></a>

Gets a single Employee Absence Reason referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeByIdResponse =
  await irissoftwaregroupcascade.absenceReasons.getEmployeeById({
    id: "id_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Absence Reason ID.

##### employeeId: `string`<a id="employeeid-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeAbsenceReasonModel](./models/employee-absence-reason-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencereasons/{id}/employees/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absenceReasons.list`<a id="irissoftwaregroupcascadeabsencereasonslist"></a>

Gets a list of Absence Reasons

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await irissoftwaregroupcascade.absenceReasons.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceReasonQueryModel](./models/absence-reason-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absencereasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absences.createNewAbsence`<a id="irissoftwaregroupcascadeabsencescreatenewabsence"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAbsenceResponse =
  await irissoftwaregroupcascade.absences.createNewAbsence({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### EmployeeId: `string`<a id="employeeid-string"></a>

The ID of the Employee. <br />  Must exist in the Employees Service. <br />  Cannot be updated once Absence created.

##### AbsenceReasonId: `string`<a id="absencereasonid-string"></a>

The Absence Reason ID. <br />  Must exist in the Attendance Absence Reasons Service. <br />  Cannot be updated once Absence created.

##### Narrative: `string`<a id="narrative-string"></a>

The Narrative relating to the Attendance. <br />  Cascade Source: [EmployeeAttendance].[Narrative]

##### StartDate: `string`<a id="startdate-string"></a>

The Start Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[StartDate]

##### EndDate: `string`<a id="enddate-string"></a>

The End Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[EndDate]  Null if Opened Ended - Cascade Source: [EmployeeAttendance].[OpenEnded]

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absences` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absences.deleteById`<a id="irissoftwaregroupcascadeabsencesdeletebyid"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await irissoftwaregroupcascade.absences.deleteById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Absence to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absences/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absences.getById`<a id="irissoftwaregroupcascadeabsencesgetbyid"></a>

Gets a single Absence referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.absences.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Absence ID.

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceModel](./models/absence-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absences/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absences.getList`<a id="irissoftwaregroupcascadeabsencesgetlist"></a>

Gets a list of Absences.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.absences.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[AbsenceQueryModel](./models/absence-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absences` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.absences.updateById`<a id="irissoftwaregroupcascadeabsencesupdatebyid"></a>

![Beta](https://img.shields.io/badge/Status-Beta-yellow) <b>This API request method is currently in beta testing.</b> To gain access to use this method, please contact <a href='mailto:hrapi@iris.co.uk'>hrapi@iris.co.uk.</a>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await irissoftwaregroupcascade.absences.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Absence to update.

##### Narrative: `string`<a id="narrative-string"></a>

The Narrative relating to the Attendance. <br />  Cascade Source: [EmployeeAttendance].[Narrative]

##### StartDate: `string`<a id="startdate-string"></a>

The Start Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[StartDate]

##### EndDate: `string`<a id="enddate-string"></a>

The End Date of the Attendance. <br />  Cascade Source: [EmployeeAttendance].[EndDate]  Null if Opened Ended - Cascade Source: [EmployeeAttendance].[OpenEnded]

##### Id: `string`<a id="id-string"></a>

The ID of the Absence. <br />  Must exist in the Attendance Absences Service.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/absences/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.bankDetails.createBankDetail`<a id="irissoftwaregroupcascadebankdetailscreatebankdetail"></a>

Creates a Bank Details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBankDetailResponse =
  await irissoftwaregroupcascade.bankDetails.createBankDetail({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### EmployeeId: `string`<a id="employeeid-string"></a>

The ID of the HR Employee. <br />  Must exist in the Employee Service.

##### BankName: `string`<a id="bankname-string"></a>

Bank Name. <br />  Cascade Source: [EmployeeBank].[BankName]

##### BankAddress: [`BankAddress`](./models/bank-address.ts)<a id="bankaddress-bankaddressmodelsbank-addressts"></a>

##### AccountName: `string`<a id="accountname-string"></a>

Account Name. <br />  Cascade Source: [EmployeeBank].[AccountName]

##### AccountNumber: `string`<a id="accountnumber-string"></a>

Account Number. <br />  Cascade Source: [EmployeeBank].[AccountNumber]

##### SortCode: `string`<a id="sortcode-string"></a>

Sort Code. <br />  Cascade Source: [EmployeeBank].[SortCode]

##### RollNumber: `string`<a id="rollnumber-string"></a>

Roll Number. <br />  Cascade Source: [EmployeeBank].[RollNumber]

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bankdetails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.bankDetails.getById`<a id="irissoftwaregroupcascadebankdetailsgetbyid"></a>

Gets a single Bank Details by an ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.bankDetails.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Bank Details ID.

#### 🔄 Return<a id="🔄-return"></a>

[BankDetailsModel](./models/bank-details-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bankdetails/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.bankDetails.getList`<a id="irissoftwaregroupcascadebankdetailsgetlist"></a>

Gets a list of Bank Details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.bankDetails.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[BankDetailsQueryModel](./models/bank-details-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bankdetails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.bankDetails.updateBankDetail`<a id="irissoftwaregroupcascadebankdetailsupdatebankdetail"></a>

Updates Bank Details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBankDetailResponse =
  await irissoftwaregroupcascade.bankDetails.updateBankDetail({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of Bank Details to update.

##### BankName: `string`<a id="bankname-string"></a>

Bank Name. <br />  Cascade Source: [EmployeeBank].[BankName]

##### BankAddress: [`BankAddress`](./models/bank-address.ts)<a id="bankaddress-bankaddressmodelsbank-addressts"></a>

##### AccountName: `string`<a id="accountname-string"></a>

Account Name. <br />  Cascade Source: [EmployeeBank].[AccountName]

##### AccountNumber: `string`<a id="accountnumber-string"></a>

Account Number. <br />  Cascade Source: [EmployeeBank].[AccountNumber]

##### SortCode: `string`<a id="sortcode-string"></a>

Sort Code. <br />  Cascade Source: [EmployeeBank].[SortCode]

##### RollNumber: `string`<a id="rollnumber-string"></a>

Roll Number. <br />  Cascade Source: [EmployeeBank].[RollNumber]

##### Id: `string`<a id="id-string"></a>

The ID of Bank Details to update. <br />  Must exist in Bank Details Service.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/bankdetails/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.benefits.getById`<a id="irissoftwaregroupcascadebenefitsgetbyid"></a>

Gets a single Benefit referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.benefits.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Benefit ID.

#### 🔄 Return<a id="🔄-return"></a>

[BenefitModel](./models/benefit-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/benefits/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.benefits.getList`<a id="irissoftwaregroupcascadebenefitsgetlist"></a>

Gets a list of Benefits.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.benefits.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[BenefitQueryModel](./models/benefit-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/benefits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.employees.createNewEmployee`<a id="irissoftwaregroupcascadeemployeescreatenewemployee"></a>

Creates a new Employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEmployeeResponse =
  await irissoftwaregroupcascade.employees.createNewEmployee({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### DisplayId: `string`<a id="displayid-string"></a>

The Display ID of the Employee. <br />  If provided must be unqiue, If null then it will automatically be generated. <br />  Cascade Source: [Employee].[DisplayEmployeeId]

##### TitleHonorific: `string`<a id="titlehonorific-string"></a>

The Title of the Employee. E.g. Mr, Mrs, Miss. <br />  Cascade Source: [Employee].[Title] translated through the TITLE system list.

##### FirstName: `string`<a id="firstname-string"></a>

The First Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Forename]

##### KnownAs: `string`<a id="knownas-string"></a>

The name the Employee is commonly known as. <br />  Cascade Source: [Employee].[KnownAs]

##### OtherName: `string`<a id="othername-string"></a>

Any other name that the Employee has. <br />  Cascade Source: [Employee].[OtherName]

##### LastName: `string`<a id="lastname-string"></a>

The Last Name, Surname or Family Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Surname]

##### CostCentre: `string`<a id="costcentre-string"></a>

The Cost Centre assigned to the Employee. <br />  Cascade Source: [Employee].[CostCentre]

##### WorkingStatus: `string`<a id="workingstatus-string"></a>

The Status of the Employee E.g. On Holiday, Sick. <br />  Automatically Calculated. <br />  Cascade Source: [Sysview_Employee_Status].[StatusDescription]

##### IsManager: `boolean`<a id="ismanager-boolean"></a>

Indicates if the Employee is a Manager. <br />  True if any other Employee\\\'s active <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Job\\\">Job</see> has this Employee as their Line Manager. <br />  Automaticaly Calculated.

##### NationalInsuranceNumber: `string`<a id="nationalinsurancenumber-string"></a>

The National Insurance Number of the Employee. <br />  Cascade Source: [Employee].[NationalInsuranceNo]

##### PayrollId: `string`<a id="payrollid-string"></a>

The Payroll ID of the Employee. <br />  Cascade Source: [Employee].[PayrollId]

##### TaxCode: `string`<a id="taxcode-string"></a>

The Tax Code of the Employee. <br />  Cascade Source: [Employee].[TaxCode]

##### IncludeInPayroll: `boolean`<a id="includeinpayroll-boolean"></a>

Indicates if the Employee should be included in Payroll. <br />  Cascade Source: [Employee].[IncludeInPayroll]

##### EmploymentStartDate: `string`<a id="employmentstartdate-string"></a>

The date the Employee started with their current Employer. <br />  Cascade Source: [Employee].[EmployeeStartDate]

##### EmploymentLeftDate: `string`<a id="employmentleftdate-string"></a>

The date the Employee left their current Employer. <br />  Cascade Source: [Employee].[EmployementLeftDate]

##### ContinuousServiceDate: `string`<a id="continuousservicedate-string"></a>

The date the Employee\\\'s continuous service should be applied from. <br />  Cascade Source: [Employee].[ContServiceDate]

##### DateOfBirth: `string`<a id="dateofbirth-string"></a>

The Date of Birth of the Employee. <br />  Cascade Source: [Employee].[DateOfBirth]

##### LastWorkingDate: `string`<a id="lastworkingdate-string"></a>

The date of the last working date of the Employee. <br />  Cascade Source: [Employee].[LeaverLastWorkDate]

##### Gender: `string`<a id="gender-string"></a>

The Gender of the Employee. <br />  Cascade Source: [Employee].[Sex] translated through the GENDER system list.

##### Ethnicity: `string`<a id="ethnicity-string"></a>

The Ethnicity of the Employee. <br />  Cascade Source: [Employee].[EthnicOrigin] translated through the ETHNICTORIGIN system list.

##### Nationality: `string`<a id="nationality-string"></a>

The Nationality of the Employee. <br />  Cascade Source: [Employee].[Nationality] translated through the NATIONALITY system list.

##### Religion: `string`<a id="religion-string"></a>

The Religion of the Employee. <br />  Cascade Source: [Employee].[Religion] transalated through the RELIGION system list.

##### LeaverReason: `string`<a id="leaverreason-string"></a>

The reason for the Employee to Leave. <br />  Cascade Source: [Employee].[LeaverReason]

##### MaritalStatus: `string`<a id="maritalstatus-string"></a>

The marrital status of the Employee. <br />  Cascade Source: [Employee.[MaritalStatus] translated through the MARITALSTATUS system list.

##### Phones: [`Phone`](./models/phone.ts)[]<a id="phones-phonemodelsphonets"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Phone\\\">Phone Numbers</see> belonging to the Employee.

##### Emails: [`Email`](./models/email.ts)[]<a id="emails-emailmodelsemailts"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Email\\\">Email Addresses</see> belonging to the Employee.

##### Addresses: [`Address`](./models/address.ts)[]<a id="addresses-addressmodelsaddressts"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Address\\\">Addresses</see> belonging to the Employee.

##### GenderIdentity: `string`<a id="genderidentity-string"></a>

The Gender Identity of the Employee. <br />  Cascade Source: [Employee].[GenderIdentity] translated through the GenderIdentity system list.

##### WindowsUsername: `string`<a id="windowsusername-string"></a>

The Windows Username of the Employee. <br />  Cascade Source: [Employee].[WindowsUsername]

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.employees.getById`<a id="irissoftwaregroupcascadeemployeesgetbyid"></a>

Gets a single Employee referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.employees.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Employee ID.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeModel](./models/employee-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.employees.getList`<a id="irissoftwaregroupcascadeemployeesgetlist"></a>

Gets a list of Employees.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.employees.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeQueryModel](./models/employee-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.employees.updateById`<a id="irissoftwaregroupcascadeemployeesupdatebyid"></a>

Update an Employee referenced by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await irissoftwaregroupcascade.employees.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of Employee to update.

##### DisplayId: `string`<a id="displayid-string"></a>

The Display ID of the Employee. <br />  If provided must be unqiue, If null then it will automatically be generated. <br />  Cascade Source: [Employee].[DisplayEmployeeId]

##### TitleHonorific: `string`<a id="titlehonorific-string"></a>

The Title of the Employee. E.g. Mr, Mrs, Miss. <br />  Cascade Source: [Employee].[Title] translated through the TITLE system list.

##### FirstName: `string`<a id="firstname-string"></a>

The First Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Forename]

##### KnownAs: `string`<a id="knownas-string"></a>

The name the Employee is commonly known as. <br />  Cascade Source: [Employee].[KnownAs]

##### OtherName: `string`<a id="othername-string"></a>

Any other name that the Employee has. <br />  Cascade Source: [Employee].[OtherName]

##### LastName: `string`<a id="lastname-string"></a>

The Last Name, Surname or Family Name of the Employee. <br />  Required. <br />  Cascade Source: [Employee].[Surname]

##### CostCentre: `string`<a id="costcentre-string"></a>

The Cost Centre assigned to the Employee. <br />  Cascade Source: [Employee].[CostCentre]

##### WorkingStatus: `string`<a id="workingstatus-string"></a>

The Status of the Employee E.g. On Holiday, Sick. <br />  Automatically Calculated. <br />  Cascade Source: [Sysview_Employee_Status].[StatusDescription]

##### IsManager: `boolean`<a id="ismanager-boolean"></a>

Indicates if the Employee is a Manager. <br />  True if any other Employee\\\'s active <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Job\\\">Job</see> has this Employee as their Line Manager. <br />  Automaticaly Calculated.

##### NationalInsuranceNumber: `string`<a id="nationalinsurancenumber-string"></a>

The National Insurance Number of the Employee. <br />  Cascade Source: [Employee].[NationalInsuranceNo]

##### PayrollId: `string`<a id="payrollid-string"></a>

The Payroll ID of the Employee. <br />  Cascade Source: [Employee].[PayrollId]

##### TaxCode: `string`<a id="taxcode-string"></a>

The Tax Code of the Employee. <br />  Cascade Source: [Employee].[TaxCode]

##### IncludeInPayroll: `boolean`<a id="includeinpayroll-boolean"></a>

Indicates if the Employee should be included in Payroll. <br />  Cascade Source: [Employee].[IncludeInPayroll]

##### EmploymentStartDate: `string`<a id="employmentstartdate-string"></a>

The date the Employee started with their current Employer. <br />  Cascade Source: [Employee].[EmployeeStartDate]

##### EmploymentLeftDate: `string`<a id="employmentleftdate-string"></a>

The date the Employee left their current Employer. <br />  Cascade Source: [Employee].[EmployementLeftDate]

##### ContinuousServiceDate: `string`<a id="continuousservicedate-string"></a>

The date the Employee\\\'s continuous service should be applied from. <br />  Cascade Source: [Employee].[ContServiceDate]

##### DateOfBirth: `string`<a id="dateofbirth-string"></a>

The Date of Birth of the Employee. <br />  Cascade Source: [Employee].[DateOfBirth]

##### LastWorkingDate: `string`<a id="lastworkingdate-string"></a>

The date of the last working date of the Employee. <br />  Cascade Source: [Employee].[LeaverLastWorkDate]

##### Gender: `string`<a id="gender-string"></a>

The Gender of the Employee. <br />  Cascade Source: [Employee].[Sex] translated through the GENDER system list.

##### Ethnicity: `string`<a id="ethnicity-string"></a>

The Ethnicity of the Employee. <br />  Cascade Source: [Employee].[EthnicOrigin] translated through the ETHNICTORIGIN system list.

##### Nationality: `string`<a id="nationality-string"></a>

The Nationality of the Employee. <br />  Cascade Source: [Employee].[Nationality] translated through the NATIONALITY system list.

##### Religion: `string`<a id="religion-string"></a>

The Religion of the Employee. <br />  Cascade Source: [Employee].[Religion] transalated through the RELIGION system list.

##### LeaverReason: `string`<a id="leaverreason-string"></a>

The reason for the Employee to Leave. <br />  Cascade Source: [Employee].[LeaverReason]

##### MaritalStatus: `string`<a id="maritalstatus-string"></a>

The marrital status of the Employee. <br />  Cascade Source: [Employee.[MaritalStatus] translated through the MARITALSTATUS system list.

##### Phones: [`Phone`](./models/phone.ts)[]<a id="phones-phonemodelsphonets"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Phone\\\">Phone Numbers</see> belonging to the Employee.

##### Emails: [`Email`](./models/email.ts)[]<a id="emails-emailmodelsemailts"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Email\\\">Email Addresses</see> belonging to the Employee.

##### Addresses: [`Address`](./models/address.ts)[]<a id="addresses-addressmodelsaddressts"></a>

The <see cref=\\\"T:Iris.Api.Hr.Employee.Domain.Entities.V1.Address\\\">Addresses</see> belonging to the Employee.

##### GenderIdentity: `string`<a id="genderidentity-string"></a>

The Gender Identity of the Employee. <br />  Cascade Source: [Employee].[GenderIdentity] translated through the GenderIdentity system list.

##### WindowsUsername: `string`<a id="windowsusername-string"></a>

The Windows Username of the Employee. <br />  Cascade Source: [Employee].[WindowsUsername]

##### Id: `string`<a id="id-string"></a>

The ID of the Employee. <br />  Must exist in the Employee Service.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.entitlements.getById`<a id="irissoftwaregroupcascadeentitlementsgetbyid"></a>

Gets an Entitlement by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.entitlements.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Entitlement ID.

#### 🔄 Return<a id="🔄-return"></a>

[EntitlementModel](./models/entitlement-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/entitlements/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.entitlements.getList`<a id="irissoftwaregroupcascadeentitlementsgetlist"></a>

Gets a list of Entitlements.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.entitlements.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[EntitlementQueryModel](./models/entitlement-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attendance/entitlements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.hierarchy.getList`<a id="irissoftwaregroupcascadehierarchygetlist"></a>

Gets a list of Hierarchy Nodes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.hierarchy.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[HierarchyNodeQueryModel](./models/hierarchy-node-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hierarchy` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.hierarchy.getNodeById`<a id="irissoftwaregroupcascadehierarchygetnodebyid"></a>

Gets a single Hierarchy Node by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNodeByIdResponse =
  await irissoftwaregroupcascade.hierarchy.getNodeById({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Hierarchy Node ID.

#### 🔄 Return<a id="🔄-return"></a>

[HierarchyNodeModel](./models/hierarchy-node-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hierarchy/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.hierarchy.getPathById`<a id="irissoftwaregroupcascadehierarchygetpathbyid"></a>

Gets a Hierarchy Path by ID. The path is an array of nodes traversed from the root to the node specified.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPathByIdResponse =
  await irissoftwaregroupcascade.hierarchy.getPathById({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Hierarchy Node ID.

#### 🔄 Return<a id="🔄-return"></a>

[HierarchyNodeModel](./models/hierarchy-node-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hierarchy/{id}/path` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.jobs.createNewJob`<a id="irissoftwaregroupcascadejobscreatenewjob"></a>

Creates a new Job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewJobResponse = await irissoftwaregroupcascade.jobs.createNewJob(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### JobTitle: `string`<a id="jobtitle-string"></a>

The title of the Job. <br />  Cascade Source: [EmployeeJobs].[JobTitle]

##### Classification: `string`<a id="classification-string"></a>

The classification of the Job e.g. Technical, Professional, Managerial. <br />  Cascade Source: [EmployeeJobs].[Classification] translated through the JOBCLASSIFICATION system list.

##### StartDate: `string`<a id="startdate-string"></a>

The start date of the Job. <br />  Required. <br />  Cascade Source: [EmployeeJobs].[SYS_EffectiveDate]

##### EndDate: `string`<a id="enddate-string"></a>

The end date of the Job. <br />  Automatically Calculated. <br />  Cascade Source: [EmployeeJobs].[SYS_CalculatedEndDate]

##### WorkingCalendar: `string`<a id="workingcalendar-string"></a>

The name of the working calendar of the Job. <br />  Cascade Source: [EmployeeJobs].[CalendarName] which comes from [ValidWorkingCalendar].[CalendarName]

##### LineManagerId: `string`<a id="linemanagerid-string"></a>

The ID of the Employee that is the line manager for this Job. <br />  Must exist in Employees Service. <br />  Cascade Source: [EmployeeJobs].[WorksForEmployeeId]

##### HierarchyNodeId: `string`<a id="hierarchynodeid-string"></a>

The ID of the Employee\\\'s Hierarchy node of the Job. <br />  Must exist in Hierarchy Service.

##### Active: `boolean`<a id="active-boolean"></a>

The Job is currently active. <br />  Automatically Calculated. <br />  Cascade Source: [EmployeeJobs].[sys_ActiveJob]

##### Salary: `number`<a id="salary-number"></a>

The salary of the Job. <br />  Cascade Source: [EmployeeJobs].[BasicPay]

##### EmployeeId: `string`<a id="employeeid-string"></a>

The ID of the Employee of the Job. <br />  Must exist in Employee Service.

##### Contract: `string`<a id="contract-string"></a>

The contract of the Job e.g. Full Time, Part Time. <br />  Cascade Source: [EmployeeJobs].[ContractType] translated through the EMPLOYMENTTYPES system list.

##### PayFrequency: `string`<a id="payfrequency-string"></a>

How often the Job\\\'s salary will be paid e.g. Monthly, Weekly. <br />  Cascade Source: [EmployeeJobs].[PayFrequency] translated through the PAY FREQ system list.

##### PayBasis: `string`<a id="paybasis-string"></a>

The unit of measurement the salary is specified against e.g. Yearly, Hourly. <br />  Cascade Source: [EmployeeJobs].[PayBasis] translated through the PAY BASIS system list.

##### FullTimeEquivalent: `number`<a id="fulltimeequivalent-number"></a>

The full-time equivalent to a full time employee\\\'s hours e.g. 1 = Full Time, 0.5 = Half Hours. <br />  Cascade Source: [EmployeeJobs].[FTE].

##### ChangeReason: `string`<a id="changereason-string"></a>

The reason for the change. <br />  Cascade Source: [EmployeeJobs].[Reason].

##### NextIncrementDate: `string`<a id="nextincrementdate-string"></a>

The next increment date.  <br />  Cascade Source: [EmployeeJobs].[IncrementDate].

##### TimesheetLocation: `string`<a id="timesheetlocation-string"></a>

The timesheet location. <br />  Cascade Source: [EmployeeJobs].[TimesheetLocation].

##### TimesheetLunchDuration: `string`<a id="timesheetlunchduration-string"></a>

The time set lunch duration. <br />  Cascade Source: [EmployeeJobs].[LunchDuration].

##### ExpenseSubmissionFrequency: `string`<a id="expensesubmissionfrequency-string"></a>

The expense submission frequency. <br />  Cascade Source: [EmployeeJobs].[ExpenseSubmissionFrequency].

##### CostCentre: `string`<a id="costcentre-string"></a>

The cost centre. <br />  Cascade Source: [EmployeeJobs].[CostCentre].

##### JobFamily: `string`<a id="jobfamily-string"></a>

The job family. <br />  Cascade Source: [EmployeeJobs].[JobFamily].

##### ApprenticeUnder25: `boolean`<a id="apprenticeunder25-boolean"></a>

The flag to indicate if the employee is an apprentice under 25. <br />  Cascade Source: [EmployeeJobs].[ApprenticeUnder25].

##### ApprenticeshipEndDate: `string`<a id="apprenticeshipenddate-string"></a>

The end date of the apprenticeship. <br />  Cascade Source: [EmployeeJobs].[ApprenticeshipEndDate].

##### ContractEndDate: `string`<a id="contractenddate-string"></a>

The end date of the contract. <br />  Cascade Source: [EmployeeJobs].[ContractEndDate].

##### NormalHours: `number`<a id="normalhours-number"></a>

Normal hours. <br />  Cascade Source: [EmployeeJobs].[NormalHours].

##### RealTimeInformationIrregularFrequency: `string`<a id="realtimeinformationirregularfrequency-string"></a>

The real time information of irregular frequency. <br />  Cascade Source: [EmployeeJobs].[RTIIrregularFrequency].

##### NoticePeriod: `string`<a id="noticeperiod-string"></a>

The notice period. <br />  Cascade Source: [EmployeeJobs].[NoticePeriod].

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.jobs.getById`<a id="irissoftwaregroupcascadejobsgetbyid"></a>

Gets a single Job referenced by an ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await irissoftwaregroupcascade.jobs.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Job ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.jobs.getList`<a id="irissoftwaregroupcascadejobsgetlist"></a>

Gets a list of Jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await irissoftwaregroupcascade.jobs.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[JobQueryModel](./models/job-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.jobs.updateById`<a id="irissoftwaregroupcascadejobsupdatebyid"></a>

Update a Job referenced by an ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await irissoftwaregroupcascade.jobs.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Job to update.

##### JobTitle: `string`<a id="jobtitle-string"></a>

The title of the Job. <br />  Cascade Source: [EmployeeJobs].[JobTitle]

##### Classification: `string`<a id="classification-string"></a>

The classification of the Job e.g. Technical, Professional, Managerial. <br />  Cascade Source: [EmployeeJobs].[Classification] translated through the JOBCLASSIFICATION system list.

##### StartDate: `string`<a id="startdate-string"></a>

The start date of the Job. <br />  Required. <br />  Cascade Source: [EmployeeJobs].[SYS_EffectiveDate]

##### EndDate: `string`<a id="enddate-string"></a>

The end date of the Job. <br />  Automatically Calculated. <br />  Cascade Source: [EmployeeJobs].[SYS_CalculatedEndDate]

##### WorkingCalendar: `string`<a id="workingcalendar-string"></a>

The name of the working calendar of the Job. <br />  Cascade Source: [EmployeeJobs].[CalendarName] which comes from [ValidWorkingCalendar].[CalendarName]

##### LineManagerId: `string`<a id="linemanagerid-string"></a>

The ID of the Employee that is the line manager for this Job. <br />  Must exist in Employees Service. <br />  Cascade Source: [EmployeeJobs].[WorksForEmployeeId]

##### HierarchyNodeId: `string`<a id="hierarchynodeid-string"></a>

The ID of the Employee\\\'s Hierarchy node of the Job. <br />  Must exist in Hierarchy Service.

##### Active: `boolean`<a id="active-boolean"></a>

The Job is currently active. <br />  Automatically Calculated. <br />  Cascade Source: [EmployeeJobs].[sys_ActiveJob]

##### Salary: `number`<a id="salary-number"></a>

The salary of the Job. <br />  Cascade Source: [EmployeeJobs].[BasicPay]

##### Contract: `string`<a id="contract-string"></a>

The contract of the Job e.g. Full Time, Part Time. <br />  Cascade Source: [EmployeeJobs].[ContractType] translated through the EMPLOYMENTTYPES system list.

##### PayFrequency: `string`<a id="payfrequency-string"></a>

How often the Job\\\'s salary will be paid e.g. Monthly, Weekly. <br />  Cascade Source: [EmployeeJobs].[PayFrequency] translated through the PAY FREQ system list.

##### PayBasis: `string`<a id="paybasis-string"></a>

The unit of measurement the salary is specified against e.g. Yearly, Hourly. <br />  Cascade Source: [EmployeeJobs].[PayBasis] translated through the PAY BASIS system list.

##### FullTimeEquivalent: `number`<a id="fulltimeequivalent-number"></a>

The full-time equivalent to a full time employee\\\'s hours e.g. 1 = Full Time, 0.5 = Half Hours. <br />  Cascade Source: [EmployeeJobs].[FTE].

##### ChangeReason: `string`<a id="changereason-string"></a>

The reason for the change. <br />  Cascade Source: [EmployeeJobs].[Reason].

##### NextIncrementDate: `string`<a id="nextincrementdate-string"></a>

The next increment date.  <br />  Cascade Source: [EmployeeJobs].[IncrementDate].

##### TimesheetLocation: `string`<a id="timesheetlocation-string"></a>

The timesheet location. <br />  Cascade Source: [EmployeeJobs].[TimesheetLocation].

##### TimesheetLunchDuration: `string`<a id="timesheetlunchduration-string"></a>

The time set lunch duration. <br />  Cascade Source: [EmployeeJobs].[LunchDuration].

##### ExpenseSubmissionFrequency: `string`<a id="expensesubmissionfrequency-string"></a>

The expense submission frequency. <br />  Cascade Source: [EmployeeJobs].[ExpenseSubmissionFrequency].

##### CostCentre: `string`<a id="costcentre-string"></a>

The cost centre. <br />  Cascade Source: [EmployeeJobs].[CostCentre].

##### JobFamily: `string`<a id="jobfamily-string"></a>

The job family. <br />  Cascade Source: [EmployeeJobs].[JobFamily].

##### ApprenticeUnder25: `boolean`<a id="apprenticeunder25-boolean"></a>

The flag to indicate if the employee is an apprentice under 25. <br />  Cascade Source: [EmployeeJobs].[ApprenticeUnder25].

##### ApprenticeshipEndDate: `string`<a id="apprenticeshipenddate-string"></a>

The end date of the apprenticeship. <br />  Cascade Source: [EmployeeJobs].[ApprenticeshipEndDate].

##### ContractEndDate: `string`<a id="contractenddate-string"></a>

The end date of the contract. <br />  Cascade Source: [EmployeeJobs].[ContractEndDate].

##### NormalHours: `number`<a id="normalhours-number"></a>

Normal hours. <br />  Cascade Source: [EmployeeJobs].[NormalHours].

##### RealTimeInformationIrregularFrequency: `string`<a id="realtimeinformationirregularfrequency-string"></a>

The real time information of irregular frequency. <br />  Cascade Source: [EmployeeJobs].[RTIIrregularFrequency].

##### NoticePeriod: `string`<a id="noticeperiod-string"></a>

The notice period. <br />  Cascade Source: [EmployeeJobs].[NoticePeriod].

##### Id: `string`<a id="id-string"></a>

The ID of the Job to update. <br />  Must exist in the Jobs Service.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.publicHolidays.getLocationListById`<a id="irissoftwaregroupcascadepublicholidaysgetlocationlistbyid"></a>

Gets a location based Public Holiday list by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationListByIdResponse =
  await irissoftwaregroupcascade.publicHolidays.getLocationListById({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Public Holiday ID.

#### 🔄 Return<a id="🔄-return"></a>

[PublicHolidayModel](./models/public-holiday-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/publicholidays/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `irissoftwaregroupcascade.publicHolidays.getLocations`<a id="irissoftwaregroupcascadepublicholidaysgetlocations"></a>

Gets a set of Public Holidays with locations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationsResponse =
  await irissoftwaregroupcascade.publicHolidays.getLocations({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### $top: `number`<a id="top-number"></a>

Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)

##### $skip: `number`<a id="skip-number"></a>

Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)

##### $filter: `string`<a id="filter-string"></a>

Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)

##### $select: `string`[]<a id="select-string"></a>

Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)

##### $orderby: `string`<a id="orderby-string"></a>

Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)

##### $count: `boolean`<a id="count-boolean"></a>

Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)

#### 🔄 Return<a id="🔄-return"></a>

[PublicHolidayQueryModel](./models/public-holiday-query-model.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/publicholidays` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
