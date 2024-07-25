import { Member } from "./member";

export class MonthScore {
    constructor(public score_id:number,public member:Member,public month:String,public year:number,public departPoints:number,public contribution:number,public discipline:number,public score:number){}
}
