import { NestExpressApplication } from '@nestjs/platform-express';
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { RedocModuleOptions, RedocTryOutModule } from 'nestjs-redoc-try-out';
import { run } from 'spectaql';
import { env } from '~config/env.config';
import { DOCUMENT_LOGO_URL } from './constants/document-logo.constant';

export class ReDocBuilder {
    private redocOptions: RedocModuleOptions;

    constructor(private app: NestExpressApplication, private document: OpenAPIObject) {
        this.redocOptions = {
            title: 'Framework Builder External API',
            logo: {
                url: DOCUMENT_LOGO_URL,
                backgroundColor: '#F0F0F0'
            },
            skipSnippetsGeneration: true
        };
    }

    async build() {
        this.loadMetaData();

        await RedocTryOutModule.setup(`/re-docs`, this.app, this.document, this.redocOptions);
    }

    private async loadMetaData() {
        // const documentInfo = yaml.load(
        //     readFileSync(`${env.ROOT_PATH}/open-apis/descriptions/api-description.yaml`, { encoding: 'utf-8' })
        // ) as InfoObject;
        const spectaqlOptions = {
            specFile: `${env.ROOT_PATH}/open-apis/descriptions/api-description.yaml`,
            resolveWithOutput: true
        };
        const { html } = await run(spectaqlOptions);
        this.document.info.description = html;
    }
}
