import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about.components";
import { HomeComponent } from "./home.components";
import { NotFoundComponent } from "./not-found.component";

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', redirectTo: '/about', pathMatch: 'full'},
    { path: '**', redirectTo: '/'}
];




@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
