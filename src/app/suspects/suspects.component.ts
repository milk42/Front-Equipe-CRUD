import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { SuspectService } from '../suspect.service';
import { Suspect } from '../suspect';


@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {

  suspects = new Array<Suspect>();
  suspect: Suspect;

  constructor(public appService: AppService, private route: ActivatedRoute,
    private router: Router, public suspectService: SuspectService) { }

  ngOnInit() {
    this.suspectService.getSuspects().subscribe( (data: Suspect[]) => {
      this.suspects = data;
    });
  }

afficherId(suspect) {
  this.router.navigate(['/detail/:id', suspect.id], {relativeTo: this.route});
}
// afficherAjoutComponent() {
//   this.router.navigate(['/create'], {relativeTo: this.route});
// }

afficherRechercheComponent() {
  this.router.navigate(['suspect-rechercheA'], {relativeTo: this.route});
}

// miseAjour() {
//   this.ngOnInit();
// }

}
