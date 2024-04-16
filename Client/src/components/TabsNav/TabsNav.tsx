import * as React from 'react';
import styles from "./TabsNav.module.css"
import { useState } from 'react';
import { TabElements } from './TabElements/TabElements';
type Props = {
    
};
export const TabsNav = (props: Props) => {

    const arr = ["Main", "Food", "Work", "Personal"]

    return (
        <div className={styles.container}>
            <nav className={styles.tabsNav}>
                {arr.map(tab => <TabElements Tab = {tab}/>)}
            </nav>
        </div>
    );
};