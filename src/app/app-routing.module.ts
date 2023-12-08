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

const routes: Routes = [
  { path: 'Parametrage', component: ParametrageComponent },
  { path: 'ParametragePwd', component: ParametragePwdComponent },
  { path: 'Bloc', component: BlocComponent },
  { path: 'Dependances', component: DependancesComponent },
  { path: 'Annonces', component: AnnoncesComponent },
  { path: 'Repertoire', component: RepertoireComponent },
  { path: 'Cotisation', component: CotisationComponent },
  { path: 'Locaux', component: LocauxComponent },
  { path: 'Encaisement', component: ActiviteEncaissementComponent },
  { path: 'Versement', component: ActiviteVersementComponent },
  { path: 'Depense', component: ActiviteDepenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
