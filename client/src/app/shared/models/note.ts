import { Dictionary } from "../interfaces/dictionary";

export class Note implements Dictionary {
    
    id: string;
    value: string;

    public constructor(init?: Partial<Note>) {
        Object.assign(this, init);
    }
}
