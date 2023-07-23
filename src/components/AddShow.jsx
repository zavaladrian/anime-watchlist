

export default function AddShow ()  {
    return (
    <form>
    <div className='space-y-12 sm:space-y-16 bg-white'>
    <div>
    <h2 className="text-base font-semibold leading-7 text-gray-900"> Add Your Own Show!
    </h2>
    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            You got a show you want to add to the list? You can add it here to add to your own list!
          </p>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                TV Show Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
             
              <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Naruto"
                  />
              </div>
              </div>
          </div>
          </div>


    </div>
    </div>
    </form>
    );
}

