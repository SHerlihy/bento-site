import { useState } from "react"
import Highlight from "../home/Highlight"
import { Panel, PanelCol, PanelRow } from "../../panels/Panel"
import SherlihyDotComContent from "../../shared/panels/SherlihyDotComContent"
import I2Content from "../../shared/panels/I2Content"
import ResumeGraderContent from "../../shared/panels/ResumeGrader"
import AuthServiceContent from "../../shared/panels/AuthService"
import VelmaModeContent from "../../shared/panels/VelmaModeContent"

import bentoStyles from "../../shared/styles/bentoStyles.module.css"

function HomeLeaf() {
    const [highlightContent, setHighlightContent] = useState("highlight")

  return (
        <main className={`${bentoStyles.grid}`}>
                <Panel rowBegin={2} rowEnd={5} colBegin={2} colEnd={9}>
                    <article>
                        <p>
                            Reset
                        </p>
                    </article>
                </Panel>

                <Panel rowBegin={2} rowEnd={15} colBegin={9} colEnd={25}>
                    <article>
                        {(
                            ()=>{
                            switch (highlightContent) {
                                case "velma":
                                return <VelmaModeHighlight/>
                                default:
                                return <Highlight/>
                            }
                            }
                        )()}
                    </article>
                </Panel>

                <Panel rowBegin={5} rowEnd={15} colBegin={2} colEnd={9}>
                    <button 
                        onClick={()=>{setHighlightContent("velma")}}
                        className={`${bentoStyles.invis_button}`}>
                    <PanelCol>
                        <VelmaModeContent/>
                    </PanelCol>
                    </button>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={2} colEnd={18} >
                    <PanelRow>
                        <SherlihyDotComContent/>
                    </PanelRow>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={18} colEnd={32}>
                    <PanelRow>
                        <I2Content/>
                    </PanelRow>
                </Panel>

                <Panel rowBegin={8} rowEnd={15} colBegin={25} colEnd={32}>
                    <PanelCol>
                        <ResumeGraderContent/>
                    </PanelCol>
                </Panel>

                <Panel rowBegin={2} rowEnd={8} colBegin={25} colEnd={32}>
                    <PanelCol>
                        <AuthServiceContent/>
                    </PanelCol>
                </Panel>
        </main>
  )
}

function VelmaModeHighlight(){
    return (
        <p>
            Velma
        </p>
    )
}

export default HomeLeaf
