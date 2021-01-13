import React, { useState } from "react"

import SEO from "../components/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"
import Wrapper from "../components/wrapper/wrapper"

import Hero from "../components/hero/hero"
import Flyout from "../components/flyout/flyout"
import Tabs from "../components/tabs/tabs"

import Books from "../../json/books_core_v1.json"
import Data from "../../json/feats_v2.json"

import ImgDesktop from "../images/hero/hero-03.jpg"
import ImgMobile from "../images/hero/hero-03-mobile.jpg"

const Feats = () => {

  const [book, setBook] = useState("Core")
  // console.log(Data);
  const [flyout, flyoutUpdate] = useState("false")

  const [descriptName, descriptNameUpdate] = useState("")
  const [descriptType, descriptTypeUpdate] = useState("")
  const [descriptNeeded, descriptNeededUpdate] = useState("")
  const [descriptFull, descriptFullUpdate] = useState("")

  function description(book, compare) {

    let name = "Error"
    let type = "-"
    let needed = "-"
    let descript = "Feat not found."

    flyoutUpdate("true")

    Data.forEach((d, index) => {

      if (d.source === book && d.name === compare) {
        name = d.name
        type = d.type
        needed = d.prerequisites
        descript = d.benefit
      }

    })

    descriptNameUpdate(name)
    descriptTypeUpdate(type)
    descriptNeededUpdate(needed)
    descriptFullUpdate(descript)

  }

  return(

    <Page>

      <SEO title="Feats" />

      <Hero
        desktop={ImgDesktop}
        mobile={ImgMobile}
        title="Feats"
        size="small"
      />

      <Section type="both">

        <Wrapper wrapper="structure">

          <Tabs
            data={Books}
            state={book}
            click={setBook}
          />

          <table className="table">

            <tbody className="table-info">

            <tr className="table-row table-heading">
              <td className="table-col medium">Name</td>
              <td className="table-col large">Description</td>
              <td className="table-col large">Requirement(s)</td>
              <td className="table-col small">Type</td>
              <td className="table-col small">Details</td>
            </tr>

            {Data.map((d, index) => {

              if (d.source === book) {
                return(
                  <tr className="table-row" key={index} aria-live="polite">
                    <td className="table-col feat-name">{d.name}</td>
                    <td className="table-col feat-desc">{d.description}</td>
                    <td className="table-col feat-prereq">{d.prerequisites ? d.prerequisites : '-'}</td>
                    <td className="table-col feat-type">{d.type}</td>
                    <td className="table-col feat-flyout">
                      <button
                        className="link-utility"
                        aria-haspopup="true"
                        aria-controls="character-storage"
                        onClick={(e) => description(d.source, d.name)}
                      >
                        <span className="material-icons" aria-hidden="true">exit_to_app</span>
                      </button>
                    </td>
                  </tr>
                )
              }
              else { return null }

            })}

            </tbody>

          </table>

        </Wrapper>

      </Section>

      <Flyout
        flyoutId="character-storage"
        flyoutType={"right"}
        flyoutOpen={flyout}
        flyout={flyout}
        flyoutUpdate={flyoutUpdate}
      >
        <h3 className="heading-4">{descriptName}</h3>
        <p className="gutter-top-8">{descriptType}</p>
        <p className="gutter-top-8">{descriptNeeded}</p>
        <p className="gutter-top-8">{descriptFull}</p>
      </Flyout>

    </Page>

  )

}

export default Feats
