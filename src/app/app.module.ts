import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { IdentificationComponent } from './components/identification/identification.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BlocComponent } from './components/bloc/bloc.component';
import { LocauxComponent } from './components/locaux/locaux.component';
import { SouchesNomComponent } from './components/souches-nom/souches-nom.component';
import { DependancesComponent } from './components/dependances/dependances.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { RepertoireComponent } from './components/repertoire/repertoire.component';
import { CotisationComponent } from './components/cotisation/cotisation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IdentificationComponent,
    GroupesComponent,
    ContactsComponent,
    BlocComponent,
    LocauxComponent,
    ParametrageComponent,
    UsersComponent,
    SouchesNomComponent,
    DependancesComponent,
    AnnoncesComponent,
    RepertoireComponent,
    CotisationComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [], // Ajoutez cette ligne
  bootstrap: [AppComponent],
})
export class AppModule {}
