import { Hero } from "@/components/naur/hero"
import { ProblemSection } from "@/components/naur/problem-section"
import { GinsengFeatureSection } from "@/components/naur/ginseng-feature-section"
import { SocialProofSection } from "@/components/naur/social-proof-section"
import { SolutionsSection } from "@/components/naur/solutions-section"
import { AboutPreview } from "@/components/naur/about-preview"

export default function Page() {
  return (
    <main className="flex-1">
      <Hero />
      <ProblemSection />
      <GinsengFeatureSection />
      <SolutionsSection />
      <SocialProofSection />
      <AboutPreview />
    </main>
  )
}
