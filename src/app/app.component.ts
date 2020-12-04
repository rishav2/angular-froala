import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'angular-froala';
  ngOnInit(){

  }
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };
}
