"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "Fashion Brand Instagram Campaign",
      description: "Increased engagement by 240% over 3 months with strategic content and hashtag research.",
      category: "social",
      tags: ["Instagram", "Content Strategy", "Influencer Collab"],
      gradient: "from-blue-200 to-cyan-300",
    },
    {
      title: "Tech Startup Blog Content",
      description: "Developed a 6-month content calendar that boosted organic traffic by 180%.",
      category: "content",
      tags: ["Content Writing", "SEO", "Lead Generation"],
      gradient: "from-teal-200 to-blue-300",
    },
    {
      title: "Product Launch Video Series",
      description: "Created a 5-part video series that drove 15,000+ views and 300+ leads.",
      category: "campaigns",
      tags: ["Video Production", "Scriptwriting", "YouTube"],
      gradient: "from-indigo-200 to-teal-300",
    },
    {
      title: "Email Marketing Campaign",
      description: "Designed and executed a campaign with 38% open rate and 12% conversion rate.",
      category: "campaigns",
      tags: ["Email Marketing", "Copywriting", "Automation"],
      gradient: "from-cyan-200 to-blue-300",
    },
    {
      title: "Facebook Ad Campaign",
      description: "Optimized ad sets that reduced CPA by 40% while increasing conversions by 25%.",
      category: "campaigns",
      tags: ["Facebook Ads", "Targeting", "Conversion"],
      gradient: "from-blue-200 to-indigo-300",
    },
    {
      title: "Website SEO Overhaul",
      description: "Technical and content SEO improvements that doubled organic traffic in 6 months.",
      category: "content",
      tags: ["SEO", "Keyword Research", "Content Strategy"],
      gradient: "from-teal-200 to-cyan-300",
    },
  ]

  const filters = [
    { id: "all", label: "All Work" },
    { id: "social", label: "Social Media" },
    { id: "content", label: "Content Writing" },
    { id: "campaigns", label: "Campaigns" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">See Our Recent Projects</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="text-6xl opacity-70">📊</div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 border-white text-white hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
