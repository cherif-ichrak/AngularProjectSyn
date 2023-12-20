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

import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { AlertesFournisseursComponent } from './components/alertes-fournisseurs/alertes-fournisseurs.component';
import { ComplementsFournisseurComponent } from './components/complements-fournisseur/complements-fournisseur.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { AfficherCaisseComponent } from './components/afficher-caisse/afficher-caisse.component';
import { DepenseServicesComponent } from './components/depense-services/depense-services.component';
import { OrdrePaiementComponent } from './components/ordre-paiement/ordre-paiement.component';
import { SuiviEncaissementComponent } from './components/suivi-encaissement/suivi-encaissement.component';
import { SuiviDecaissementComponent } from './components/suivi-decaissement/suivi-decaissement.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { FacturesComponent } from './components/factures/factures.component';
import { SuiviVersementComponent } from './components/suivi-versement/suivi-versement.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { BrouillardCaisseComponent } from './components/brouillard-caisse/brouillard-caisse.component';
import { BulletinCaisseComponent } from './components/bulletin-caisse/bulletin-caisse.component';
import { BulletinDepenseComponent } from './components/bulletin-depense/bulletin-depense.component';
import { BordereauVersementEspeceComponent } from './components/bordereau-versement-espece/bordereau-versement-espece.component';
import { BordereauVersementChequeComponent } from './components/bordereau-versement-cheque/bordereau-versement-cheque.component';
import { ImprimerOrdrePaiementComponent } from './components/imprimer-ordre-paiement/imprimer-ordre-paiement.component';
import { AjouterOPComponent } from './components/ajouter-op/ajouter-op.component';
import { CertificatRSComponent } from './components/certificat-rs/certificat-rs.component';
import { TdbComponent } from './components/tdb/tdb.component';
import { ImprimerCertificatComponent } from './components/imprimer-certificat/imprimer-certificat.component';
import { DetailsAnnonceComponent } from './components/details-annonce/details-annonce.component';

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
    FournisseursComponent,
    AjouterFournisseurComponent,
    ModifierFournisseursComponent,
    AlertesFournisseursComponent,
    ComplementsFournisseurComponent,
    ContratDomTraitmentComponent,
    CaisseComponent,
    BiblioComponent,
    AfficherCaisseComponent,
    DepenseServicesComponent,
    OrdrePaiementComponent,
    SuiviEncaissementComponent,
    SuiviDecaissementComponent,
    TdbComponent,
    SuiviVersementComponent,
    DashboradComponent,
    FacturesComponent,
    BrouillardCaisseComponent,
    BulletinCaisseComponent,
    BulletinDepenseComponent,
    BordereauVersementEspeceComponent,
    BordereauVersementChequeComponent,
    ImprimerOrdrePaiementComponent,
    AjouterOPComponent,
    CertificatRSComponent,
    ImprimerCertificatComponent,
    DetailsAnnonceComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [], // Ajoutez cette ligne
  bootstrap: [AppComponent],
})
export class AppModule {}
