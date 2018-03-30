import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout/';





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
  declarations: [],
  providers: [],

})
export class DemoMaterialModule {}
///////////////////////////////////////////////////////////////////////////////////////////////


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
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectAjoutComponent } from './suspect-ajout/suspect-ajout.component';
import { SuspectRechercheAvanceeComponent } from './suspect-recherche-avancee/suspect-recherche-avancee.component';
import { SuspectDetailsComponent } from './suspect-details/suspect-details.component';
import { SuspectService } from './suspect.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';






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
    VAjoutComponent,
    SuspectsComponent,
    SuspectAjoutComponent,
    SuspectRechercheAvanceeComponent,
    SuspectDetailsComponent
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
    HttpClientModule,
    FormsModule
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
  providers: [AppService, SuspectService],
  bootstrap: [AppComponent],

entryComponents: [
  PopupConnexionComponent
]
})
export class AppModule { }
