import css from './App.module.css'
css

import bentoStyles from './bentoStyles.module.css'
import bentoConfigA from './bentoConfigA.module.css'

function App() {
    bentoStyles
  return (
    <>
        <main className={`${bentoStyles.grid}`}>
                <section className={`${bentoStyles.return}`}>
                    <article>
                        <p>
                            Return
                        </p>
                    </article>
                </section>
                <section className={`${bentoConfigA.highlight}`}>
                    <article>
                        <h2>
                            Highlight
                        </h2>
                    </article>
                </section>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
                <section/>
        </main>
    </>
  )
}

export default App
