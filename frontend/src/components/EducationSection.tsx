import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import type { Education } from "@/lib/sanity";

interface Props {
  educationList: Education[];
}

export const EducationSection = ({ educationList }: Props) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const sortedEducation = [...educationList].sort((a, b) => {
    const getLatestDate = (edu: Education) => {
      if (!edu.qualifications || edu.qualifications.length === 0) return 0;
      return Math.max(
        ...edu.qualifications.map((q) =>
          q.startDate ? new Date(q.startDate).getTime() : 0
        )
      );
    };

    return getLatestDate(b) - getLatestDate(a);
  });

  return (
    <div className="flex flex-col gap-0">
      <h2 className="text-3xl font-bold tracking-tight mb-3 flex items-center gap-2 font-geist">
        Education
      </h2>

      {sortedEducation.map((edu, id) => (
        <BlurFade key={edu._id} delay={0.25 + id * 0.05} inView>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="group relative grid grid-cols-[auto_1fr] items-start gap-4 rounded-lg border border-transparent px-4 py-4 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-200 dark:hover:border-zinc-800">
                <div className="mt-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 shadow-sm">
                  {edu.logo ? (
                    <img
                      src={urlFor(edu.logo).width(200).url()}
                      alt={edu.institute}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-zinc-500 text-center leading-tight">
                      {edu.institute?.slice(0, 3).toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="space-y-4 w-full pt-1">
                  <div>
                    <h3 className="font-semibold text-xl leading-none tracking-tight text-zinc-900 dark:text-white">
                      {edu.institute}
                    </h3>
                  </div>

                  <div className="space-y-8 border-l-2 border-zinc-100 dark:border-zinc-800 pl-4 ml-1">
                    {edu.qualifications?.map((qual: any, idx: number) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-zinc-200 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="font-medium text-lg text-zinc-800 dark:text-zinc-200">
                            {qual.qualificationName}
                          </h4>
                          <span className="text-sm text-zinc-700 whitespace-nowrap">
                            {formatDate(qual.startDate)} –{" "}
                            {qual.endDate
                              ? formatDate(qual.endDate)
                              : "Present"}
                          </span>
                        </div>

                        {qual.grade && (
                          <div className="mt-1">
                            <Badge
                              variant="outline"
                              className="text-sm py-0 px-2 h-5 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800"
                            >
                              Grade: {qual.grade}
                            </Badge>
                          </div>
                        )}

                        {qual.shortDescription && (
                          <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-2 leading-relaxed whitespace-pre-line">
                            {qual.shortDescription}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
};