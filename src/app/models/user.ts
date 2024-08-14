import { Admin } from "./admin";
import { Department } from "./department";
import { Member } from "./member";
import { Role } from "./role";
import { Work } from "./work";


export class User {
    constructor(public id:number,public fullname:String,public username:String,public mail:String,public password:String,public pdp:String,public roles:Role[],public enabled:boolean,public member?:Member,public admin?:Admin){}
}
