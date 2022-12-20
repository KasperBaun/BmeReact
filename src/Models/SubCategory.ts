export class SubCategory {
    id: number;
    parentCategoryId: number;
    title: string;
    description?: string;

    constructor(id: number, parentCategoryId: number, title: string, decription?: string){
        this.id = id;
        this.parentCategoryId = parentCategoryId;
        this.title = title;
        this.description = decription? decription : "";
    }
}