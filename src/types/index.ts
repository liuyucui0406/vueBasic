import mitt from 'mitt'
interface RuleProp {
    type:'required'|'email';
    message:string
}
export type RulesProp = RuleProp[]

export interface ColumnProps{
    id:number;
    title:string;
    avatar?:string;
    description:string;
}


export const emitter = mitt()