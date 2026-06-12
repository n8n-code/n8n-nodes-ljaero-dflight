import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class LjaeroDflightApi implements ICredentialType {
        name = 'N8nDevLjaeroDflightApi';

        displayName = 'Ljaero Dflight API';

        icon: Icon = { light: 'file:../nodes/LjaeroDflight/ljaero-dflight.png', dark: 'file:../nodes/LjaeroDflight/ljaero-dflight.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://dflight-api.ljaero.com/',
                        required: true,
                        placeholder: 'https://dflight-api.ljaero.com/',
                        description: 'The base URL of your Ljaero Dflight API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
