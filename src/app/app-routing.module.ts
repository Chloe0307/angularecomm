import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomPageComponent } from './hom-page/hom-page.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { LegalesMentionsComponent } from './legales-mentions/legales-mentions.component';
import { CGSCGUComponent } from './cgs-cgu/cgs-cgu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'accueil', component: HomPageComponent },
  { path: 'connexion', component: LoginComponent},
  { path: 'magasin', component: ShopComponent},
  { path: 'panier', component: CartComponent},
  { path: 'compte', component: AccountComponent},
  { path: '', component: HomPageComponent},
  { path: 'mentions-legales', component: LegalesMentionsComponent},
  { path: 'cgs-cgu', component: CGSCGUComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'a-propos', component: AboutUsComponent},
  { path: 'inscription', component: RegisterComponent},
]


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
