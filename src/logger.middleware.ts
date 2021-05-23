// OOP
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction } from 'express';

import { Request, Response, NextFunction } from "express";

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('Request...');
//         next();
//     }
// }

// FP
export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... By FP Logger`);
    next();
};