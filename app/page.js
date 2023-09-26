import Image from "next/image";
import Link from "next/link";
import copertina from "../public/copertina.png";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Dal <strong>28 Ottobre al 14 Gennaio</strong> la mostra{" "}
          <strong> Miró a Torino </strong>
          sarà al Mastio Della Cittadella di Torino. La mostra racchiude
          all’incirca 100 opere tra dipinti, tempere, acquerelli, libri,
          documenti, disegni, sculture e ceramiche provenienti da musei francesi
          e collezionisti privati.
        </p>
        <p>
          La curatela è affidata al critico d’arte{" "}
          <strong>Achille Bonito Oliva</strong>, fra i maggiori e più stimati in
          Italia, insieme a Maïthé Vallès-Bled (già direttrice di musei
          francesi) e a Vincenzo Sanfo, esperto d’arte e organizzatore di grandi
          mostre internazionali.
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
          Iscriviti entro il 10 Ottobre alla nostra Waiting List per ricevere
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
