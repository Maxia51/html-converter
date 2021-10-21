import { Injectable } from '@angular/core';
import { Convertion } from 'src/app/model/convertion';


@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private convertionTable: Convertion[] = [];


  public get supportedConverter() {
    return [...this.convertionTable];
  }

  constructor() { 

    // this.convertionTable[9] = new Convertion(9, " 	", "&Tab;"); 
    // this.convertionTable[10] = new Convertion(10, " ", "&NewLine;"); 
    this.convertionTable[33] = new Convertion(33, " !", "&excl;"); 
    // this.convertionTable[34] = new Convertion(34, " \"", "&quot; &QUOT;"); 
    this.convertionTable[35] = new Convertion(35, " #", "&num;"); 
    this.convertionTable[36] = new Convertion(36, " $", "&dollar;"); 
    this.convertionTable[37] = new Convertion(37, " %", "&percnt;"); 
    this.convertionTable[38] = new Convertion(38, " &", "&amp; &AMP;"); 
    // this.convertionTable[39] = new Convertion(39, " '", "&apos;"); 
    this.convertionTable[40] = new Convertion(40, " (", "&lpar;"); 
    this.convertionTable[41] = new Convertion(41, " )", "&rpar;"); 
    this.convertionTable[47] = new Convertion(47, " /", "&sol;"); 
    this.convertionTable[58] = new Convertion(58, " :", "&colon;"); 
    this.convertionTable[59] = new Convertion(59, " ;", "&semi;"); 
    this.convertionTable[60] = new Convertion(60, " <", "&lt; &LT;"); 
    this.convertionTable[61] = new Convertion(61, " =", "&equals;"); 
    this.convertionTable[62] = new Convertion(62, " >", "&gt; &GT;"); 
    this.convertionTable[63] = new Convertion(63, " ?", "&quest;"); 
    this.convertionTable[64] = new Convertion(64, " @", "&commat;"); 
    // this.convertionTable[91] = new Convertion(91, " [", "&lsqb; &lbrack;"); 
    this.convertionTable[92] = new Convertion(92, " \\", "&bsol;"); 
    // this.convertionTable[93] = new Convertion(93, " ]", "&rsqb; &rbrack;"); 
    this.convertionTable[94] = new Convertion(94, " ^", "&Hat;"); 
    this.convertionTable[95] = new Convertion(95, " _", "&lowbar;"); 
    this.convertionTable[96] = new Convertion(96, " `", "&grave; &DiacriticalGrave;"); 
    this.convertionTable[123] = new Convertion(123, " {", "&lcub; &lbrace;"); 
    this.convertionTable[124] = new Convertion(124, " |", "&verbar; &vert; &VerticalLine;"); 
    this.convertionTable[125] = new Convertion(125, " }", "&rcub; &rbrace;"); 

  }

  /**
   * Find the correct convertion character. 
   * @param {string} char - The character to replace. 
   * @returns The replacement character or the given character.
   */
  public findConvertion(char: string) {

    if(char.length > 1) throw Error("This method is waiting a char.");

    let unicode = char.charCodeAt(0);

    if(this.convertionTable[unicode] != null)
      return this.convertionTable[unicode].htmlEntities.split(" ")[0];
    else
      return char;

  }

}
