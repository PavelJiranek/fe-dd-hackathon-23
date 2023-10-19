import { Flex, Spinner } from "@chakra-ui/react";
import React, { FC } from "react";

export const CenteredLoading: FC = () => (
    <Flex justifyContent="center" alignItems="center" p={8}>
        <Spinner size="xl" color="primary " />
    </Flex>
);
