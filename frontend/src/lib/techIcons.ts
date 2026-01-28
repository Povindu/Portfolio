export const getTechIconName = (tech: string): string | null => {
  const t = tech.toLowerCase();

  if (t.includes("typescript") || t === "ts") return "logos:typescript-icon";
  if (t.includes("javascript") || t === "js") return "logos:javascript";
  if (t.includes("react")) return "logos:react";
  if (t.includes("next")) return "logos:nextjs-icon";
  if (t.includes("astro")) return "logos:astro-icon";
  if (t.includes("node")) return "logos:nodejs-icon";
  if (t.includes("express")) return "logos:express";
  if (t.includes("tailwind")) return "logos:tailwindcss-icon";
  if (t.includes("postgres")) return "logos:postgresql";
  if (t.includes("mongo")) return "logos:mongodb-icon";
  if (t.includes("mysql")) return "logos:mysql";
  if (t.includes("redis")) return "logos:redis";
  if (
    t.includes("asp.net") ||
    t.includes("aspnet") ||
    t.includes("asp.net core")
  )
    return "logos:dotnet";
  if (t.includes("docker")) return "logos:docker-icon";
  if (t.includes("kubernetes") || t.includes("k8s")) return "logos:kubernetes";
  if (t.includes("aws")) return "logos:aws";
  if (t.includes("azure")) return "logos:microsoft-azure";
  if (t.includes("gcp") || t.includes("google cloud")) return "logos:google-cloud";

  return null;
};
