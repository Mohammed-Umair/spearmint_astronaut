import styles from './index.module.css';
const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.home1}>
                <div className={styles.arrowLaunch}>
                    <p className={styles.text}>Future<img src='./arrow.svg' /> <br />
                        of Launch</p>
                    <button>Join now</button>
                    <button>How to Join ?</button>
                </div>
                <img className={styles.hero} src='./hero.svg' />
            </div>
        </div>
    )
}
export default Main;