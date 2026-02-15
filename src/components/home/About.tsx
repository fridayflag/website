import {
  type Contributor,
  contributors,
  footerLinks,
  portfolioProjects,
  type Project,
  ProjectLink,
} from "@/constants/copy";
import styles from "@/styles/home/about.module.scss"; 
import { AboutSectionHeading } from "@/components/home/AboutSectionHeading";
import { FridayFlag } from "../logos/FridayFlag";
import { ProjectList } from "./ProjectList";
import { ContributorList } from "./ContributorList";
import { Link } from "../Link";

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
        <AboutSectionHeading>Credo</AboutSectionHeading>
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
      {/* <hr /> */}
      <section className={styles.logoSection}>
        <AboutSectionHeading>Logo</AboutSectionHeading>
        <FridayFlag className={styles.logo} />
      </section>
      <section className={styles.linksSection}>
        <AboutSectionHeading>Links</AboutSectionHeading>
        <ul>
          {footerLinks.map((link: ProjectLink) => (
            <li key={link.name}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}