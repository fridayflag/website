import { VisuallyHidden } from "@/components/VisuallyHidden";
import { Page } from "@/components/Page";
import styles from "@/styles/pages/home.module.scss";
import { Monospace } from "@/components/Monospace";
import { About } from "@/components/home/About";
import { Footer } from "@/components/home/Footer";

export default function HomePage() {
  return (
    <Page className={styles.root}>
      <div className={styles.content}>
        <section>
          <a href="/" className={styles.homeLink}>
            <VisuallyHidden>
              <h1>fridayflag</h1>
            </VisuallyHidden>
            <Monospace className={styles.heading1} aria-hidden="true">
              <span className={styles.ps1}>$&nbsp;</span>-f, --friday
            </Monospace>
          </a>
          <p className={styles.tagline}>
            <Monospace>
              Irreverence-driven development from a budding open-source software collective.
            </Monospace>
          </p>
        </section>
        <About />
        <Footer />
      </div>
    </Page>
  )
}
