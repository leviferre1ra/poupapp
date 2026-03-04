import { AccountItem } from "../AccountItem"
import { Button } from "../Button"
import { IconWallet } from "../icons"
import styles from './accounts.module.css'

export const Accounts = () => {

    const items = [
        { "bank": "Anybank", "balance": 1200 },
        { "bank": "Bytebank", "balance": 800 },
        { "bank": "Switch Bank", "balance": 1800 }
    ]

    return (
        <>
            <ul className={styles.list}>
                {items.map((accountItem, index) => {

                    return (
                        <li key={index}>
                            <AccountItem item={accountItem} />
                        </li>
                    )
                })}
            </ul>

            <div className={styles.actions}>
                <Button>
                    <IconWallet /> Adicionar conta
                </Button>
            </div>
        </>
    )
}