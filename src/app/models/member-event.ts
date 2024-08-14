import { Admin } from "./admin";
import { Event } from "./event";
import { Member } from "./member";
import { User } from "./user";

export class MemberEvent {
    constructor(public id:number,public event:Event,public member:Member,public present:boolean,public updatedAt?:Date,public updatedBy?:Admin){}
}
