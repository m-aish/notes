import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HeroBodyComponent } from './components/body/hero-body/hero-body.component';
import { SectionComponent } from './components/body/section/section.component';
import { CardsContainerComponent } from './components/body/cards-container/cards-container.component';
import { PanelsComponent } from './components/body/cards-container/panels/panels.component';
import { UploadPanelComponent } from './components/body/cards-container/panels/upload-panel/upload-panel.component';
import { UrlPanelComponent } from './components/body/cards-container/panels/url-panel/url-panel.component';
import { NotesAppPanelComponent } from './components/body/cards-container/panels/notes-app-panel/notes-app-panel.component';
import { CardPreviewComponent } from './components/body/cards-container/panels/card-preview/card-preview.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { QuestionsService } from './services/questions.service';
import { FlashcardsComponent } from './components/pages/flashcards/flashcards.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HeroBodyComponent,
    SectionComponent,
    CardsContainerComponent,
    PanelsComponent,
    UploadPanelComponent,
    UrlPanelComponent,
    NotesAppPanelComponent,
    CardPreviewComponent,
    FlashcardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
