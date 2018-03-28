import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';


@Component({
  selector: 'app-v-details',
  templateUrl: './v-details.component.html',
  styleUrls: ['./v-details.component.css']
})
export class VDetailsComponent implements OnInit {

   public vehiculesId;


   constructor(private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
      //  const id = this.route.snapshot.paramMap.get('id');
      // Ne change pas dynamiquement l'id à l'initiation du component

      this.route.paramMap.subscribe((params: ParamMap) => {
        console.log( params.get('id'));
        this.vehiculesId = params.get('id');
        // Diffuse le changement de paramètre à l'inititation du component
      });
      //  observable paramMap qui renvoi les infos de la route activée
      // fonction exécutée à chaque fois que la route change (id)
      }



}
