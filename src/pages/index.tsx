import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="relative flex flex-col justify-center items-center">
          <p className={styles.tl}>
            Bem-vindo!
          </p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/login"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Login 
            </h2>
            <p className={inter.className}>
              Faça Login para acessar o sistema
            </p>
          </Link>

          <Link
            href="/registro"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Registro 
            </h2>
            <p className={inter.className}>
              Ainda não tem uma conta? registre-se agora
              mesmo!
            </p>
          </Link>

          <Link
            href="/recover"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Recuperação de senha 
            </h2>
            <p className={inter.className}>
              Acesse aqui caso tenha esquecido ou perdido sua senha!
            </p>
          </Link>

          <Link
            href="/dashboard"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Painel Principal 
            </h2>
            <p className={inter.className}>
              Acesse o Dashboard para ter uma visão completa!
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
