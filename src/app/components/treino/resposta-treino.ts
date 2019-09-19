import { TreinoComponent } from "./treino.component";

export class RespostaPadrao {
    mensagem: string;
}

export class RespostaCadastro {
    _id: string;
}

export class RespostaListaTreino {
    treino: TreinoComponent;
    treinos: TreinoComponent[];
}