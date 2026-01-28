import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

interface Props {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: Props) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-3xl font-bold tracking-tight mb-6 font-geist">
        Work Experience
      </h2>

      {experiences.map((job, id) => (
        <BlurFade key={job._id} delay={0.25 + id * 0.05} inView>
          <div className="group relative grid grid-cols-[auto_1fr] items-start gap-4 rounded-lg border border-transparent p-4 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-200 dark:hover:border-zinc-800">
            <div className="mt-1 flex h-12 w-12 items-center justify-center overflow-hidden border border-zinc-200 bg-white dark:border-zinc-800">
              {job.logo ? (
                <img
                  src={urlFor(job.logo).width(200).url()}
                  alt={job.company}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-sm font-bold text-zinc-500">
                  {job.company?.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            {/* Content Column */}
            <div className="space-y-1.5 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-semibold text-xl leading-none tracking-tight text-zinc-900 dark:text-white">
                  {job.company}
                </h3>
                <span className="text-sm text-zinc-700">
                  {formatDate(job.startDate || "")} –{" "}
                  {job.endDate ? formatDate(job.endDate || "") : "Present"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-300">
                  {job.position}
                </p>
              </div>

              {job.description && (
                <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed pt-2">
                  {job.description}
                </p>
              )}
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
};
