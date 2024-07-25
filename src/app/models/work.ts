import { Member } from "./member";
import { Task } from "./Task";
import { User } from "./user";

export class Work {
    constructor(public id:number,public url:String,public note:number,public dateDepo:Date,public task:Task,public member:Member){}
}
