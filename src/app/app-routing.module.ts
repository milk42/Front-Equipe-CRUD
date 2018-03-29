import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PopupConnexionComponent } from './popup-connexion/popup-connexion.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { VrechercheAvanceeComponent } from './vrecherche-avancee/vrecherche-avancee.component';
import { VDetailsComponent } from './v-details/v-details.component';
import { VAjoutComponent } from './v-ajout/v-ajout.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectRechercheAvanceeComponent } from './suspect-recherche-avancee/suspect-recherche-avancee.component';
import { SuspectDetailsComponent } from './suspect-details/suspect-details.component';
import { SuspectAjoutComponent } from './suspect-ajout/suspect-ajout.component';





const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component: AccueilComponent},
  {path: 'vehicules', component: VehiculesComponent, children: [
    {path: 'v-details/:id', component: VDetailsComponent},
    {path: 'vrecherche-avancee', component: VrechercheAvanceeComponent},
    {path: 'v-ajout', component: VAjoutComponent},
  ]},
  // {path: 'suspects', component: SuspectsComponent, children: [
  //   {path: 'suspect-ajout', component: SuspectAjoutComponent},
  //   {path: 'suspect-rechercheA', component: SuspectRechercheAvanceeComponent},
  //   {path: 'suspect-detail', component: SuspectDetailsComponent},
  // ]},
];

  // {path: 'affaires', component: AffairesComponent},
  // {path: 'protagonistes', component: ProtagonisteComponent},
  // {path: 'armes', component: ArmesComponent},
  // {path: 'acces', component: AccesComponent},
  // {path: '**', component: AccueilComponent}



@NgModule({
  exports: [RouterModule],

  imports: [
    CommonModule,
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
  FlexLayoutModule,
  NoopAnimationsModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(routes, {enableTracing: true})
  ],
  // declarations: []
})
export class AppRoutingModule { }
