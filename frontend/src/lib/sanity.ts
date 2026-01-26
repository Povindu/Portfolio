import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { DevProject, Profile } from "../../../backend/sanity.types";
export type { DevProject, Profile };

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

export async function getProfile() {
  const query = `*[_type == "profile"][0]{
    fullName,
    headline,
    shortBio,
    email,
    location,
    availability,
    "resumeURL": resume.asset->url,
    socialLinks
  }`;
  return await sanityClient.fetch(query);
}