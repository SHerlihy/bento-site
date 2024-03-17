import HomeHighlightCss from "./HomeHighlight.module.css"

const HomeHighlight = () => {
    return (
    <>
        <div className={`${HomeHighlightCss.container_padding}`}>
        <div className={`${HomeHighlightCss.profile_img_container}`}>
            <div className={`${HomeHighlightCss.constrained}`}>
                <img src="/sherlihy.png" className={`${HomeHighlightCss.img}`}/>
            </div>
        </div>
        </div>
            <p>
                Welcome, here I reflect on projects I have worked on. The purpose of these reflections is to attribute my progression and learning to tangible artifacts.
            </p>
    </>
    )
}

export default HomeHighlight
