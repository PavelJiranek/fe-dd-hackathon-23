import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Text,
    FormLabel,
    Radio,
    Stack,
    RadioGroup,
} from "@chakra-ui/react";

import { OutlineButton } from "./OutlineButton.js";
import { FilledButton } from "./FilledButton.js";

interface IModal {
    type: "input" | "radio";
    content: { label: string; placeholder?: string }[];
    primaryButtonLabel: string;
    primaryButtonAction: () => void;
    modalTitle: string;
    openerLabel: string;
    openerType?: "filled" | "outline";
}

export const BasicModal: React.FC<IModal> = ({
    type,
    content,
    primaryButtonLabel,
    primaryButtonAction,
    modalTitle,
    openerLabel,
    openerType = "filled",
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = React.useState("1");
    return (
        <>
            {openerType === "filled" && <FilledButton onClick={onOpen}>{openerLabel}</FilledButton>}
            {openerType === "outline" && <OutlineButton onClick={onOpen}>{openerLabel}</OutlineButton>}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {type === "radio" ? (
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack direction="column">
                                    {content.map((item) => (
                                        <Radio key={item.label} value={item.label} fontSize={"16px"}>
                                            {item.label}
                                        </Radio>
                                    ))}
                                </Stack>
                            </RadioGroup>
                        ) : (
                            <>
                                {content.map((item) => (
                                    <Stack key={item.label} paddingBottom={"1.5rem"}>
                                        <Text>
                                            <FormLabel>{item.label}</FormLabel>
                                        </Text>
                                        <Input placeholder={item.placeholder} />
                                    </Stack>
                                ))}
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <FilledButton onClick={primaryButtonAction}>{primaryButtonLabel}</FilledButton>
                        <OutlineButton onClick={onClose}>Cancel</OutlineButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
