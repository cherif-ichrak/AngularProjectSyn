import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrageComponent } from './components/parametrage/parametrage.component';

import { ParametragePwdComponent } from './components/parametrage-pwd/parametrage-pwd.component';
import { BlocComponent } from './components/bloc/bloc.component';
import { LocauxComponent } from './components/locaux/locaux.component';
import { DependancesComponent } from './components/dependances/dependances.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { RepertoireComponent } from './components/repertoire/repertoire.component';
import { CotisationComponent } from './components/cotisation/cotisation.component';
import { ActiviteEncaissementComponent } from './components/activite-encaissement/activite-encaissement.component';
import { ActiviteVersementComponent } from './components/activite-versement/activite-versement.component';
import { ActiviteDepenseComponent } from './components/activite-depense/activite-depense.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseursComponent } from './components/modifier-fournisseurs/modifier-fournisseurs.component';
import { ContratDomTraitmentComponent } from './components/contrat-dom-traitment/contrat-dom-traitment.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { AfficherCaisseComponent } from './components/afficher-caisse/afficher-caisse.component';
import { DepenseServicesComponent } from './components/depense-services/depense-services.component';
import { OrdrePaiementComponent } from './components/ordre-paiement/ordre-paiement.component';
import { SuiviDecaissementComponent } from './components/suivi-decaissement/suivi-decaissement.component';
import { SuiviEncaissementComponent } from './components/suivi-encaissement/suivi-encaissement.component';
import { SuiviVersementComponent } from './components/suivi-versement/suivi-versement.component';
import { FacturesComponent } from './components/factures/factures.component';
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

const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'ParametragePwd', component: ParametragePwdComponent },
  { path: 'Tdb', component: TdbComponent },

  { path: 'Bloc', component: BlocComponent },
  { path: 'Dependances', component: DependancesComponent },
  { path: 'Annonces', component: AnnoncesComponent },
  { path: 'Repertoire', component: RepertoireComponent },
  { path: 'Cotisation', component: CotisationComponent },
  { path: 'Locaux', component: LocauxComponent },
  { path: 'Caisse', component: CaisseComponent },
  { path: 'DepenseServices', component: DepenseServicesComponent },
  { path: 'Fournisseurs', component: FournisseursComponent },
  { path: 'OrdrePaiement', component: OrdrePaiementComponent },
  { path: 'OrdrePaiement/AjouterOp', component: AjouterOPComponent },

  {
    path: 'OrdrePaiement/OrderPaiement',
    component: ImprimerOrdrePaiementComponent,
  },

  { path: 'SuiviDecaissement', component: SuiviDecaissementComponent },
  { path: 'SuiviEncaissement', component: SuiviEncaissementComponent },

  { path: 'SuiviVersement', component: SuiviVersementComponent },
  { path: 'Factures', component: FacturesComponent },
  { path: 'Certificat', component: CertificatRSComponent },
  {
    path: 'Certificat/ImprimerCertificat',
    component: ImprimerCertificatComponent,
  },

  { path: 'Documents', component: BiblioComponent },

  { path: 'ContratMain', component: ContratDomTraitmentComponent },
  { path: 'Caisse/AfficherCaisee', component: AfficherCaisseComponent },
  {
    path: 'Caisse/AfficherCaisee/ImprimerBrouillard',
    component: BrouillardCaisseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/BulletinCaisse',
    component: BulletinCaisseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/BulletinDepense',
    component: BulletinDepenseComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/ImprimerVersementEspece',
    component: BordereauVersementEspeceComponent,
  },
  {
    path: 'Caisse/AfficherCaisee/ImprimerVersementCheque',
    component: BordereauVersementChequeComponent,
  },
  { path: 'Fournisseurs/Ajouter', component: AjouterFournisseurComponent },
  { path: 'Fournisseurs/Modifier', component: ModifierFournisseursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
