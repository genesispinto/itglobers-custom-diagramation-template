import React, { ReactNode } from "react"
import customGridSchema from '../schemas/custom-grid-schema'
import CustomGridItemBig from '../components/CustomGridItemBig'
import CustomGridItemSmall from '../components/CustomGridItemSmall'
import styles from './styles.css'
type Props = {
    gridType: number
    children: [
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode
    ]
}

const SpecialDiagramation = ({ gridType = 1, children }: Props) => {

    const gridTypeClass: string = `grid_${gridType}`
    console.log('gridType', gridType)
    return (
        <div className={styles[gridTypeClass]}>
            <CustomGridItemBig
                element={children[0]}
            />
            <CustomGridItemSmall
                elementOne={children[1]}
                elementTwo={children[2]}
            />
            <CustomGridItemSmall
                elementOne={children[3]}
                elementTwo={children[4]}
            />
        </div>
    )
}

SpecialDiagramation.schema = customGridSchema


export default SpecialDiagramation