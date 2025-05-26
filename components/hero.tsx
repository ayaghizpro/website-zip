import Link from "next/link"
import { ArrowRight, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Aya Ghiz
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                I will Boost your Marketing & improve your business overall performance
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                As a freelance digital marketing expert, I specialize in boosting your online presence and driving
                business growth. With a tailored approach, I ensure your marketing strategies are effective and
                impactful.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
              >
                <Link href="#contact">
                  Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                <Link href="#portfolio">View My Work</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-gray-600">Dedication</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">80%</div>
                <div className="text-sm text-gray-600">Creativity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">80%</div>
                <div className="text-sm text-gray-600">Hard work</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 via-teal-200 to-cyan-200 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-6xl text-blue-400">👩‍💼</div>
                </div>
              </div>

              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 bg-white shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">5+ Years</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 bg-white shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">50+ Clients</div>
                    <div className="text-xs text-gray-600">Satisfied</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
