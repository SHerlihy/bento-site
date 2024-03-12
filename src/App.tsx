import { Panel, PanelCol, PanelRow, PanelContent } from './panels/Panel'
import css from './App.module.css'
css

import bentoStyles from './bentoStyles.module.css'

function App() {
  return (
    <>
        <main className={`${bentoStyles.grid}`}>
                <Panel rowBegin={2} rowEnd={5} colBegin={2} colEnd={9}>
                    <div className={`${bentoStyles.card}`}>
                    <article>
                        <p>
                            Return
                        </p>
                    </article>
                    </div>
                </Panel>

                <Panel rowBegin={2} rowEnd={15} colBegin={9} colEnd={25}>
                    <div className={`${bentoStyles.card}`}>
                    <article>
                        <h2>
                            Highlight
                        </h2>
                    </article>
                    </div>
                </Panel>

                <Panel rowBegin={5} rowEnd={15} colBegin={2} colEnd={9}>
                    <div className={`${bentoStyles.card}`}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="three"
                        />
                    </PanelCol>
                    </div>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={2} colEnd={18}>
                    <div className={`${bentoStyles.card}`}>
                    <PanelRow>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="Text Magnifier"
                        >
                        </PanelContent>
                    </PanelRow>
                    </div>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={18} colEnd={32}>
                    <div className={`${bentoStyles.card}`}>
                    <PanelRow>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="four"
                        />
                    </PanelRow>
                    </div>
                </Panel>

                <Panel rowBegin={8} rowEnd={15} colBegin={25} colEnd={32}>
                    <div className={`${bentoStyles.card}`}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="SIx"
                        />
                    </PanelCol>
                    </div>
                </Panel>

                <Panel rowBegin={2} rowEnd={8} colBegin={25} colEnd={32}>
                    <div className={`${bentoStyles.card}`}>
                    <PanelCol>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="seven"
                        />
                    </PanelCol>
                    </div>
                </Panel>
        </main>
    </>
  )
}

export default App

                // <section>
                //     <PanelCol>
                //         <PanelContent
                //         items={["Distributed State", "MobX"]}
                //         title="Frontend Developer"
                //         >
                //         </PanelContent>
                //     </PanelCol>
                // </section>
                // <section>
                //     <article>
                //         <h2>
                //             Distributed Architecture
                //         </h2>
                //     </article>
                // </section>
                // <section>
                //     <article>
                //         <h2>
                //             Auto Collage
                //         </h2>
                //     </article>
                // </section>
                // <section>
                //     <article>
                //         <h2>
                //             Frontend to Image
                //         </h2>
                //     </article>
                // </section>
                // <section>
                //     <article>
                //         <h2>
                //             Auth Service
                //         </h2>
                //     </article>
                // </section>
                // <section>
                //     <article>
                //         <h2>
                //             Resume Grader
                //         </h2>
                //     </article>
                // </section>
