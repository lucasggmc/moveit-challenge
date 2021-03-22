import Head from "next/head";
import styles from "../styles/pages/Login.module.css";

export default function Login(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | move.it </title>
            </Head>  
            <section>
                <div>
                    <img src="background-login.svg" className={styles.backgroundImage}/>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardLogin}>
                        <img src="icons/move-it-logo.svg" alt="move it logo"/>
                        <p>Bem-vindo</p>
                        <div className={styles.gitMessage}>
                            <img src="icons/github.svg" alt="Github"/> 
                            <p>Faça login com seu Github para começar</p>
                        </div>
                        <div className={styles.inputArea}>
                            <input type="text" placeholder="Digite seu username"/>
                            <a href="#">
                                <img src="icons/arrow-button.svg"/>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}