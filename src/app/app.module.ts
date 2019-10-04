import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { SportscakesComponent } from './sportscakes/sportscakes.component';
import { OurcakesComponent } from './ourcakes/ourcakes.component';
import { SpecialcakesComponent } from './specialcakes/specialcakes.component';
import { GymcakesComponent } from './sportscakes/gymcakes/gymcakes.component';
import { FootballcakesComponent } from './sportscakes/footballcakes/footballcakes.component';
import { HttpClientModule } from '@angular/common/http';
import { AllcakesComponent } from './specialcakes/all_sports/all_sports.component';
import { BabyshowerComponent } from './ourcakes/baby_shower/baby_shower.component';
import { SuperheroescakesComponent } from './birthdaycakes/superheroes/super.component';
import { CakeformComponent } from './cakeform/cakeform.component';


// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
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
import { WatchbrandscakesComponent } from './corporatecakes/watch_brands/watchbrands.component';
import { BoatcakesComponent } from './corporatecakes/boat/boat.component';
import { SafaejunglecakesComponent } from './corporatecakes/safai_jungle/safaejungle.component';
import { PokercasinocakesComponent } from './corporatecakes/poker_casino/pokercasino.component';
import { ReligiousthemecakesComponent } from './corporatecakes/religious_theme/religioustheme.component';
import { DoctorcakesComponent } from './corporatecakes/doctor/doctor.component';
import { LawyercakesComponent } from './corporatecakes/lawyer/lawyer.component';
import { MusiceqcakesComponent } from './corporatecakes/music_equipment/musiceq.component';
import { FootballclubscakesComponent } from './corporatecakes/football_clubs/footballclubs.component';
import { ComicthemecakesComponent } from './personalizedcakes/comic_theme/comictheme.component';
import { NumbershapedcakesComponent } from './personalizedcakes/number_shaped/numbershaped.component';
import { DogshapedcakesComponent } from './personalizedcakes/dog_shaped/dogshaped.component';
import { AlcoholthemecakesComponent } from './personalizedcakes/alcohol_theme/alcoholtheme.component';
import { Formula1cakesComponent } from './sportscakes/formula_1/formula1.component';
import { GolfcakesComponent } from './sportscakes/golf/golf.component';
import { JerseyshapedcakesComponent } from './sportscakes/Jersey_shaped/jerseyshaped.component';
import { OthersportsandgamescakesComponent } from './sportscakes/Other_Sports_and_games/othersportsandgames.component';
import { TenniscakesComponent } from './sportscakes/tennis/tennis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewsComponent,
    OffersComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    BirthdaycakesComponent,
    CartooncharcakesComponent,
    JamesBondcakesComponent,
    Birthday1st25th50thComponent,
    DisneyPrincesscakesComponent,
    CameracakesComponent,
    HarwaretoolcakesComponent,
    CrowntiaracakesComponent,
    VideogamecakesComponent,

    CorporatecakesComponent,
    WatchbrandscakesComponent,
    BoatcakesComponent,
    SafaejunglecakesComponent,
    PokercasinocakesComponent,
    ReligiousthemecakesComponent,
    DoctorcakesComponent,
    LawyercakesComponent,
    MusiceqcakesComponent,
    FootballclubscakesComponent,

    PersonalizedcakesComponent,
    ComicthemecakesComponent,
    NumbershapedcakesComponent,
    DogshapedcakesComponent,
    AlcoholthemecakesComponent,

    SportscakesComponent,
    Formula1cakesComponent,
    GolfcakesComponent,
    JerseyshapedcakesComponent,
    OthersportsandgamescakesComponent,
    TenniscakesComponent,
    GymcakesComponent,
    FootballcakesComponent,

    OurcakesComponent,
    BabyshowerComponent,
    WeddingComponent,
    MothersDayComponent,
    FathersDayComponent,
    CorporateComponent,
    AdultsComponent,
    NewYearComponent,
    ValentinesDayComponent,
    AnniversaryComponent,

    SpecialcakesComponent,
    AllcakesComponent,
    HousewarmingcakesComponent,
    EastercakesComponent,
    ChristmascakesComponent,
    BaptismcakesComponent,
    GenderrevcakesComponent,
    GraduationcakesComponent,

    CakeformComponent,
    SuperheroescakesComponent,
    OffersregComponent,
    NewsregComponent,
    CakescategoryregComponent,
    CakesregComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // AngularFireModule.initializeApp(environment.firebase),
    //   AngularFireAuthModule,
    //   AngularFirestoreModule,
    //   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
