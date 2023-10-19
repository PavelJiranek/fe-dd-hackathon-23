import React from "react";
import {
    Box,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { OutlineButton } from "./OutlineButton.js";
import { FilledButton } from "./FilledButton.js";

interface IModal {
    type: "input" | "radio";
    content: { label: string; placeholder?: string; id: string }[];
    primaryButtonLabel: string;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    primaryButtonAction: (val: any) => Promise<void>;
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
    const [value, setValue] = React.useState("");
    const { register, handleSubmit } = useForm();

    // const handleFormSubmit = () => {
    //     handleSubmit(primaryButtonAction);
    //     onClose();
    // };

    return (
        <>
            <Box justifyContent={"flex-end"} display={"flex"} marginBottom={"1rem"}>
                {openerType === "filled" && <FilledButton onClick={onOpen}>{openerLabel}</FilledButton>}
                {openerType === "outline" && <OutlineButton onClick={onOpen}>{openerLabel}</OutlineButton>}
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/*<form onSubmit={handleFormSubmit}>*/}
                    <form onSubmit={handleSubmit(primaryButtonAction)}>
                        <ModalHeader>{modalTitle}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {type === "radio" ? (
                                <RadioGroup onChange={setValue} value={value}>
                                    <Stack direction="column" padding={"1.5rem"}>
                                        {content.map((item) => (
                                            <Radio
                                                key={item.label}
                                                value={item.label}
                                                size={"lg"}
                                                fontSize={"16px"}
                                                colorScheme={"pink"}
                                            >
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
                                            <Input {...register(item.label)} placeholder={item.placeholder} />
                                        </Stack>
                                    ))}
                                </>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <FilledButton type="submit">{primaryButtonLabel}</FilledButton>
                            <OutlineButton onClick={onClose}>Cancel</OutlineButton>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};
