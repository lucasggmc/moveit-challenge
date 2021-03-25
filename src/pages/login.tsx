import Head from "next/head";
import styles from "../styles/pages/Login.module.css";
import axios from 'axios';
import { FormEvent, useState } from "react";

export default function Login(){

    const [username, setUsername] = useState("");

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        getProfile();
    }

    function getProfile(){        
        // axios.post('/api/profile', {username: username});
        axios.post(`/api/profile`, {username: username}).then(response => {
            console.log('response', response)
            saveProfile(response.data)
            redirectHomePage()
        });        
    }

    function saveProfile(profile){
        if (typeof window !== "undefined") {
            localStorage.setItem("username", profile.username)
            localStorage.setItem("profileIMG:", profile.profileIMG)
            localStorage.setItem("name", profile.name)
        }
    }

    function redirectHomePage(){
        window.location.href = "/"
    }

    function clearInputs(){
        setUsername("")
    }

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
                            <form onSubmit={onSubmit}>
                            <input 
                                type="text" 
                                name="username" 
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                value={username} 
                                placeholder="Digite seu username"
                            />
                            </form>
                            <a onClick={onSubmit} className={username.length > 0 ? styles.buttonGreen : styles.buttonPurple}>
                                <img src="icons/arrow-button.svg"/>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}