import { Period } from './period.model' ;

export class Event {

    //address: string;
    //period : periodType;
    //dob: string;
    //monto: number;
    //uid?: string;
    //"address" : 1,

    constructor(public type: string, public date: string, public arriveTime: string,
        public startTime: string, public endTime: string,
        public status: string, public vsTeam: string, public field: string, public address: string,
        public period: Period ) { }
}