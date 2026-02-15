import { VisuallyHidden } from "@/components/VisuallyHidden";
import { Page } from "@/components/Page";
import styles from "@/styles/pages/home.module.scss";
import { Monospace } from "@/components/Monospace";
import { About } from "@/components/home/About";

export default function HomePage() {
  return (
    <Page className={styles.root}>
      <div className={styles.content}>
        <section>
          <VisuallyHidden>
            <h1>fridayflag</h1>
          </VisuallyHidden>
          <Monospace className={styles.heading1} aria-hidden="true">
            <span className={styles.ps1}>$&nbsp;</span>-f, --friday
          </Monospace>
          <p className={styles.tagline}>
            Irreverence-driven development from a budding open-source software collective.
          </p>
        </section>
        <About />
      </div>
    </Page>
  )
}
