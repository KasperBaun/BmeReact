import { IRepository } from "./IRepository";

class NavigationRepository implements IRepository{
    readonly _instance: IRepository;
    public getInstance(): IRepository;
    private Array<Type>(): Type = [];
    public create(type: Type): boolean;
    public read(id: number) : Type;
    public update(type: Type): boolean;
    public delete(type: Type): boolean;

    constructor(){
        this._instance = this;
        this.getInstance = () => {return this._instance};

    }
}

export default NavigationRepository;