import React, { ReactNode } from "react";
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

type Props = {
    elementOne: ReactNode,
    elementTwo: ReactNode
}

const CustomGridItemSmall = ({ elementOne, elementTwo }: Props, { blockClass }: { blockClass: string }) => {
    const containerTwo = generateBlockClass(styles.containerTwo, blockClass)
    return <div className={containerTwo}>
        {elementOne}{elementTwo}
    </div>
}

export default CustomGridItemSmall