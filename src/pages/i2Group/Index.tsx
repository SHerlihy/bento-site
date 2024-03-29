import { Panel, PanelCol, PanelRow, PanelContent } from '../../panels/Panel'

import bentoStyles from '../../shared/styles/bentoStyles.module.css'

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
                        <h2>
                            Highlight
                        </h2>
                    </article>
                </Panel>

                <Panel rowBegin={5} rowEnd={15} colBegin={2} colEnd={9} to={"velmaMode"}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="three"
                        />
                    </PanelCol>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={2} colEnd={18} to={"sherlihyDotCom"}>
                    <PanelRow>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="Text Magnifier"
                        >
                        </PanelContent>
                    </PanelRow>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={18} colEnd={32} to={"i2Group"}>
                    <PanelRow>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="four"
                        />
                    </PanelRow>
                </Panel>

                <Panel rowBegin={8} rowEnd={15} colBegin={25} colEnd={32} to={"resumeGrader"}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="SIx"
                        />
                    </PanelCol>
                </Panel>

                <Panel rowBegin={2} rowEnd={8} colBegin={25} colEnd={32}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="seven"
                        />
                    </PanelCol>
                </Panel>
        </main>
    </>
  )
}

export default Index
