import {
  TechnologiesDocument,
  TechnologiesQuery,
  WorkExperiencesDocument,
  WorkExperiencesQuery,
} from "@/generated/graphql";
import { client } from "@/lib/apollo-client";

export class CmsService {
  async getTechnologies() {
    const { data } = await client.query<TechnologiesQuery>({
      query: TechnologiesDocument,
    });

    return data.technologies;
  }

  async getWorkExperiences() {
    const { data } = await client.query<WorkExperiencesQuery>({
      query: WorkExperiencesDocument,
    });

    return data.workExperiences;
  }
}
