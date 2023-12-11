import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ActiviteDepenseComponent } from './components/activite-depense/activite-depense.component';
import { ActiviteEncaissementComponent } from './components/activite-encaissement/activite-encaissement.component';
import { ActiviteVersementComponent } from './components/activite-versement/activite-versement.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { AlertesFournisseursComponent } from './components/alertes-fournisseurs/alertes-fournisseurs.component';
import { ComplementsFournisseurComponent } from './components/complements-fournisseur/complements-fournisseur.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';

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
    ActiviteDepenseComponent,
    ActiviteEncaissementComponent,
    ActiviteVersementComponent,
    CotisationComponent,
    FournisseursComponent,
    AjouterFournisseurComponent,
    ModifierFournisseursComponent,
    AlertesFournisseursComponent,
    ComplementsFournisseurComponent,
    ContratDomTraitmentComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [], // Ajoutez cette ligne
  bootstrap: [AppComponent],
})
export class AppModule {}
