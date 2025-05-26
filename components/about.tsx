import { Target, PenTool, TrendingUp, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const skills = [
    {
      icon: Target,
      title: "Strategic Thinker",
      description: "Developing comprehensive marketing strategies tailored to business goals.",
      color: "blue",
    },
    {
      icon: PenTool,
      title: "Creative Storyteller",
      description: "Crafting compelling narratives that resonate with target audiences.",
      color: "teal",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Using analytics to optimize campaigns and maximize ROI.",
      color: "indigo",
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "Always exploring new trends and technologies in marketing.",
      color: "cyan",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Who is Aya Ghiz - Freelancer & Entrepreneur</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 flex items-center justify-center shadow-xl">
                <div className="text-8xl">👩‍💼</div>
              </div>
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg">
                <CardContent className="p-4">
                  <div className="text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Based in Alger, Algérie
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a dedicated marketing professional with extensive experience in freelancing and managing my own
                marketing business. My mission is to help businesses thrive and achieve success in the digital
                landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-${skill.color}-100 flex items-center justify-center mb-4`}
                      >
                        <Icon className={`h-6 w-6 text-${skill.color}-600`} />
                      </div>
                      <h4 className="font-semibold mb-2">{skill.title}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
