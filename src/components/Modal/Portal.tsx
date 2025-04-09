import React, { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import ButtonOutlined from "../ui/buttons/ButtonOutlined";

type PortalProps = {
    portalBtnName: string,
    children: React.ReactNode,
}

export default function PortalModal({portalBtnName, children}: PortalProps) {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
        <ButtonOutlined type='button' handleBtnClick={()=> setShowModal(true)}>{portalBtnName}</ButtonOutlined>
        {showModal && createPortal(
            <Modal closeModal={()=> setShowModal(false)}>{children}</Modal>, 
            document.body
            )}
        </>
    )
}