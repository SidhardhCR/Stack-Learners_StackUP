import Carosal from "./components/Carosal";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className=" min-h-screen  bg-white">
      <Navbar/>
      <Carosal/>
    </main>
  )
}
