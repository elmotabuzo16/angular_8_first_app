import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { ExerciseNgForComponent } from './exerciseNgFor/exerciseNgFor.component';

@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      UserComponent,
      ExerciseNgForComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
