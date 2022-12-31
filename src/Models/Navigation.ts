export class Navigation {
    Href: string = "";
    IconName: string = "";
    Key: string = "";
    Id: number = 0;
    Name: string = "";


    constructor(Href: string, IconName: string, Key: string, Id: number, Name: string) {

        this.Href = Href;
        this.IconName = IconName;
        this.Key = Key;
        this.Id = Id;
        this.Name = Name;
    }
}