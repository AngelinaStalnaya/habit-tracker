import React, { MouseEvent } from "react";

export type ButtonProps = {
    children: string | React.ReactNode,
    type: 'submit' | 'button' ,
    handleBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>,
    disabled?: boolean,
}

export const basicStyles = 'flex px-3 pz-2 rounded-lg border-2 transition-all duration-300';
