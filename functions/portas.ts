import PortaModel from "../model/porta";

export function criarPortas(qtde: number, premiada: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresenteBooleano = numero === premiada
        return new PortaModel(numero, temPresenteBooleano)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {

        const igualAModificada = portaAtual.numero === portaModificada.numero
    
        if (igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }

    })
}