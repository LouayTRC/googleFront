import { Department } from "./department";

export class Event {
    constructor(public id:number,public title:String,public description:String,public dateEvent:Date,public place:String,public status:boolean,public pic:String,public departments:Department[]){}
}
