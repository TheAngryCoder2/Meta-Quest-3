import Logo from './assets/Untitled.webp'
import MetaQuest from './assets/hpGVABz7aZSgJRMMQjPsA-970-80.jpg.webp'


export default function App() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 font-sans">
      {/* Header */}
      <div className="flex w-full mb-16">
        <img src={Logo} width={200} />
      </div>
      {/* Main Section */}
      
      <div className='flex-1 flex flex-col items-start gap-4'>
        <p className='text-lg font-medium'>
          Meta Quest 3
        </p>
      </div>
      <img src={MetaQuest} className='w-full rounded-3xl shadow-lg m-10'/>
      {/* Footer */}
      <div className='text-justify'>
        <p>
        Put on the Meta Quest 3 and watch the world around you grow. 
        It's got 2 RGB cameras that let you see the room you're in and fill it with apps,
         games and experiences. You can play digital board games on your coffee table or slay monsters coming at you from a virtual hole in your wall. All nice and ultra-realistic, curtesy of the 4K+ Infinite Display. It fills your field of view, so you can forget about the real world and get lost in the virtual one. That takes some serious processing power. 
        Like the Snapdragon XR2 Gen 2 processor, with twice the GPU power of the Quest 2.
        </p>
      </div>
    </div>
  )
}