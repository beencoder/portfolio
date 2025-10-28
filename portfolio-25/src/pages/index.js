import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/main.module.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <section className={styles.section} id="intro">
        <div className="container"></div>
      </section>
      <section className={styles.section} id="about"></section>
      <section className={styles.section} id="skills"></section>
      <section className={styles.section} id="works"></section>
      <section className={styles.section} id="contact"></section>
    </>
  );
}
