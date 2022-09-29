import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgcolor?: string
    fcolor?: string
    children?: any
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style = {{
                backgroundColor: props.bgcolor ?? "rgba(255, 255, 255, 0.4)",
                color: props.fcolor ?? "rgba(0, 0, 0, 1)"
            }}
        >
            {props.children}
        </div>
    )
}