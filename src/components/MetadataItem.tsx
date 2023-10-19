import { Badge, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface IMetadataItemProps {
    title: string;
    value: string;
}

export const MetadataItem: FC<IMetadataItemProps> = ({ title, value }) => {
    return (
        <Flex alignItems="center">
            <Text fontWeight="bold" mr={2}>
                {title}
            </Text>
            <Badge>{value}</Badge>
        </Flex>
    );
};
