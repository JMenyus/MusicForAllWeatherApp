import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { YoutubeComponent } from './Components/youtube/youtube.component';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomeComponent } from './Components/home/home.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LinksComponent } from './Components/links/links.component';
import {SummerService} from 'src/app/Services/summer.service';
import { YoutubeWinterComponent } from './Components/youtube-winter/youtube-winter.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    YoutubeComponent,
    HomeComponent,
    LinksComponent,
    YoutubeWinterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    YouTubePlayerModule, 
    FontAwesomeModule
  ],
  providers: [SummerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
 }
