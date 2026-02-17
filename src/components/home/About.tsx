import styles from "@/styles/home/about.module.scss"; 
import { AboutSectionHeading } from "@/components/home/AboutSectionHeading";
import { ProjectList } from "./ProjectList";
import { ContributorList } from "./ContributorList";

export function About() {
  return (
    <div className={styles.root}>
      <section className={styles.nameSection}>
        <AboutSectionHeading>Name</AboutSectionHeading>
        <p>fridayflag</p>
      </section>
      <section className={styles.mottoSection}>
        <AboutSectionHeading>Motto</AboutSectionHeading>
        <p>TGIF!</p>
      </section>
      <hr />
      <section className={styles.synopsisSection}>
        <AboutSectionHeading>Manifesto</AboutSectionHeading>
        <p>We're an open-source software collective interested in what gets built when the usual reasons to hurry stop applying.</p>
      </section>
      <hr />
      <section className={styles.portfolioSection}>
        <AboutSectionHeading>Portfolio</AboutSectionHeading>
        <ProjectList className={styles.portfolioList} />
      </section>
      {/* <hr /> */}
      <section className={styles.contributorsSection}>
        <AboutSectionHeading>Perpetrators</AboutSectionHeading>
        <ContributorList />
      </section>

    </div>
  )
}
