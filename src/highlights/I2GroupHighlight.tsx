import highlightCss from "./Highlight.module.css"
import i2HighlightCss from "./I2GroupHighlight.module.css"

const I2GroupHighlight = () => {
    return (
        <>
            <div>
            <div className={`${highlightCss.container_image}`}>
            <img src="/i2/spiderweb.png" className={`${highlightCss.img}`}/>
            <img src="/i2/crimes1.png" className={`${highlightCss.img} ${i2HighlightCss.drop_bounce1}`}/>
            <img src="/i2/crimes2.png" className={`${highlightCss.img} ${i2HighlightCss.drop_bounce2}`}/>
            <img src="/i2/crimes3.png" className={`${highlightCss.img} ${i2HighlightCss.drop_bounce3}`}/>
            </div>
            </div>
            <p >
                Imagine that scene from Minority Report where Tom Cruise is looking at footage of "future crimes" but instead of it being a 3D hologram it's a 2D, on a browser and shows text.
            </p>
        </>
    )
}

export default I2GroupHighlight
