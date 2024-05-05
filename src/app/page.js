import Collection from "@/Components/Collection/collection"
import Description from "@/Components/Description/description"
import Hero from "@/Components/Hero/Hero"
import Week from "@/Components/WeekComponents/week"






const page = () => {
  return (
    <div>
      <Hero/>
      <Week/>
      <Collection/>
      <Description/>
    </div>
  )
}

export default page