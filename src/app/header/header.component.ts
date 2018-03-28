import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

title = '';
listePersonne = ['Suspect', 'Témoin', 'Victime'];

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  selectMenu (menu) {
    this.appService.selectedMenu = menu;
    console.log(this.appService.selectedMenu);
  }

  changeTitle(titre) {
    this.title = titre;
   }


}
