import { AuthorizationRequest } from '../authorization_request';
import { AuthorizationRequestHandler, AuthorizationRequestResponse } from '../authorization_request_handler';
import { AuthorizationServiceConfiguration } from '../authorization_service_configuration';
import { Crypto } from '../crypto_utils';
import { QueryStringUtils } from '../query_string_utils';
export declare class NodeBasedHandler extends AuthorizationRequestHandler {
    httpServerPort: number;
    authorizationPromise: Promise<AuthorizationRequestResponse | null> | null;
    constructor(httpServerPort?: number, utils?: QueryStringUtils, crypto?: Crypto);
    performAuthorizationRequest(configuration: AuthorizationServiceConfiguration, request: AuthorizationRequest, openHandler?: (url: string) => void): void;
    protected completeAuthorizationRequest(): Promise<AuthorizationRequestResponse | null>;
}
