import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile (){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucasggmc.png" alt="Lucas Carneiro" />
            <div>
                <strong>Lucas Carneiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    {level}
                </p>
            </div>
        </div>
    );
}