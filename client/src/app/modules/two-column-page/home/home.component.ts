import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { News } from 'src/app/shared/models/news';
import { finalize } from 'rxjs/internal/operators';
import { Auth, getRedirectResult } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: News[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService, private afAuth: Auth, private router: Router) { 
    dataService.getNews().pipe(finalize(()=>{this.loading=false})).subscribe( data => {
      this.newsList = data;
    })
  }

  ngOnInit(): void {
    /*getRedirectResult(this.afAuth).then(result => {
      if(result.user != null) {
        this.router.navigate(['about']);
      }
    })*/
  }

}
