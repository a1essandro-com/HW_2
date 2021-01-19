import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {path:'main', component:MainComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'**', component:NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
