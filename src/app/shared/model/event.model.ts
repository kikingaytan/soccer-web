import { Period } from './period.model' ;

export class Event {
    //uid?: string;
    constructor(public type: string, public date: string, public arriveTime: string,
        public startTime: string, public endTime: string,
        public status: string, public vsTeam: string, public field: string, public address: string,
        public period: Period ) { }
}
