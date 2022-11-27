import { Type } from "typescript";

export interface IRepository {
    readonly _instance: IRepository;
    getInstance(): IRepository;
    Array<Type>(): Type;
    create(type: Type): boolean;
    read(id: number) : Type;
    update(type: Type): boolean;
    delete(type: Type): boolean;


}