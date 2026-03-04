import { IconBank } from '../icons'
import styles from './accountItem.module.css'

 const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {

    return (
        <div className={styles.account}>
            <div className={styles.details}>
                <IconBank /> {item.bank}
            </div>
            <div className={styles.amount}>
                <p>Saldo</p>
                {formater.format(item.balance)}
            </div>
        </div>
    )
}