import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Stratsford School Bab Ezzouar",
      role: "Marketing Director",
      content:
        "Aya transformed our school's social media presence completely. Her strategic approach and creative content helped us triple our engagement rates and significantly increase our enrollment inquiries. She's incredibly professional and delivers beyond expectations.",
      gradient: "from-blue-200 to-cyan-300",
    },
    {
      name: "Michael Chen",
      company: "Lilix Consulting Mohammadia Algiers",
      role: "Founder & CEO",
      content:
        "Working with Aya on our content strategy was a game-changer. She understood our consulting brand voice immediately and created content that resonated perfectly with our target audience. Our blog traffic increased by 180% in just 4 months!",
      gradient: "from-teal-200 to-blue-300",
    },
    {
      name: "Mounir Develops",
      company: "Tech Content Creator",
      role: "Content Creator",
      content:
        "Aya's expertise in content creation and social media strategy helped me grow my tech content channel exponentially. Her ability to combine creativity with data-driven decisions is truly impressive. Highly recommend her services!",
      gradient: "from-indigo-200 to-teal-300",
    },
    {
      name: "Amina Bennis",
      company: "Aya Collection Ecommerce Clothes Brand",
      role: "Brand Manager",
      content:
        "Aya's Instagram campaign for our fashion brand was phenomenal. She brought fresh ideas, executed flawlessly, and delivered measurable results. Our online sales increased by 300% during the campaign period.",
      gradient: "from-cyan-200 to-blue-300",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">What my clients say about working with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mr-4 text-2xl`}
                  >
                    👤
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{testimonial.company}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
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
