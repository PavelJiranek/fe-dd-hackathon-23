// (C) 2022-2023 GoodData Corporation
import {IAnalyticalBackend, IAuthenticationContext, NotAuthenticated} from "@gooddata/sdk-backend-spi";
import { withCaching, RecommendedCachingConfiguration } from "@gooddata/sdk-backend-base";
import backendFactory, {ContextDeferredAuthProvider, redirectToTigerAuthentication} from "@gooddata/sdk-backend-tiger";

// Configure backend connection with context deferred auth provider.
// See our docs on complete auth setup:
// https://sdk.gooddata.com/gooddata-ui/docs/cloudnative_authentication.html

const notAuthenticatedHandler = (context: IAuthenticationContext, error: NotAuthenticated): void => {
    redirectToTigerAuthentication(context, error);
};

export const backend: IAnalyticalBackend = withCaching(
    backendFactory().withAuthentication(new ContextDeferredAuthProvider(notAuthenticatedHandler)),
    RecommendedCachingConfiguration,
);
