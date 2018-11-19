export class Period {

    //address: string;
    //period : periodType;
    //dob: string;
    //monto: number;
    //uid?: string;
    //"address" : 1,

    constructor(public type:string, public fromDate:string,public toDate:string, 
        public daysOfWeek:string[]){}
    
}