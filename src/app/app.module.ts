import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { routing } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { FirebaseService } from './firebase.service';
import { QuestionComponent } from './components/question/question.component';
import { StoreModule } from '@ngrx/store';
import { combineReducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './effects/MainEffects';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    ResultsComponent,
    NavComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.provideStore(combineReducers),
    EffectsModule.run(MainEffects)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
