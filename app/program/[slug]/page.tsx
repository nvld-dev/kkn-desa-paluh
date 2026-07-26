import { notFound } from "next/navigation";

import Background from "@/components/effects/Background";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// import ProgramCTA from "@/components/program/ProgramCTA";
import ProgramDetailHero from "@/components/program/ProgramDetailHero";
import ProgramGallery from "@/components/program/ProgramGallery";
import ProgramInfo from "@/components/program/ProgramInfo";
import ProgramOverview from "@/components/program/ProgramOverview";
import ProgramResults from "@/components/program/ProgramResults";
import RelatedPrograms from "@/components/program/RelatedPrograms";

import { getProgramBySlug, getPrograms } from "@/data/programs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getPrograms().map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = getPrograms()
    .filter((item) => item.id !== program.id)
    .slice(0, 2);

  return (
    <>
      <Background />
      <Navbar />

      <main className="relative z-10">
        <ProgramDetailHero program={program} />

        <ProgramOverview program={program} />

        <ProgramInfo program={program} />

        <ProgramGallery gallery={program.gallery} title={program.title} />

        <ProgramResults results={program.results} />
        
        <RelatedPrograms programs={relatedPrograms} />
      </main>

      <Footer />
    </>
  );
}



        


        

        // <ProgramCTA />