import { Body, Controller, Post } from '@nestjs/common';

export interface ISessionInfoProps {
    login: string;
    dateOfLogin: Date | null;
    visitedPages: Array<string>;
    visitedPagesDetail: Array<{
        name: string;
        dateOfVisit: Date;
        previosPageAddres: string;
    }>;
}

interface IVisitBody {
    state: ISessionInfoProps;
    name: string;
    previousPage: string;
}

@Controller('laba10')
export class Laba10Controller {
    @Post('login')
    login(@Body() { login }): ISessionInfoProps {
        return {
            login,
            dateOfLogin: new Date(Date.now()),
            visitedPages: ['/Laba10'],
            visitedPagesDetail: [
                {
                    name: '/Laba10',
                    dateOfVisit: new Date(Date.now()),
                    previosPageAddres: '/',
                },
            ],
        };
    }

    @Post('visit')
    visitPage(
        @Body() { state, name, previousPage }: IVisitBody,
    ): ISessionInfoProps {
        const finded = state.visitedPagesDetail.find(
            item => item.name === name,
        );
        if (!state.visitedPages.includes(name)) {
            state.visitedPages.push(name);
            state.visitedPagesDetail.push({
                name,
                dateOfVisit: new Date(Date.now()),
                previosPageAddres: previousPage,
            });
            return state;
        } else if (finded && finded.previosPageAddres !== previousPage) {
            const id = state.visitedPagesDetail.findIndex(
                item => item.name === finded.name,
            );
            state.visitedPagesDetail[id] = {
                ...state.visitedPagesDetail[id],
                previosPageAddres: previousPage,
            };
            return state;
        } else {
            return state;
        }
    }
}
