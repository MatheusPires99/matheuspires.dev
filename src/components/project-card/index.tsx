import Link from "next/link";

import { ArrowSquareOut, Star, GitFork } from "phosphor-react";

import { GithubLogo } from "@/assets/icons/github-logo";
import { IconButton } from "@/components/icon-button";

import {
  ProjectCardContainer,
  ProjectCardHeader,
  ProjectCardContent,
  ProjectStat,
} from "./styles";
import { TechsSlider } from "./techs-slider";

export const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <ProjectCardHeader>
        <strong>Pokedex</strong>
        <div>
          <IconButton as={Link} href="" target="_blank">
            <GithubLogo />
          </IconButton>
          <IconButton as={Link} href="" target="_blank">
            <ArrowSquareOut />
          </IconButton>
        </div>
      </ProjectCardHeader>

      <ProjectCardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <div>
          <ProjectStat>
            <Star weight="fill" />
            <span>198</span>
          </ProjectStat>
          <ProjectStat>
            <GitFork />
            <span>34</span>
          </ProjectStat>
        </div>
      </ProjectCardContent>

      <TechsSlider />
    </ProjectCardContainer>
  );
};
