"use client"
import Tabs from "@/components/tabs/Tabs";
import { useEffect } from "react";

export default function SomePage() {
  const data = [
    { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 3, label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  useEffect(()=>{
    console.log("SomePage",{data})
  })
  return (
    <>
      <Tabs tabs= {data}></Tabs>
    </>
  )
}
