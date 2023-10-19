import React from "react";
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { pathnameToArray, substringToEnd } from "../utils/stringMethods.js";

export const BreadCrumb = () => {
    const pathname = window.location.pathname;
    const breadCrumbLevels = pathnameToArray(pathname);
    return (
        <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            paddingLeft={"2rem"}
            paddingTop={"2rem"}
        >
            {breadCrumbLevels?.map(({ original, modified }) => (
                <BreadcrumbItem key={modified} fontSize={"18px"} color={"#2D3748"} fontWeight={"600"}>
                    <BreadcrumbLink href={substringToEnd(pathname, original)}>{modified}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
