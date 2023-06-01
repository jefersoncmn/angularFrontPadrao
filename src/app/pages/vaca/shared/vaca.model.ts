import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Vaca extends BaseResourceModel{ //Irá obter as mesmas variáveis e configurações do BaseResourceModel
    constructor(
        public peso?: number,
        public dataDeNascimento?: Date,
    ){
        super();//Chama o construtor do BaseResouceModel
    }
}