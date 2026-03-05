import { IconBank } from '../icons'
import styles from './accountItem.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {

    return (
        <div className={styles.account}>
            <div>
                <p className={styles.details}>
                    <IconBank /> {item.bank}
                </p>
            </div>
            <div className={styles.amount}>
                <p>
                    <strong>Saldo</strong>
                </p>
                <p>{formater.format(item.balance)}</p>
            </div>
        </div>
    )
}