import InfoCard from '../components/InfoCard';
import 'animate.css'
import { FadeIn } from '../components/FadeIn';


function HomePage() {
  return (
    <>
    
      <div className="relative isolate overflow-hidden pt-20">
        <img
          src="src/assets/img/BigGroup.jpg"
          alt="group"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <FadeIn>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-9xl font-bold border bg-indigo-400 bg-opacity-80 tracking-tight text-black font-serif	">
             Anime Watchlist
            </h1>
            <div className="mt-6 text-lg leading-8 text-gray-100 bg-black">
              -A well-curated watchlist can help you keep track of what you want
              to watch, discover new series, and ensure you don't miss out on
              hidden gems.
              <br />
              - You can begin with our suggestions or you can look at curated list and add straight to your watchlist!
              <br />
              -Or if you are feeling adventurous, click on "What should I watch tonight", which will randomize a show from the suggestions!
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="filter"
                className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Lets Start with some suggestions!
              </a>
            </div>
          </div>
        </div>
        </FadeIn>

      </div>
      <br /> 
     
      <FadeIn>
             <InfoCard />
             </FadeIn>
<br />
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}

export default HomePage;
