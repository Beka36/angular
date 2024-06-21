import { Injectable,Optional } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({providedIn: "root"})
export class DataService{

    private data: string[] = ["Apple Iphone XR", "Samsung Galaxy S9", "Nokia 9"];
    constructor( private logService: LogService){}

    getData(): string[] {

        if (this.logService) this.logService.write("Операция получения данных")
        return this.data;
    }
    addData(name: string){
        this.data.push(name);
        if (this.logService) this.logService.write("Операция добавления данных")
    }
}