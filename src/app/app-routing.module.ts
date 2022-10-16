import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeatureComponent } from './feature/feature.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { PageComponent } from './page/page.component';
import { ShopComponent } from './shop/shop.component';
import { ShortcodeComponent } from './shortcode/shortcode.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'OurCompanyComponent',
    component: OurCompanyComponent
  },
  {
    path: 'feature',
    component: FeatureComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'login page',
    component: LoginPageComponent
  },
  {
    path: 'sign-Up',
    component: SignUpComponent
  },
  {
    path: 'shortcode',
    component: ShortcodeComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }