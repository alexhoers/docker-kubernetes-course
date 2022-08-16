import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Database } from 'firebase/database';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WineService } from 'src/app/core/services/wine.service';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  news: Observable<News[]>;

  constructor() {

  }

  ngOnInit(): void {

  }

}
