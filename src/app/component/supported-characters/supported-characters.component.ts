import { Component, OnInit } from "@angular/core";
import { Convertion } from "src/app/model/convertion";
import { ConverterService } from "src/app/services/converter/converter.service";

@Component({
    selector: "supported-characters",
    templateUrl: "supported-characters.component.html",
    styleUrls: ["supported-characters.component.scss"],
})
export class SupportedCharactersComponent implements OnInit{

    public supportedCharacters: Convertion[] = [];

    constructor(private converterService: ConverterService){
        
    }

    public ngOnInit(){
        this.supportedCharacters = this.converterService.supportedConverter;
    }
  
    public customTracker(index: number, item: Convertion){
        if(item == null) return;

        return item?.unicode;
    }  

}