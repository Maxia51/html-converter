import { Component } from "@angular/core";
import { ConverterService } from "src/app/services/converter/converter.service";

@Component({
    selector: "converter",
    templateUrl: "converter.component.html",
    styleUrls: ["converter.component.scss"],
})
export class ConverterComponent{

    public placeholder: string = `<div [binding]="boolean" >ceci est une doc</div>`;
    public convertedContent: string = "";

    constructor(private converterService: ConverterService){}

    public onHtmlContentChange(event: Event) {
        let textarea = event?.target as HTMLTextAreaElement;
        this.convertHtml(textarea.value);
    }


    private convertHtml(htmlContent: string) {

        let converted = "";

        for(let i = 0; i < htmlContent.length; i++) {
            converted += this.converterService.findConvertion(htmlContent[i]);
        }

        this.convertedContent = converted;
    }
}