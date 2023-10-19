import React, { FC, Fragment } from "react";
import { Box, Flex, Td, Text, Tr, useTheme } from "@chakra-ui/react";

import { IWorkspace } from "../../types/workspaces.js";

interface IWorkspacesListItemProps {
    workspace: IWorkspace;
    childLevel: number;
}

const ArrowIcon = () => (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.22363 0.548828C1.5791 0.548828 1.83887 0.794922 1.83887 1.15039C1.83887 1.39648 1.81836 1.61523 1.81836 1.94336C1.81836 4.47949 2.7002 5.51172 5.20898 5.51172H9.92578L11.6074 5.61426L9.29688 3.50195L7.7793 1.95703C7.67676 1.84766 7.61523 1.69043 7.61523 1.52637C7.61523 1.18457 7.875 0.938477 8.2168 0.938477C8.37402 0.938477 8.52441 0.993164 8.66113 1.12305L13.2002 5.66211C13.3438 5.79199 13.4121 5.95605 13.4121 6.12012C13.4121 6.29102 13.3438 6.44824 13.2002 6.58496L8.6748 11.1035C8.52441 11.2471 8.37402 11.3086 8.2168 11.3086C7.875 11.3086 7.61523 11.0625 7.61523 10.7207C7.61523 10.5566 7.66992 10.3994 7.7793 10.2832L9.29688 8.73828L11.6006 6.63965L9.92578 6.73535H5.14746C1.90723 6.73535 0.581055 5.31348 0.581055 2.00488C0.581055 1.60156 0.594727 1.2666 0.642578 1.05469C0.697266 0.78125 0.861328 0.548828 1.22363 0.548828Z"
            fill="#4A5568"
        />
    </svg>
);

export const WorkspacesListItem: FC<IWorkspacesListItemProps> = ({ workspace: { name, id }, childLevel }) => {
    const theme = useTheme();

    return (
        <Tr>
            <Td>
                <Flex alignItems="center" paddingLeft={theme.space[childLevel * 4]}>
                    {childLevel > 0 && (
                        <Box paddingRight={2}>
                            <ArrowIcon />
                        </Box>
                    )}
                    <Text>{name}</Text>
                </Flex>
            </Td>
            <Td>{id}</Td>
            <Td>...actions</Td>
        </Tr>
    );
};

export const renderWorkspacesListItem = (ws: IWorkspace, childLevel = 0) => {
    return (
        <>
            <WorkspacesListItem workspace={ws} childLevel={childLevel} />
            {!!ws.children.length &&
                ws.children.map((childWs) => (
                    <Fragment key={childWs.id}>{renderWorkspacesListItem(childWs, childLevel + 1)}</Fragment>
                ))}
        </>
    );
};
