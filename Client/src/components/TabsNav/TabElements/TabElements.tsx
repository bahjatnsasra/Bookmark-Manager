// @flow 
import * as React from 'react';
import { useState } from 'react';
import styles from "./TabElements.module.css"

type Props = {
    Tab: string;
};
export const TabElements = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>('Main'); // Initialize with default active tab

    const handleTabClick = () => {
    setActiveTab(props.Tab);
    };

    console.log(activeTab);
    
    function isTabActive(){
        return activeTab === `${props.Tab}` ? styles.activeTab : styles.unActiveTab
    }
    return (
        <div className={isTabActive()} onClick={() => {handleTabClick()}}>
            {props.Tab}
        </div>
    );
};