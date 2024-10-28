
import { HERO_CONTENT } from "../constants"

const Hero = () => {
  return (
    <div className="pb-20 lg:mb-24 border-b">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img src="matthewOsko.png" alt="Matthew Osko" className="rounded-3xl w-3/4 object-contain mb-6 mt-20 pt-2 pl-9"/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start mt-11">
            <h1 className="mb-4 mt-16 ml-12 pb-2 lg:text-7xl font-extrabold text-white">
              Frontend Developer, entrapeneur and amateur climber.
            </h1>
            <div className="ml-12 mt-30 text-lg mb-5 pr-20 font-thin tracking-wide">
              {HERO_CONTENT}
            </div>
            <div className="mt-4">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-stone-200 rounded-full p-4 text-sm text-stone-800 ml-12 hover:scale-50 transition-transform duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
