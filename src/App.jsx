import { Besuchen } from "./components/besuchen"
import SafariPlanner from "./components/calender"
import { Du } from "./components/Du"
import { FirstSection } from "./components/fastsection"
import { Footer } from "./components/footer"
import { Form } from "./components/form"
import { Gruppe } from "./components/Gruppe"
import Niegivure from "./components/Niegivure"
import { Safari } from "./components/safari"
import Testimonial from "./components/testimonial"
import { Urlabs } from "./components/Urlabs"

function App() {
  

  return (
    <>
      <FirstSection/>
      <Besuchen/>
      <Gruppe/>
      <Safari/>
      <Du/>
      <SafariPlanner/>
      <Form/>
      <Urlabs/>
      <Testimonial/>
      <Niegivure/>
      <Footer/>
    </>
  )
}

export default App
