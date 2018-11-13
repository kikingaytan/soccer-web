import { Coach } from "./Coach.model";
import { Player } from "./player.model";
import { Event } from "./event.model";
export class Team {
    constructor(public id: string, public name: string, public yearOfBirth: number,
        public category:string, public coaches:Coach[], public player:Player[],public events:Event[]){}
}