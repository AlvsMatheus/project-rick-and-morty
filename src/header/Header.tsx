import NavBar from "../assets/NavBar"

const Header = () => {

  return (
    <article className="relative flex justify-center items-center h-screen  bg-[url('./assets/rick-and-morty-bg.jpg')] bg-right bg-cover shadow-sm">
        <div className="h-full w-full absolute top-0 left-0 bg-green-600/10"/>
        <div className="flex h-full w-full absolute top-0 left-0 bg-black/40"/>
          <NavBar/>
        <div className="flex flex-col bg-white/5 p-7 backdrop-blur-md gap-8 justify-center items-center relative z-10 rounded-2xl">
            <h1 className="text-5xl md:text-7xl font-bold font-rick text-rick-border">RICK AND MORTY</h1>
            <p className="text-4xl md:text-5xl font-rick text-rick-border">Characters</p>
        </div>
    </article>
  )
}

export default Header
