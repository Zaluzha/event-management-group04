import { Music, Theater, Gamepad, Utensils, Palette, Dumbbell } from 'lucide-react'

const categories = [
  {
    name: 'Music',
    icon: Music,
    color: 'text-pink-500',
  },
  {
    name: 'Performing Arts',
    icon: Theater,
    color: 'text-purple-500',
  },
  {
    name: 'Gaming',
    icon: Gamepad,
    color: 'text-blue-500',
  },
  {
    name: 'Food & Drink',
    icon: Utensils,
    color: 'text-orange-500',
  },
  {
    name: 'Arts',
    icon: Palette,
    color: 'text-green-500',
  },
  {
    name: 'Sports & Fitness',
    icon: Dumbbell,
    color: 'text-red-500',
  },
]

export default function EventCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Check out trending categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <category.icon className={`w-8 h-8 ${category.color} mb-2`} />
              <span className="text-sm text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

