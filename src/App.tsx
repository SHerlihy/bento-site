import { Panel, PanelCol, PanelRow, PanelContent } from './panels/Panel'
import css from './App.module.css'
css

import bentoStyles from './bentoStyles.module.css'

function App() {
    bentoStyles
  return (
    <>
        <main className={`${bentoStyles.grid}`}>
                <Panel rowBegin={2} rowEnd={5} colBegin={2} colEnd={5}>
                    <article>
                        <p>
                            Return
                        </p>
                    </article>
                </Panel>

                <Panel rowBegin={5} rowEnd={15} colBegin={10} colEnd={22}>
                    <article>
                        <h2>
                            Highlight
                        </h2>
                    </article>
                </Panel>

                <Panel rowBegin={15} rowEnd={18} colBegin={10} colEnd={22}>
                    <PanelRow>
                        <PanelContent
                        items={["Accessibility", "React"]}
                        title="Text Magnifier"
                        >
                        </PanelContent>
                    </PanelRow>
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
