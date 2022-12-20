export class Navigation {
    Href: string = "";
    IconName: string = "";
    Key: string = "";
    Id: number = 0;

    constructor(Href: string, IconName: string, Key: string, Id: number) {
        this.Href = Href;
        this.IconName = IconName;
        this.Key = Key;
        this.Id = Id;
    }
}