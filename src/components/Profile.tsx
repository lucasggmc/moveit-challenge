import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile (){
    const { level } = useContext(ChallengesContext);    

    const [name, setName] = useState(undefined)
    const [username, setUsername] = useState(undefined)
    const profileIMG = `https://github.com/${username}.png`

    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, []) 

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, []) 
    

    return(
        <div className={styles.profileContainer}>            
            <img src={profileIMG} alt="name" />
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    {level}
                </p>
            </div>
        </div>
    );
}