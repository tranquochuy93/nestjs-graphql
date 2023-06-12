import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import path from 'path';
import { AppModule } from '~app.module';
import { env } from '~config/env.config';
import { ValidateException } from '~core/exceptions/validate.exception';
import { ReDocBuilder } from '~open-apis/re-doc-builder';

export class Bootstrap {
    private app: NestExpressApplication;

    async initApp() {
        this.app = await NestFactory.create<NestExpressApplication>(AppModule);
    }

    initPipes() {
        this.app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                stopAtFirstError: true,
                exceptionFactory: (errors) => new ValidateException(errors)
            })
        );
    }

    async start() {
        this.app.set('trust proxy', true);
        await this.app.listen(env.APP_PORT);
    }

    buildSwagger() {
        const swaggerConfig = new DocumentBuilder()
            .setTitle('API with NestJS')
            .setDescription('API developed throughout the API with NestJS course')
            .setVersion('1.0')
            .build();

        const document = SwaggerModule.createDocument(this.app, swaggerConfig);
        SwaggerModule.setup('api', this.app, document);
        return document;
    }

    async buildRedoc(document: OpenAPIObject): Promise<void> {
        await new ReDocBuilder(this.app, document).build();
    }

    initStaticAsset() {
        this.app.useStaticAssets(path.join(env.ROOT_PATH, 'static'));
        // this.app.setBaseViewsDir(path.join(env.ROOT_PATH, 'open-apis/spectaqls'));
        // this.app.setViewEngine('html');
    }
}
