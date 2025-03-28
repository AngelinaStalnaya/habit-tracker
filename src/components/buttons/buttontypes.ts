import React from "react";

export type ButtonProps = {
    children: string | React.ReactNode,
    type: 'submit' | 'button' | 'reset',
    handleBtnClick: () => void,
}

export const basicStyles = 'flex px-3 pz-2 rounded-lg border-2 transition-all duration-300';
