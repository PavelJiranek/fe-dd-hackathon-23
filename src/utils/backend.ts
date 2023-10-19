// (C) 2022-2023 GoodData Corporation
import {
    IAnalyticalBackend,
    IAuthenticationContext,
    NotAuthenticated,
    NotAuthenticatedHandler
} from "@gooddata/sdk-backend-spi";
import { withCaching, RecommendedCachingConfiguration } from "@gooddata/sdk-backend-base";
import backendFactory, {
    ContextDeferredAuthProvider,
    redirectToTigerAuthentication,
    TigerTokenAuthProvider
} from "@gooddata/sdk-backend-tiger";

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


export function getBackend(domain: string,token: string, notAuthHandler: NotAuthenticatedHandler): IAnalyticalBackend {
    const backend = backendFactory({ hostname: domain });

    // if (isDevMode) {
    //     // webpack config makes sure PERSONAL_ACCESS_TOKEN is present in the .env file
        return backend.withAuthentication(new TigerTokenAuthProvider(token, notAuthHandler));
    // }

    // const notAuthenticatedHandler = (context: IAuthenticationContext, error: NotAuthenticated): void => {
    //     redirectToTigerAuthentication(context, error);
    // };

    // return backend.withAuthentication(new ContextDeferredAuthProvider(notAuthenticatedHandler));
}