import styles from '../styles/components/VerticalMenu.module.css';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';


export function VerticalMenu(){
    return(
        <div className={styles.verticalMenu}> 
            <div>                  
                <img src="icons/logo-menu.svg"/>
            </div>
          
            <div className={styles.menuItems}>                                
                <Tabs>
                    <Tab src="/icons/home.svg"></Tab>
                    <Tab src="/icons/medal.svg"></Tab>                    
                </Tabs>
            </div>
        </div>
    );
}