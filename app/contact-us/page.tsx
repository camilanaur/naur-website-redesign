"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackToHome } from "@/components/naur/back-to-home"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Faster Clinical Trial (CT) Activation Timeline",
  "Accelerate patient access to advanced treatments",
  "Reduce institutional cost significantly",
  "Integrated Monitoring to Improve Transparency",
  "Improve data accuracy and compliance",
  "Easily scalable to meet your growth needs",
]

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
]

export default function ContactUsPage() {
  const [activeTab, setActiveTab] = useState<"demo" | "ideas">("demo")
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const [demoForm, setDemoForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    location: "",
    therapeuticArea: "",
    state: "",
  })

  const [ideasForm, setIdeasForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    location: "",
    message: "",
  })

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Demo form submitted:", demoForm)
    // Handle form submission
  }

  const handleIdeasSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Ideas form submitted:", ideasForm)
    // Handle form submission
  }

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4">
        <BackToHome />
      </div>
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-background py-12 lg:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {/* Tab Buttons */}
          <div
            className={cn(
              "mb-10 flex justify-center gap-4 transition-all duration-700 ease-out",
              sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <button
              type="button"
              onClick={() => setActiveTab("demo")}
              className={cn(
                "rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300",
                activeTab === "demo"
                  ? "bg-transparent text-brand-blue border-b-2 border-brand-blue"
                  : "bg-secondary text-muted-foreground hover:text-primary"
              )}
            >
              Get a Demo
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ideas")}
              className={cn(
                "rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300",
                activeTab === "ideas"
                  ? "bg-transparent text-brand-blue border-b-2 border-brand-blue"
                  : "bg-secondary text-muted-foreground hover:text-primary"
              )}
            >
              Share your ideas
            </button>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Benefits */}
            <div
              className={cn(
                "transition-all duration-700 delay-100 ease-out",
                sectionVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
            >
              <h1 className="text-2xl font-bold leading-tight text-primary md:text-3xl lg:text-4xl">
                <span className="text-brand-blue">Ready to simplify</span>
                <br />
                complex healthcare workflows?
              </h1>
              <h2 className="mt-4 text-lg font-semibold text-brand-blue">
                Explore Our Key Features
              </h2>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      sectionVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    )}
                    style={{ transitionDelay: sectionVisible ? `${200 + index * 80}ms` : "0ms" }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-base text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Form */}
            <div
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-700 delay-200 ease-out lg:p-8",
                sectionVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
            >
              {activeTab === "demo" ? (
                <>
                  <h2 className="text-xl font-bold text-primary md:text-2xl">
                    Register Now to Access a Demo!
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please provide your <strong className="text-primary">contact information</strong> and a member of our team will reach out to schedule a demo.
                  </p>

                  <form onSubmit={handleDemoSubmit} className="mt-6 space-y-4">
                    <Input
                      placeholder="Full name*"
                      value={demoForm.fullName}
                      onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })}
                      required
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input
                        type="email"
                        placeholder="Email*"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        required
                        className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone number*"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        required
                        className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input
                        placeholder="Role*"
                        value={demoForm.role}
                        onChange={(e) => setDemoForm({ ...demoForm, role: e.target.value })}
                        required
                        className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                      />
                      <Input
                        placeholder="Company / Institution*"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        required
                        className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                      />
                    </div>
                    <Input
                      placeholder="Location*"
                      value={demoForm.location}
                      onChange={(e) => setDemoForm({ ...demoForm, location: e.target.value })}
                      required
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      placeholder="Therapeutic area of interest*"
                      value={demoForm.therapeuticArea}
                      onChange={(e) => setDemoForm({ ...demoForm, therapeuticArea: e.target.value })}
                      required
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <select
                      value={demoForm.state}
                      onChange={(e) => setDemoForm({ ...demoForm, state: e.target.value })}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground focus:border-accent focus:ring-accent focus:outline-none"
                    >
                      <option value="">State*</option>
                      {usStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>

                    <p className="text-xs text-muted-foreground">
                      We prioritize your privacy. Your information will remain confidential and will only be used to schedule your demo.
                    </p>

                    <Button
                      type="submit"
                      className="h-12 w-full rounded-full bg-accent text-sm font-semibold text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Get a Demo
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-primary md:text-2xl">
                    Have you identified an issue you would like to address?
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;re here to help. Let&apos;s find the best solution for your needs. We&apos;ll contact you within two business days to schedule a meeting and discuss your goals.
                  </p>

                  <form onSubmit={handleIdeasSubmit} className="mt-6 space-y-4">
                    <Input
                      placeholder="Name"
                      value={ideasForm.name}
                      onChange={(e) => setIdeasForm({ ...ideasForm, name: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={ideasForm.email}
                      onChange={(e) => setIdeasForm({ ...ideasForm, email: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      value={ideasForm.phone}
                      onChange={(e) => setIdeasForm({ ...ideasForm, phone: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      placeholder="Role"
                      value={ideasForm.role}
                      onChange={(e) => setIdeasForm({ ...ideasForm, role: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      placeholder="Company / Institution"
                      value={ideasForm.company}
                      onChange={(e) => setIdeasForm({ ...ideasForm, company: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <Input
                      placeholder="Location"
                      value={ideasForm.location}
                      onChange={(e) => setIdeasForm({ ...ideasForm, location: e.target.value })}
                      className="h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
                    />
                    <textarea
                      placeholder="Comment or Message"
                      value={ideasForm.message}
                      onChange={(e) => setIdeasForm({ ...ideasForm, message: e.target.value })}
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent focus:outline-none resize-none"
                    />

                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Rest assured, your information will remain confidential and will only be used to discuss your new idea.
                    </p>

                    <Button
                      type="submit"
                      className="h-12 w-full rounded-full bg-accent text-sm font-semibold text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Submit
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
