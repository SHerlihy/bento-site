import { ReactNode } from "react"
import panelCss from "./panel.module.css"

export const Panel = (props: {
    rowBegin: number
    rowEnd: number
    colBegin: number
    colEnd: number
    children: ReactNode
}) => {
    const gridStyle = {
        gridRow: `${props.rowBegin}/${props.rowEnd}`,
        gridColumn: `${props.colBegin}/${props.colEnd}`
    }
    return (
        <section style={gridStyle}>
            {props.children}
        </section>
    )
}

export const PanelContent = (props : {
    items: string[]
    title?: string
}) => {
    return (
        <>
            {props.title && <h2>{props.title}</h2>}
            <ul>
            {props.items.map((item)=>{
                return <li key={item}>{item}</li>
            })}
            </ul>
        </>
    )
}

export const PanelRow = (props: {
    children: ReactNode
    }) => {
    return (
        <article className={`${panelCss.panel_row}`}>
            {props.children}
        </article>
    )
}

export const PanelCol = (props: {
    children: ReactNode
    }) => {
    return (
        <article className={`${panelCss.panel_col}`}>
            {props.children}
        </article>
    )
}
