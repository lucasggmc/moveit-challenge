import Head from "next/head";import { useEffect, useState } from "react";
;
import styles from '../styles/pages/Home.module.css';
import stylesLeaderboard from '../styles/pages/Leaderboard.module.scss';

export default function LeaderBoard(){

    const [name, setName] = useState(undefined)
    const [username, setUsername] = useState(undefined)
    const profileIMG = `https://github.com/${username}.png`

    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, []) 

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, []) 

    return (
        <div className={stylesLeaderboard.containerLeader}>            
            <Head>
                <title>Leaderboard - move.it</title>
            </Head>
            <div className={styles.container}>
                <h1>Leaderboard</h1>

                <table>
                    <thead>
                        <tr>
                            <th>POSIÇÃO</th>
                            <th>USUÁRIO</th>
                            <th>DESAFIOS</th>
                            <th>EXPERIÊNCIA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={stylesLeaderboard.position}>1</td>
                            <td>
                                <div className={stylesLeaderboard.profile}>
                                    <img src={profileIMG} alt="userIMG" className={stylesLeaderboard.profileIMG}/>
                                    <div>
                                        <strong>Lucas Carneiro</strong>   
                                        <p>
                                        <img src="icons/level.svg" alt="Level" />
                                            43
                                        </p>                             
                                    </div>
                                </div>
                            </td>
                            <td className={stylesLeaderboard.challengesAndExperience}>                               
                                    <span>127</span> 
                                    <span>completados</span>                                
                            </td>
                            <td className={stylesLeaderboard.challengesAndExperience}>
                                <span>100000000</span> 
                                <span>xp</span>
                            </td>
                        </tr>
                        <tr>
                            <td className={stylesLeaderboard.position}>2</td>
                            <td>
                                <div className={stylesLeaderboard.profile}>
                                    <img src={profileIMG} alt="userIMG" className={stylesLeaderboard.profileIMG}/>
                                    <div>
                                        <strong>Lucas Carneiro</strong>   
                                        <p>
                                        <img src="icons/level.svg" alt="Level" />
                                            36
                                        </p>                             
                                    </div>
                                </div>
                            </td>
                            <td className={stylesLeaderboard.challengesAndExperience}>                               
                                    <span>17</span> 
                                    <span>completados</span>                                
                            </td>
                            <td className={stylesLeaderboard.challengesAndExperience}>
                                <span>999</span> 
                                <span>xp</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}