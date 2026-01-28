import { BlurFade } from "@/components/ui/blur-fade"; 
import { Meteors } from "@/components/ui/meteors";
import { urlFor } from "@/lib/sanity";
import type { Profile } from "@/lib/sanity"; 

interface Props {
  profile: Profile;
}

export const HeroSection = ({ profile }: Props) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-background">

      <Meteors number={20} />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full px-6">
        

        <div className="text-left max-w-2xl flex flex-col gap-4">
          

          <BlurFade delay={0.25} inView>
            <h1 className="text-4xl md:text-6xl w-full font-bold tracking-tight text-zinc-900 dark:text-white font-geist">
              {profile.fullName}
            </h1>
          </BlurFade>


          <BlurFade delay={0.35} inView>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200 font-geist">
              {profile.headline}
            </h2>
          </BlurFade>


          <BlurFade delay={0.45} inView>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {profile.shortBio}
            </p>
          </BlurFade>


          <BlurFade delay={0.55} inView>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Work
              </a>
              {profile.resumeURL && (
                <a
                  href={profile.resumeURL ?? "/resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-200 text-zinc-900 font-medium rounded-lg hover:bg-zinc-50 transition dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Download CV
                </a>
              )}
            </div>
          </BlurFade>
        </div>

        {profile.profileImage && (
          <BlurFade delay={0.65} inView className="mt-10 md:mt-0 md:ml-12">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={urlFor(profile.profileImage).width(800).height(800).url()}
                alt={profile.fullName}
                className="w-full h-full object-cover"
              />
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
};