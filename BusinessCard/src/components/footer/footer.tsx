import linkedIn from './../../assets/linkedin.svg'
import github from './../../assets/GitHub Icon.svg'
import styles from './footer.module.css'

export default function Footer() {

    return (
        <>
            <ul className={`d-flex mb-0 p-3 justify-content-around rounded-bottom-4 ${styles.list}`}>
                <li>
                    <a href='https://in.linkedin.com/in/pruthvi-raju-peddigari-4b658b80?trk=public_profile_browsemap-profile'>
                        <img src={linkedIn} className={styles.linkedIn} />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/PruthviRajuPeddigari'>
                        <img src={github} />
                    </a>
                </li>
            </ul>
        </>
    )
}