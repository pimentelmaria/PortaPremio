import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import PortaModel from "../../../model/porta"
import Link from "../../../node_modules/next/link"
import { useRouter } from "../../../node_modules/next/router"

export default function jogo() {

  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portasUrl = +router.query.portas
    const temPresenteUrl = +router.query.temPresente

    const qtdePortasValida = portasUrl >= 3 && portasUrl <= 100
    const temPresenteValido = temPresenteUrl >= 1 && temPresenteUrl <= portasUrl
  
    setValido(qtdePortasValida && temPresenteValido)
  }, [portas, router.query.portas, router.query.temPresente])

  useEffect(() => {
    const portasUrl = +router.query.portas
    const temPresenteUrl = +router.query.temPresente
    setPortas(criarPortas(portasUrl, temPresenteUrl))
  }, [router?.query])

  function renderizarPortas() {
    return valido && portas.map(porta => {
      return <Porta key={porta.numero} valor={porta}
        naMudanca={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ?
          renderizarPortas() :
          <h2>Valores Inválidos.</h2>
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
            <button>Reiniciar Jogo</button>    
        </Link>
      </div>
    </div>
  )
}
