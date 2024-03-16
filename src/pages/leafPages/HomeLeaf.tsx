import Highlight from "../home/Highlight"
import { Panel, PanelCol, PanelLeaf, PanelRow } from "../../panels/Panel"
import SherlihyDotComContent from "../../shared/panels/SherlihyDotComContent"
import I2Content from "../../shared/panels/I2Content"
import ResumeGraderContent from "../../shared/panels/ResumeGrader"
import AuthServiceContent from "../../shared/panels/AuthService"
import VelmaModeContent from "../../shared/panels/VelmaModeContent"

import bentoStyles from "../../shared/styles/bentoStyles.module.css"
import { Route } from "../../routes/index"

function HomeLeaf() {
    const { highlight } = Route.useSearch()

  return (
        <main className={`${bentoStyles.grid}`}>
                <PanelLeaf 
                    rowBegin={2}
                    rowEnd={5}
                    colBegin={2}
                    colEnd={9}
                    queryParam="highlight"
                >
                    <article>
                        <p>
                            Reset
                        </p>
                    </article>
                </PanelLeaf>

                <Panel rowBegin={2} rowEnd={15} colBegin={9} colEnd={25}>
                    <article>
                        {(
                            ()=>{
                            switch (highlight) {
                                case "velma":
                                return <VelmaModeHighlight/>
                                default:
                                return <Highlight/>
                            }
                            }
                        )()}
                    </article>
                </Panel>

                <PanelLeaf 
                    rowBegin={5} 
                    rowEnd={15} 
                    colBegin={2} 
                    colEnd={9} 
                    queryParam="velma"
                >
                    <PanelCol>
                        <VelmaModeContent/>
                    </PanelCol>
                </PanelLeaf>

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
