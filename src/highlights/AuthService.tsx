import highlightCss from "./Highlight.module.css"
import authHighlightCss from "./AuthHighlight.module.css"

const AuthServiceHighlight=()=>{
    return (
        <>
            <div>
            <div className={`${highlightCss.container_image}`}>
                <img src="/authService/robo3.png" className={`${highlightCss.img} ${authHighlightCss.queue_up3}`}/>
                <img src="/authService/robo2.png" className={`${highlightCss.img} ${authHighlightCss.queue_up2}`}/>
                <img src="/authService/robo1.png" className={`${highlightCss.img} ${authHighlightCss.queue_up1}`}/>
                <img src="/authService/boop3.png" className={`${highlightCss.img} ${authHighlightCss.talk3}`}/>
                <img src="/authService/boop2.png" className={`${highlightCss.img} ${authHighlightCss.talk2}`}/>
                <img src="/authService/notAToaster.png" className={`${highlightCss.img} ${authHighlightCss.talk1}`}/>
                <img src="/authService/queueBarrier.png" className={`${highlightCss.img}`}/>
            </div>
            </div>
            <p >
                The concept of managing data can start as a simple idea, however, when considering security and compliance management becomes complex and complex solutions are required.
            </p>
        </>

    )
}

export default AuthServiceHighlight
