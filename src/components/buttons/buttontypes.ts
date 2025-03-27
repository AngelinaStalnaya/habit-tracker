import React from "react";

export type ButtonProps = {
    children: string | React.ReactNode,
    type: 'submit' | 'button' | 'reset',
    handleBtnClick: () => void,
}