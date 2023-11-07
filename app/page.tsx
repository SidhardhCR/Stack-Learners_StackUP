import Card from "./components/Card";


export default function Home() {
  return (
    <main className=" bg-white">
     
      <div className="min-h-screen min-w-screen  bg-white container mx-auto py-20 px-8">
        <h1 className="text-5xl font-bold text-center text-black pb-10">Events</h1>
        <div className="grid lg:grid-cols-4 gap-16">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

     
      </div>



     
    </main>
  )
}
