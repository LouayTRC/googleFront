import { Task } from "./Task";



export class Department {
    constructor(public id:number,public name:String,public tasks:Task[]){}
}
