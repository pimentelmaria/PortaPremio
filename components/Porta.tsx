import styles from "../styles/Porta.module.css"
import Presente from "./Presente"
import PortaModel from "../model/porta"

interface PortaProps {
    valor: PortaModel
    naMudanca: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta = props.valor
    const estaSelecionada = (porta.selecionada && porta.fechada) ? styles.selecionada : ''

    const selecionar = e => props.naMudanca(porta.alterarSelecao())
    const abrirPorta = e => {
        e.stopPropagation()
        props.naMudanca(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta} >
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrirPorta}></div>
            </div>
        )        
    }

    return(
        <div className={styles.area} onClick={selecionar}>
            <div className={`${styles.frame} ${estaSelecionada}`}>
                {porta.fechada ?
                    renderizarPorta() :
                    porta.temPresente ? <Presente /> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}