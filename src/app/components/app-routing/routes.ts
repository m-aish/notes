import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { FlashcardsComponent } from '../pages/flashcards/flashcards.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'flashcards', component: FlashcardsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]