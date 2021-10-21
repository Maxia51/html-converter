/**
 * Represent a convertion object.
 */
export class Convertion {

    public unicode;
    public character;
    public htmlEntities;

    constructor(unicode: number, character: string, htmlEntities: string){
        this.unicode = unicode;
        this.character = character;
        this.htmlEntities = htmlEntities;
    }
}