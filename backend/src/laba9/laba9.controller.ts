import { editFileName } from './file.filter';
import { diskStorage } from 'multer';
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

const conf = {
    storage: diskStorage({
        destination: './static',
        filename: editFileName,
    }),
};
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
    @UseInterceptors(FilesInterceptor('files'))
    returnData(@UploadedFiles() files) {
        return files.map(item => ({
            name: item.originalname,
            type: item.mimetype,
            size: item.size,
        }));
    }

    @Post('multidata')
    @UseInterceptors(FilesInterceptor('files', 10, conf))
    returnMultiData(
        @Query() query,
        @UploadedFiles() files,
        @Headers() headers,
    ) {
        return {
            params: Object.entries(query).map(item => item[1]),
            files: files.map(
                item => 'https://api.olya-get-well.ru/' + item.originalname,
            ),
            token: headers.token,
        };
    }
}
