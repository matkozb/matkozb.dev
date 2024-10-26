import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialised">
      <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Tech />
      </div>
    </div>
  )
}

export default App
