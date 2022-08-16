import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";
import { Type } from "./enums/types";
import { Note } from "./note";


export class Wine {

    id: string;
    name: string;
    producer: string;
    type: Type; // TODO should be enum/list from server
    year: string;
    description: string;
    image: string;
    rating: number;
    notes: Note[];

    public constructor(init?: Partial<Wine>) {
        Object.assign(this, init);
    }
}

@Injectable({
    providedIn: 'root'
})
export class WineAdapter implements Adapter<Wine> {
    adapt(item: any): Wine {
        return new Wine({
            name: item.name,
            producer: item.producer,
            year: item.year,
            description: item.description,
            image: item.image,
            rating: item.rating,
            notes: item.notes
        })
    }
}