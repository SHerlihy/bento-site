import {Link} from '@tanstack/react-router'

import { ReactNode } from "react"
import panelCss from "./panel.module.css"

export const Panel = (props: {
    rowBegin: number
    rowEnd: number
    colBegin: number
    colEnd: number
    to?: string
    children: ReactNode
}) => {
    const gridStyle = {
        gridRow: `${props.rowBegin}/${props.rowEnd}`,
        gridColumn: `${props.colBegin}/${props.colEnd}`
    }

    return (
        <section style={gridStyle}>
            <div className={`${panelCss.card}`}>
                {props.to &&
                    <Link to={props.to} className={`${panelCss.link}`}>
                        {props.children}
                    </Link>
                }
                {!props.to &&
                    props.children
                }
            </div>
        </section>
    )
}

export const PanelContent = (props : {
    items: string[]
    title?: string
}) => {
    return (
        <>
            {props.title && 
                <div className={`${panelCss.title}`}>
                    <h2>{props.title}</h2>
                </div>
            }
            <div className={`${panelCss.points}`}>
            <ul className={`${panelCss.list_flex}`}>
            {props.items.map((item)=>{
                return <li key={item}>{item}</li>
            })}
            </ul>
            </div>
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
