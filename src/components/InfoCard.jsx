import Dragon from '../assets/img/Dragon_Ball.png'
import What from '../assets/img/whatis.jpg'
import Sketch from '../assets/img/sketch.jpg'

const posts = [
    {
      id: 0,
      title: 'What is Anime?',
      description:
        'Anime is a Japanese animation style that is produced or influenced by it. It is the Japanese term for cartoon or animation where the Japanese use the word to describe all cartoons irrespective of the nation. However, outside Japan, anime denotes animation movies that come exclusively from Japan, distinguished by blazing graphics, energetic characters, and attractive themes such as sci-fi, romance, and supernatural forces. Therefore, consider this syllogism: all anime shows are cartoons, but not all cartoons are anime. ',
      image:
        What,
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 1,
      title: 'History',
      description:
        'Anime has been around for almost a century. The first confirmed example, Namakura Gatana, was released in 1917 and lasted only four minutes. It faced highs and lows as it overcame various hurdles domestically and globally. Various artists have pushed the boundaries and stories told with anime as their preferred choice of medium. The genres that fall under this umbrella are as varied as the art form. Many people in the West have a perception of how anime looks. Artistry and styles appear endless, and artistic expression depends on the artists. However, regardless of the different types, one thing is consistent throughout these productions: the process is time-consuming. ',
      image:
       Dragon,
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      id: 2,
      title: 'Creating Anime',
      description:
        'Technically, anime is identical to the animation produced in Western culture. However, it consumes a tremendous amount of time and effort. Written, storyboarded, workshopped, animated, voiced, and animated stories are all required. This lengthy process can take months, if not years, to complete. A team of artists does these projects, usually overseen by a director. Anime is still a challenging form to produce, even with modern technology that allows artists to make animation with digital tools. Digital technology has pushed the creative boundaries of what these films can look like using lighting techniques and other tactics, but it has not taken away from the artists’ hard work.The inventiveness of the artists that produce animation is what makes it so unique. The medium allows for the subversion of genres and the portrayal of stories that would otherwise be impossible to render in any other audiovisual form of storytelling.',
      image:
        Sketch,
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
 
  ]
  
  export default function InfoCard() {
    return (
      <div className="bg-white bg-opacity-70 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mt-5 space-y-50 lg:mt-2 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif object-center items-center gap-x-4 text-2xl">
                      <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-red-300"
                    >
                      {post.title}
                    </a>
                    </div>
                    < br />
                    <div className="group relative max-w-xl font-mono	">
                      <p className="mt-5 text-lg leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }