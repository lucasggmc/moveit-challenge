import Head from "next/head";;
import styles from '../styles/pages/Home.module.css';

export default function LeaderBoard(){
    return (
        <div>            
            <Head>
                <title>Leaderboard - move.it</title>
            </Head>
            <div className={styles.container}>
                <h1>Leaderboard</h1>
            </div>
        </div>
    );
}