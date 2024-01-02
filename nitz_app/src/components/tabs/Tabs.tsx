"use client"
import { useEffect, useState } from "react";
import styles from './Tabs.module.css';
import { TabProps } from "@/app/somePage/page";

export interface TabsProps {
  tabs: TabProps[];
}

export default function Tabs({tabs}: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)
  const [content, setContent] = useState(tabs[0]?.content)
  useEffect(()=>{
    console.log("Tabs")
  },[])

  const clickOnTab = (tab: TabProps) => {
    setActiveTab(tab.id);
    setContent(tab.content);
  }
  
  return (
    <div>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => clickOnTab(tab)}
              className={`${styles.tab} ${tab.id === activeTab ? styles.activeTab : ''}`}
            >
              {tab.label}
            </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        <p>{content}</p>
      </div>
    </div>
  )
}
