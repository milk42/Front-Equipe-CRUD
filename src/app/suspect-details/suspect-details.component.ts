import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Component({
  selector: 'app-suspect-details',
  templateUrl: './suspect-details.component.html',
  styleUrls: ['./suspect-details.component.css']
})
export class SuspectDetailsComponent implements OnInit {

  public suspectId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

      this.route.paramMap.subscribe((params: ParamMap) => {
        console.log( params.get('id'));
        this.suspectId = params.get('id');
      });
   }


}
