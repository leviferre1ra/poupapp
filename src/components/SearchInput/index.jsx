import { IconSearch } from '../icons'
import styles from './searchinput.module.css'

export const SearchInput = ({ placeholder = 'Procure seu dinheiro...', ...props }) => {
 
    return(
        <div className={styles.container}>
            <IconSearch />
            <input className={styles.input} placeholder={placeholder} {...props}/>
            
        </div>
        
    )
}