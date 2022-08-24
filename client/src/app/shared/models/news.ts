import { Injectable } from "@angular/core";
import { Adapter } from "../interfaces/adapter";

export class News {
    id: number;
    title: string;
    description: string;
    date: Date;

    public constructor(init?: Partial<News>) {
        Object.assign(this, init);
    }
}

@Injectable({
    providedIn: 'root'
})
export class NewsAdapter implements Adapter<News> {
    adapt(item: any): News {
        return new News({
            id: item.id,
            title: item.title, 
            description: item.description,
            date: item.date            
        })
    }
}