import { FileTsx } from "phosphor-react";

import { Link } from "@/components/link";
import { RichText } from "@/components/rich-text";

import {
  WorkExperienceGroup,
  WorkExperience,
  CompanyImage,
  WorkContent,
  RoleAndCompany,
  WorkPeriod,
} from "./styles";

export const WorkExperiences = () => {
  return (
    <WorkExperienceGroup>
      <WorkExperience direction="left">
        <CompanyImage>
          {/* <Image src="" alt="" /> */}
          <FileTsx size={24} color="#849DFF" />
        </CompanyImage>

        <WorkContent>
          <RoleAndCompany>
            <strong>Front-end Engineer</strong>
            <Link variant="hightlight" href="">
              @ numa
            </Link>
          </RoleAndCompany>
          <WorkPeriod>mar de 2021 - present</WorkPeriod>
          <RichText css={{ marginTop: "1rem" }}>
            {
              '<p>This repository contains a monorepo of the <strong>Pokedex</strong> app</p><p>The Pokedex is an app which the user can view a list of Pokemons, search and view the details of a specific Pokemon. To get the Pokemons data it was used the <a target=\'_blank\' title="https://pokeapi.co/" href="https://pokeapi.co/">PokéAPI</a>.</p><p>The main goal with this project was to know and learn hot the animations and gestures work on React Native. In order to do that it was used mainly the Animated API from React Native.</p>'
            }
          </RichText>
        </WorkContent>
      </WorkExperience>
      <WorkExperience direction="right">
        <CompanyImage>
          {/* <Image src="" alt="" /> */}
          <FileTsx size={24} color="#849DFF" />
        </CompanyImage>

        <WorkContent>
          <RoleAndCompany>
            <strong>Front-end Engineer</strong>
            <Link variant="hightlight" href="">
              @ numa
            </Link>
          </RoleAndCompany>
          <WorkPeriod>mar de 2021 - present</WorkPeriod>
          <RichText css={{ marginTop: "1rem" }}>
            {
              '<p>This repository contains a monorepo of the <strong>Pokedex</strong> app</p><p>The Pokedex is an app which the user can view a list of Pokemons, search and view the details of a specific Pokemon. To get the Pokemons data it was used the <a target=\'_blank\' title="https://pokeapi.co/" href="https://pokeapi.co/">PokéAPI</a>.</p><p>The main goal with this project was to know and learn hot the animations and gestures work on React Native. In order to do that it was used mainly the Animated API from React Native.</p>'
            }
          </RichText>
        </WorkContent>
      </WorkExperience>
      <WorkExperience direction="left">
        <CompanyImage>
          {/* <Image src="" alt="" /> */}
          <FileTsx size={24} color="#849DFF" />
        </CompanyImage>

        <WorkContent>
          <RoleAndCompany>
            <strong>Front-end Engineer</strong>
            <Link variant="hightlight" href="">
              @ numa
            </Link>
          </RoleAndCompany>
          <WorkPeriod>mar de 2021 - present</WorkPeriod>
          <RichText css={{ marginTop: "1rem" }}>
            {
              '<p>This repository contains a monorepo of the <strong>Pokedex</strong> app</p><p>The Pokedex is an app which the user can view a list of Pokemons, search and view the details of a specific Pokemon. To get the Pokemons data it was used the <a target=\'_blank\' title="https://pokeapi.co/" href="https://pokeapi.co/">PokéAPI</a>.</p><p>The main goal with this project was to know and learn hot the animations and gestures work on React Native. In order to do that it was used mainly the Animated API from React Native.</p>'
            }
          </RichText>
        </WorkContent>
      </WorkExperience>
    </WorkExperienceGroup>
  );
};
