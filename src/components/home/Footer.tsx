import styles from '@/styles/home/footer.module.scss'
import { footerLinks, ProjectLink } from "@/constants/copy"
import { AboutSectionHeading } from "./AboutSectionHeading"
import { Link } from "@/components/Link"
import { FridayFlag } from '../logos/FridayFlag';

export function Footer() {
  return (
    <footer className={styles.root}>
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
    </footer>
  );
}
