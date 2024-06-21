import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { BoldDirective } from "./bold.directive";
import {WhileDirective} from "./while.directive";
import { DataComponent } from "./data.components";
import {DataService} from "./data.service";
import { LogService } from "./log.service";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,DataComponent],
    providers: [DataService,LogService],
    bootstrap: [AppComponent]
})
export class AppModule {}
