import {
    Controller,
    Get,
    Headers,
    Post,
    Query,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('laba9')
export class Laba9Controller {
    @Get('/params')
    returnParams(@Query() query) {
        return Object.entries(query).map(item => item[1]);
    }

    @Get('/token')
    returnToken(@Headers() headers) {
        return headers.token;
    }

    @Post('data')
    @UseInterceptors(FilesInterceptor('files', 10))
    returnData(@UploadedFiles() files) {
        return files.map(item => ({
            name: item.originalName,
            type: item.mimetype,
            size: item.size,
        }));
    }
}
