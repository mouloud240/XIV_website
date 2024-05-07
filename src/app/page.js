import Collection from "@/Components/Collection/collection"
import Description from "@/Components/Description/description"
import Hero from "@/Components/Hero/Hero"
import SearchSection from "@/Components/Search/searchSection"
import Week from "@/Components/WeekComponents/week"






const page = () => {
  return (
    <div>
      <SearchSection/>
      <Hero/>
      <Week/>
      <Collection/>
      <Description/>
    </div>
  )
}

export default page