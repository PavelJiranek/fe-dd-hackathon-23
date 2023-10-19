import React, { PropsWithChildren } from "react";
import {
    Box,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";

import { OutlineButton } from "./OutlineButton.js";
import { FilledButton } from "./FilledButton.js";

interface IConfirmModal extends PropsWithChildren {
    primaryButtonLabel: string;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    primaryButtonAction: () => Promise<void>;
    modalTitle: string;
    openerLabel: string;
    openerType?: "filled" | "outline";
    submittingText?: string;
}

export const ConfirmModal: React.FC<IConfirmModal> = ({
    primaryButtonLabel,
    primaryButtonAction,
    modalTitle,
    openerLabel,
    openerType = "filled",
    submittingText,
    children,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleClick = async () => {
        setIsSubmitting(true);
        await primaryButtonAction();
        onClose();
        setIsSubmitting(false);
    };

    return (
        <>
            <Box justifyContent={"flex-end"} display={"flex"} marginBottom={"1rem"}>
                {openerType === "filled" && <FilledButton onClick={onOpen}>{openerLabel}</FilledButton>}
                {openerType === "outline" && <OutlineButton onClick={onOpen}>{openerLabel}</OutlineButton>}
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>
                        <FilledButton
                            isLoading={isSubmitting}
                            loadingText={submittingText}
                            onClick={handleClick}
                        >
                            {primaryButtonLabel}
                        </FilledButton>
                        <OutlineButton onClick={onClose}>Cancel</OutlineButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
