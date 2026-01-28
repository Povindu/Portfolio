import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type {
  DevProject,
  Profile as SanityProfile,
  Experience,
  Education,
} from "../../../backend/sanity.types";
export type { DevProject, Experience, Education };

export type Profile = SanityProfile & {
  /**
   * Resolved URL to the resume PDF (from `resume.asset->url` in GROQ)
   */
  resumeURL?: string;
};

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProfile(): Promise<Profile | null> {
  const query = `*[_type == "profile"][0]{
    fullName,
    headline,
    shortBio,
    email,
    location,
    profileImage,
    "resumeURL": resume.asset->url,
    socialLinks
  }`;
  return await sanityClient.fetch<Profile | null>(query);
}