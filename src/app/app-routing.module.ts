import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { SportscakesComponent } from './sportscakes/sportscakes.component';
import { OurcakesComponent } from './ourcakes/ourcakes.component';
import { SpecialcakesComponent } from './specialcakes/specialcakes.component';
import { FootballcakesComponent } from './sportscakes/footballcakes/footballcakes.component';
import { GymcakesComponent } from './sportscakes/gymcakes/gymcakes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'news', component: NewsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'birthdaycakes', component: BirthdaycakesComponent},
  {path: 'sportscakes', component: SportscakesComponent},
  {path: 'ourcakes', component: OurcakesComponent},
  {path: 'specialcakes', component: SpecialcakesComponent},
  {path: 'sportscakes/gymcakes', component: GymcakesComponent},
  {path: 'sportscakes/footballcakes', component: FootballcakesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
