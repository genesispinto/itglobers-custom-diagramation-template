import React, { ReactNode } from "react";
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
type Props = {
    element: ReactNode
}

const CustomGridItemBig = ({ element }: Props, { blockClass }: { blockClass: string }) => {
    const containerOne = generateBlockClass(styles.containerOne, blockClass)
    return <div className={containerOne}>
        {element}
    </div>
}

export default CustomGridItemBig