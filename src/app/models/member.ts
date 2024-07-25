import { Department } from "./department";
import { User } from "./user";
import { Work } from "./work";

export class Member {
    constructor(public member_id:number,public score:number,public birthday:Date,public cin:String,public phone:String,public user:User,public departments:Department[],public works:Work[]){}
}
