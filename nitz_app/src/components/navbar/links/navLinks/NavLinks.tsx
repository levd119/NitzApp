"use client";
import Link from "next/link";
import styles from '@/components/navbar/links/navLinks/navLinks.module.css'
import { usePathname } from "next/navigation";

interface LinksProps {
  title: string;
  link: string;
}


export default function NavLinks({ title, link }: LinksProps) {
  const pathName = usePathname();

  return (
    <>
    <Link
      href = {link}
      className = {`${styles.container} ${pathName === link && styles.active}`}
      >
      {title}
    </Link>
    </>
  )
}
