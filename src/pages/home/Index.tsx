import { Panel, PanelCol, PanelRow } from '../../panels/Panel'
import AuthServiceContent from '../../shared/panels/AuthService'
import I2Content from '../../shared/panels/I2Content'
import ResumeGraderContent from '../../shared/panels/ResumeGrader'
import SherlihyDotComContent from '../../shared/panels/SherlihyDotComContent'
import VelmaModeContent from '../../shared/panels/VelmaModeContent'

import bentoStyles from '../../shared/styles/bentoStyles.module.css'
import Highlight from './Highlight'

function Index() {
  return (
    <>
        <main className={`${bentoStyles.grid}`}>
                <Panel rowBegin={2} rowEnd={5} colBegin={2} colEnd={9}>
                    <article>
                        <p>
                            Return
                        </p>
                    </article>
                </Panel>

                <Panel rowBegin={2} rowEnd={15} colBegin={9} colEnd={25}>
                    <article>
                        <Highlight/>
                    </article>
                </Panel>

                <Panel rowBegin={5} rowEnd={15} colBegin={2} colEnd={9} to={"velmaMode"}>
                    <PanelCol>
                        <VelmaModeContent/>
                    </PanelCol>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={2} colEnd={18} to={"sherlihyDotCom"}>
                    <PanelRow>
                        <SherlihyDotComContent/>
                    </PanelRow>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={18} colEnd={32} to={"i2Group"}>
                    <PanelRow>
                        <I2Content/>
                    </PanelRow>
                </Panel>

                <Panel rowBegin={8} rowEnd={15} colBegin={25} colEnd={32} to={"resumeGrader"}>
                    <PanelCol>
                        <ResumeGraderContent/>
                    </PanelCol>
                </Panel>

                <Panel rowBegin={2} rowEnd={8} colBegin={25} colEnd={32} to={"authService"}>
                    <PanelCol>
                        <AuthServiceContent/>
                    </PanelCol>
                </Panel>
        </main>
    </>
  )
}

export default Index
