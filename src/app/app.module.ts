import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomPageComponent } from './hom-page/hom-page.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LegalesMentionsComponent } from './legales-mentions/legales-mentions.component';
import { CGSCGUComponent } from './cgs-cgu/cgs-cgu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomPageComponent,
    LoginComponent,
    CartComponent,
    ShopComponent,
    AccountComponent,
    FooterComponent,
    LegalesMentionsComponent,
    CGSCGUComponent,
    ContactComponent,
    AboutUsComponent,
    NavBarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
