import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { HttpServe } from './shared/services/http/http-serve.service'
// import { } from

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Able Pro 7 5+';

  constructor(private router: Router,private http: HttpServe) { 
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
