import highlightCss from "./Highlight.module.css"
import velmaHighlightCss from "./VelmaModeHighlight.module.css"

const VelmaModeHighlight = () => {
    return (
        <>
            <div>
            <div className={`${highlightCss.container_image}`}>
                <img 
                    src="/velmaMode/velmaNoGlasses.png" 
                    className={`${highlightCss.img} ${velmaHighlightCss.blur}`}
                />
                <img 
                    src="/velmaMode/velmaNoGlasses.png" 
                    className={`${highlightCss.img} ${velmaHighlightCss.mask} ${velmaHighlightCss.blur_up}`}
                />
                <img 
                    src="/velmaMode/velmaGlasses.png" 
                    className={`${highlightCss.img} ${velmaHighlightCss.move_up}`}
                />
            </div>
            </div>
            <p >
                The core idea of this project was to provide users with the control to change the size of text and at the same time respect the existing layout of the applications the wrapping component is used in.
            </p>
        </>
    )
}

export default VelmaModeHighlight
