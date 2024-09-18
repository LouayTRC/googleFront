import { Department } from "./department";
import { Work } from "./work";

export class Task {
    constructor(public id:number,public title:String,public description:String,public dateCreation:Date,public ddl:Date,public status:boolean,public score:number,public pic:String,public department?:Department,public works?:Work[]){}
}
