import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "src/app/shared/models/wine";
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Type } from "src/app/shared/models/enums/types";
import { News } from "src/app/shared/models/news";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    wines: Wine[] = [];
    news: News[] = [];

    constructor() {
        this.initData();
    }


    public getWines(): Observable<Wine[]> {
        return of(this.wines).pipe(delay(1000));
    }

    public getNews(): Observable<News[]> {
        return of(this.news).pipe(delay(1000));
    }

    /*public getWine(id: string): Observable<Wine> {
        return of(this.wines.find(wine => wine.id === id));
    }


    public addWine(wine: Wine) {
        let id = Math.max.apply(null, this.wines.map(wine => wine.id));
        wine.id = id + 1;
        this.wines.push(wine);
    }*/

    private initData() {

        this.news.push(new News({ id: 1, title: "Winery site", description: "Winery is a site for people who enjoy port. Here you can browse different types of port and read about characteristics, ratings and notes of a wide variety. I will continue updating the site with my favorite ports. I hope you will enjoy them as much as I do. Happy browsing.", date: new Date()}));
        this.news.push(new News({ id: 2, title: "Lorem Ipsum Dolor", description: "roin venenatis, erat ut tempor vehicula, eros diam semper felis, eget sollicitudin diam elit pellentesque lorem. Vestibulum congue, nunc et consequat vehicula, turpis nisl consectetur velit, at feugiat ligula purus ac nunc. Integer dui justo, eleifend sed congue sed, facilisis quis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eros est, dapibus a laoreet et, c", date: new Date()}));

    }
}