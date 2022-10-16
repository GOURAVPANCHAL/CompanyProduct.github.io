import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { AppRoutingModule } from './app-routing.module';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OurArticlesComponent } from './our-articles/our-articles.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { HomeNavUlComponent } from './home-nav-ul/home-nav-ul.component';
import { FeatureComponent } from './feature/feature.component';
import { PageComponent } from './page/page.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { ShortcodeComponent } from './shortcode/shortcode.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { FormsModule, FormGroup }   from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OurProjectsComponent,
    OurCompanyComponent,
    OurArticlesComponent,
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    HomeNavUlComponent,
    FeatureComponent,
    PageComponent,
    ShopComponent,
    BlogComponent,
    ShortcodeComponent,
    ContactUsComponent,
    NavbarComponent,
    LoginPageComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
