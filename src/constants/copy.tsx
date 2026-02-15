import PapayaLogo from "@/components/logos/Papaya";
import { ReactNode } from "react";

export interface ProjectLink {
  name: string
  url: string
}

export interface Project {
  name: string
  logo: ReactNode
  headline: ReactNode
  description: ReactNode
  links?: ProjectLink[]
}

export interface Contributor {
  name: string
  role: string
  github?: `@${string}`;
  blog?: `https://${string}`;
}

export const portfolioProjects = [
  {
    name: "Papaya",
    logo: <PapayaLogo />,
    headline: <>Your finances, on your devices &mdash; with Papaya.</>,
    description: <>Papaya is the local-first, open-source, personal finance app to track expenses, manage accounts, and categorize spending &mdash; without sending anything to the cloud.</>,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/fridayflag/papaya",
      },
    ],
  },
] as const satisfies Project[]

export const contributors = [
  {
    name: "Curtis Upshall",
    role: "Founding Engineer",
    github: '@curtisupshall',
    blog: 'https://www.curtisupshall.com',
  },
] as const satisfies Contributor[]

export const footerLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/fridayflag',
  },
] as const satisfies ProjectLink[];
