import Image from "next/image";
import Link from "next/link";
import copertina from "../public/600x300.png";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"auto"}
          height={"auto"}
          className={"img"}
          alt="copertina"
          priority
        />
        <p>
          Dal <strong>27 Gennaio al 23 Giugno</strong> la mostra{" "}
          <strong> Van Gogh - multimedia e la stanza segreta - </strong>
          sarà al <strong>Palazzo Della Rosa Prati di Parma</strong>. La mostra
          multimediale prende in esame, attraverso proiezioni in diversi
          monitor, la vita e le opere del maestro, con la visione in video di
          molti dipinti e disegni realizzati nel corso della sua esistenza,
          completata con informazioni in italiano e inglese, dei periodi
          artistici vissuti da Van Gogh negli ultimi 10 anni della sua vita.
        </p>
        <p>
          Le opere sono istallate in maniera che l’osservatore possa entrare
          dentro il quadro stesso e in modo che possa sentire così la trama
          della tela, i tocchi di colori posati con la spatola, la composizione
          ricercata, studiata, dove l’apparente caos ha dato luogo a quel cosmo
          fantastico e immaginifico che ha reso Vincent Van Gogh eterno e vivo
          nella storia di ognuno di noi.
        </p>
        <Link
          href={
            "https://www.navigaresrl.com/mostra/van-gogh-multimedia-e-la-stanza-segreta-2/"
          }
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 31 Dicembre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>
          * lo sconto verrà applicato SOLO per il biglietto INTERO FERIALE
          acquistato in biglietteria
        </h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject=Iscrizione Waiting List Van Gogh Parma"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
