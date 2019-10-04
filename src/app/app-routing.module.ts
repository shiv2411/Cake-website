import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { SportscakesComponent } from './sportscakes/sportscakes.component';
import { OurcakesComponent } from './ourcakes/ourcakes.component';
import { SpecialcakesComponent } from './specialcakes/specialcakes.component';
import { FootballcakesComponent } from './sportscakes/footballcakes/footballcakes.component';
import { GymcakesComponent } from './sportscakes/gymcakes/gymcakes.component';
import { AllcakesComponent } from './specialcakes/all_sports/all_sports.component';
import { BabyshowerComponent } from './ourcakes/baby_shower/baby_shower.component';
import { SuperheroescakesComponent } from './birthdaycakes/superheroes/super.component';
import { CakeformComponent } from './cakeform/cakeform.component';
import { AdminComponent } from './admin/admin.component';
import { NewsregComponent } from './newsregister/newsreg.component';
import { CakescategoryregComponent } from './cakecategory/cakecategoryreg.component';
import { OffersregComponent } from './offersreg/offersreg.component';
import { CakesregComponent } from './cakereg/cakereg.component';
import { WeddingComponent } from './ourcakes/wedding/wedding.component';
import { MothersDayComponent } from './ourcakes/mohersday/mothers.component';
import { FathersDayComponent } from './ourcakes/fathersday/fathers.component';
import { CorporateComponent } from './ourcakes/corporate/corporate.component';
import { AdultsComponent } from './ourcakes/adult/adult.component';
import { NewYearComponent } from './ourcakes/newyear/newyear.component';
import { ValentinesDayComponent } from './ourcakes/valentinesday/valentinesday.component';
import { AnniversaryComponent } from './ourcakes/anniversary/anniversary.component';
import { CartooncharcakesComponent } from './birthdaycakes/cartoonchar/cartoonchar.component';
import { JamesBondcakesComponent } from './birthdaycakes/jamesbond/jamesbond.component';
import { Birthday1st25th50thComponent } from './birthdaycakes/1st25th50thbday/1st_25th_50th.component';
import { DisneyPrincesscakesComponent } from './birthdaycakes/disneyprincess/disneyprincess.component';
import { CameracakesComponent } from './birthdaycakes/cameracake/cameracake.component';
import { HarwaretoolcakesComponent } from './birthdaycakes/hardwaretool/harwaretool.component';
import { CrowntiaracakesComponent } from './birthdaycakes/crown_tiara/crown_tiara.component';
import { VideogamecakesComponent } from './birthdaycakes/videogames/videogames.component';
import { HousewarmingcakesComponent } from './specialcakes/house_warming/house_warming.component';
import { EastercakesComponent } from './specialcakes/easter/easter.component';
import { ChristmascakesComponent } from './specialcakes/christmas/christmas.component';
import { BaptismcakesComponent } from './specialcakes/baptism/baptism.component';
import { GenderrevcakesComponent } from './specialcakes/gender_reveal/genderrev.component';
import { GraduationcakesComponent } from './specialcakes/graduation/graduation.component';
import { CorporatecakesComponent } from './corporatecakes/corporatecakes.component';
import { PersonalizedcakesComponent } from './personalizedcakes/personalizedcakes.component';
import { BoatcakesComponent } from './corporatecakes/boat/boat.component';
import { DoctorcakesComponent } from './corporatecakes/doctor/doctor.component';
import { FootballclubscakesComponent } from './corporatecakes/football_clubs/footballclubs.component';
import { LawyercakesComponent } from './corporatecakes/lawyer/lawyer.component';
import { MusiceqcakesComponent } from './corporatecakes/music_equipment/musiceq.component';
import { PokercasinocakesComponent } from './corporatecakes/poker_casino/pokercasino.component';
import { ReligiousthemecakesComponent } from './corporatecakes/religious_theme/religioustheme.component';
import { SafaejunglecakesComponent } from './corporatecakes/safai_jungle/safaejungle.component';
import { WatchbrandscakesComponent } from './corporatecakes/watch_brands/watchbrands.component';
import { ComicthemecakesComponent } from './personalizedcakes/comic_theme/comictheme.component';
import { AlcoholthemecakesComponent } from './personalizedcakes/alcohol_theme/alcoholtheme.component';
import { DogshapedcakesComponent } from './personalizedcakes/dog_shaped/dogshaped.component';
import { NumbershapedcakesComponent } from './personalizedcakes/number_shaped/numbershaped.component';
import { GolfcakesComponent } from './sportscakes/golf/golf.component';
import { JerseyshapedcakesComponent } from './sportscakes/Jersey_shaped/jerseyshaped.component';
import { OthersportsandgamescakesComponent } from './sportscakes/Other_Sports_and_games/othersportsandgames.component';
import { TenniscakesComponent } from './sportscakes/tennis/tennis.component';
import { Formula1cakesComponent } from './sportscakes/formula_1/formula1.component';


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
  {path: 'cakeform', component: CakeformComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/cakecatreg', component: CakescategoryregComponent},
  {path: 'admin/newsregform', component: NewsregComponent},
  {path: 'admin/offersreg', component: OffersregComponent},
  {path: 'admin/cakereg', component: CakesregComponent},

  {path: 'birthdaycakes', component: BirthdaycakesComponent},
  {path: 'birthdaycakes/superheroes', component: SuperheroescakesComponent},
  {path: 'birthdaycakes/cartoonchar' , component: CartooncharcakesComponent},
  {path: 'birthdaycakes/jamesbond', component: JamesBondcakesComponent},
  {path: 'birthdaycakes/1st25th50thbday', component: Birthday1st25th50thComponent},
  {path: 'birthdaycakes/disneyprincess', component: DisneyPrincesscakesComponent},
  {path: 'birthdaycakes/cameracake', component: CameracakesComponent},
  {path: 'birthdaycakes/hardwaretool', component: HarwaretoolcakesComponent},
  {path: 'birthdaycakes/crown_tiara', component: CrowntiaracakesComponent},
  {path: 'birthdaycakes/videogames', component: VideogamecakesComponent},

  {path: 'corporatecakes', component: CorporatecakesComponent},
  {path: 'corporatecakes/boat' , component: BoatcakesComponent},
  {path: 'corporatecakes/doctor', component: DoctorcakesComponent},
  {path: 'corporatecakes/football_clubs', component: FootballclubscakesComponent},
  {path: 'corporatecakes/lawyer', component: LawyercakesComponent},
  {path: 'corporatecakes/music_equipment', component: MusiceqcakesComponent},
  {path: 'corporatecakes/poker_casino', component: PokercasinocakesComponent},
  {path: 'corporatecakes/religious_theme', component: ReligiousthemecakesComponent},
  {path: 'corporatecakes/safai_jungle', component: SafaejunglecakesComponent},
  {path: 'corporatecakes/watch_brands', component: WatchbrandscakesComponent},

  {path: 'personalizedcakes', component: PersonalizedcakesComponent},
  {path: 'personalizedcakes/comic_theme', component: ComicthemecakesComponent},
  {path: 'personalizedcakes/alcohol_theme', component: AlcoholthemecakesComponent},
  {path: 'personalizedcakes/dog_shaped', component: DogshapedcakesComponent},
  {path: 'personalizedcakes/number_shaped', component: NumbershapedcakesComponent},

  {path: 'sportscakes', component: SportscakesComponent},
  {path: 'sportscakes/golf', component: GolfcakesComponent},
  {path: 'sportscakes/jerseyshaped', component: JerseyshapedcakesComponent},
  {path: 'sportscakes/other_sports_and_games', component: OthersportsandgamescakesComponent},
  {path: 'sportscakes/tennis', component: TenniscakesComponent},
  {path: 'sportscakes/gymcakes', component: GymcakesComponent},
  {path: 'sportscakes/footballcakes', component: FootballcakesComponent},
  {path: 'sportscakes/formulacakes', component: Formula1cakesComponent},

  {path: 'ourcakes', component: OurcakesComponent},
  {path: 'ourcakes/baby_shower', component: BabyshowerComponent},
  {path: 'ourcakes/wedding', component: WeddingComponent},
  {path: 'ourcakes/mothersday', component: MothersDayComponent},
  {path: 'ourcakes/fathersday', component: FathersDayComponent},
  {path: 'ourcakes/corporate', component: CorporateComponent},
  {path: 'ourcakes/adult', component: AdultsComponent},
  {path: 'ourcakes/newyear', component: NewYearComponent},
  {path: 'ourcakes/valentinesday', component: ValentinesDayComponent},
  {path: 'ourcakes/anniversary', component: AnniversaryComponent},

  {path: 'specialcakes', component: SpecialcakesComponent},
  {path: 'specialcakes/all_sports', component: AllcakesComponent},
  {path: 'specialcakes/house_warming', component: HousewarmingcakesComponent},
  {path: 'specialcakes/easter', component: EastercakesComponent},
  {path: 'specialcakes/christmas', component: ChristmascakesComponent},
  {path: 'specialcakes/baptism', component: BaptismcakesComponent},
  {path: 'specialcakes/gender_reveal', component: GenderrevcakesComponent},
  {path: 'specialcakes/graduation', component: GraduationcakesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
