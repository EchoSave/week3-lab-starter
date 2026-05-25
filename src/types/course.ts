import { DeliveryMethod } from "./common";

// TODO: Create a type for course ids, which should be strings
type CourseId = String;
// TODO: Create an interface for courses
interface courses {
  Id: string;
  Code: String;
  Title: String;
  Desc: String;
  Cred: number;
  termNum: number;
  Type: DeliveryMethod;
  PreReq: Array<number>;
  Note: String;
}
// The interface should include the following properties:
// an id (hint: use the CourseId type created above)
// a code (ex "CPRG 303")
// a title
// a description
// an optional number of credits (if missing, we will assume 3)
// an optional term number
// an optional delivery method (hint: use the Delivery type from common.ts)
// an optional array of pre-requisite course ids (hint: use the CourseId type created above)
// an optional note

// once all group members have completed their sections, add the following field:
// an optional array of program ids that this course is part of

export interface Course {}
