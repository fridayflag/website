import { portfolioProjects, Project, ProjectLink } from "@/constants/copy";
import styles from "@/styles/home/project-list.module.scss";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Link } from "../Link";

export function ProjectList(props: HTMLAttributes<HTMLUListElement>) {
  const { className, ...rest } = props;
  return (
    <ul className={clsx(styles.root, className)} {...rest}>
      {portfolioProjects.map((project: Project) => (
        <li className={styles.project} key={project.name}>
          <span className={styles.logo}>
            {project.logo}
          </span>
          <h3 className={styles.headline}>{project.headline}</h3>
          <p className={styles.description}>{project.description}</p>
          {project.links && (
            <ul className={styles.links}>
              {project.links.map((link: ProjectLink) => (
                <li key={link.name}>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}