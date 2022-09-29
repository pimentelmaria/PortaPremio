import Cartao from "../components/Cartao"
import EntradaNumerica from "../components/EntradaNumerica"
import styles from "../styles/Formulario.module.css"
import Link from "../node_modules/next/link"
import { useState } from "react"

export default function Formulario() {

  const[qtdePortas, setQtdePortas] = useState(3)
  const[portaPremiada, setPortaPremiada] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao fcolor= "rgba(255, 255, 255, 0.85)" bgcolor = "rgb(203, 77, 182)">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas:"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text="Porta Premiada:"
          value={portaPremiada}
          onChange={novaPorta => setPortaPremiada(novaPorta)} />
        </Cartao>
        <Cartao fcolor= "rgba(0, 0, 0, 0.6)" bgcolor = "rgba(85, 151, 18, 0.7)">
          <Link href={`/jogo/${qtdePortas}/${portaPremiada}`} passHref >
            <h2 className={styles.link}>
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
