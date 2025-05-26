import { Megaphone, PenTool, Hash, Search, Mail, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Marketing",
      description:
        "Comprehensive digital marketing plans tailored to your business goals, audience, and industry trends.",
      features: ["Market research & analysis", "Competitor benchmarking", "KPI-driven strategy"],
      color: "blue",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging, high-quality content that tells your brand story and connects with your audience.",
      features: ["Blog posts & articles", "Social media content", "Video scripts & storyboards"],
      color: "teal",
    },
    {
      icon: Hash,
      title: "Scripting",
      description: "Professional scriptwriting for videos, podcasts, and marketing campaigns.",
      features: ["Video scripts", "Podcast outlines", "Campaign narratives"],
      color: "indigo",
    },
    {
      icon: Search,
      title: "Strategies",
      description: "Data-driven marketing strategies that deliver measurable results.",
      features: ["Growth strategies", "Brand positioning", "Market penetration"],
      color: "cyan",
    },
    {
      icon: Mail,
      title: "Online Presence",
      description: "Building and maintaining a strong digital footprint across all platforms.",
      features: ["Website optimization", "Social media management", "Brand consistency"],
      color: "blue",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize your marketing efforts.",
      features: ["Campaign tracking", "Custom dashboards", "Performance recommendations"],
      color: "teal",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">What I Provide as a Service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-full bg-${service.color}-100 flex items-center justify-center mb-4`}
                  >
                    <Icon className={`h-7 w-7 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
