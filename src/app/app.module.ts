import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material'; déjà dans la liste d'imports
// import { MatIconModule} from '@angular/material/icon';                déjà dans la liste d'imports




/* import { MaterialModule } from "@angular/material";  Voir si je dois le rajouter,
 trouver sur internet en association avec le flexmodule*/
import { FlexLayoutModule } from '@angular/flex-layout/';


/* Sur internet encore, j'y ai vu que certains n'arrivaient pas à faire fonctionner le flexLayout et 
les solutions apportées sont de modifier l'import :  import { FlexLayoutModule } from '@angular/flex-layout/flexbox';
 et d'ajouter dans les imports: [ MaterialModule.forRoot(), ]*/


/* Pour créer une Popup
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
*/


////////////////////////////////////////////////////////////////////////////////////////////////
// Pour le popup, des modules on été disposés dans l'exemple vu sur le net,
// je les ajoutent ici sans avoir encore regardé quelles fonctionnalités se cachent derrière.
// Je vais insérer ces imports et autres entre les slashs '/'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';



@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class DemoMaterialModule {}
///////////////////////////////////////////////////////////////////////////////////////////////



// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';



 import { AppComponent } from './app.component';
 import { AccueilComponent } from './accueil/accueil.component';
 import { PopupConnexionComponent } from './popup-connexion/popup-connexion.component';
 import { VehiculesComponent } from './vehicules/vehicules.component';
 import { HeaderComponent } from './header/header.component';
 import { FooterComponent } from './footer/footer.component';
 import { VrechercheAvanceeComponent } from './vrecherche-avancee/vrecherche-avancee.component';
 import { BodyComponent } from './body/body.component';
 import { VDetailsComponent } from './v-details/v-details.component';



import { AppService } from './app.service';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { VAjoutComponent } from './v-ajout/v-ajout.component';









@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PopupConnexionComponent,
    VehiculesComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    VrechercheAvanceeComponent,
    VDetailsComponent,
    VAjoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    DemoMaterialModule,
    AppRoutingModule,
    // RouterModul
    // MatDialog,
    // MatDialogRef
    // FormsModule,
    // ReactiveFormsModule,
    // FormControl,
    // FormGroupDirective,
    // NgForm,
    // Validators

  ],
  providers: [AppService],
  bootstrap: [AppComponent],

  // "entryComponent" sert à forcer la lecture des composants qui ne sont pas "appelés" par une balise
// comme on peut le faire pour le header en déposant la balise <app-header></app-header> dans le app-component.
// Le PopupComponent est lui appelé via un autre Component (le header: méthode openDialog())
// Pour Info, les instanciations "cachés" dans les technos sont faites via un design pattern appelé Factory
entryComponents: [
  PopupConnexionComponent
]
})
export class AppModule { }
