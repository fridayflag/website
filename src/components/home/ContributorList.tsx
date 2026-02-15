import { Contributor, contributors } from "@/constants/copy";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "@/styles/home/contributor-list.module.scss";
import { Link } from "@/components/Link";
import { GitHub } from "../logos/Github";


export function ContributorList(props: HTMLAttributes<HTMLUListElement>) {
  const { className, ...rest } = props;
  return (
    <ul className={clsx(styles.root, className)} {...rest}>
      {contributors.map((contributor: Contributor) => (
        <li key={contributor.name}>
          <span>
            {contributor.name}
            <span className={styles.links}>
              {contributor.github && (
                <a
                  aria-label={`${contributor.name} on GitHub`}
                  href={`https://github.com/${contributor.github.slice(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className={styles.githubSvg} aria-hidden="true" />
                </a>
              )}
              {contributor.blog && (
                <Link
                  href={contributor.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              )}
            </span>
          </span>
          <span className={styles.role}>
            {contributor.role}
          </span>
        </li>
      ))}
    </ul>
  )
}
