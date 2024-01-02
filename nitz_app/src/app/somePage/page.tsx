"use client"
import Tabs from "@/components/tabs/Tabs";
import { useEffect } from "react";
import styles from "./page.module.css";

export interface TabProps {
  id: number;
  label: string;
  content: string;
}

export default function SomePage() {
  const data = [
    { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 3, label: 'Tab 3', content: 'Content for Tab 3' },
    { id: 4, label: 'Tab 4', content: 'Content for Tab 4' },
    { id: 5, label: 'Tab 5', content: 'Content for Tab 5' }
  ];
  useEffect(()=>{
    console.log("SomePage",{data})
  })
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
      </div>
    </div>
  )
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <Tabs tabs= {data}></Tabs>
      </div>
    </div>
  )

}
