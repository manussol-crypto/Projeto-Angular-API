import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from './componentes/cadastroproduto/cadastroproduto.component';


const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipalComponent },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' },
  { path: 'cadastro-produto', component: CadastroProdutoComponent }, // Cadastro de novo produto
  { path: 'cadastro-produto/:id', component: CadastroProdutoComponent }, // Edição de produto
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' } //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
