import * as express from 'express'

declare global {
     namespace Express {
       interface Request {
         user: Object<any>;
       }
     }
   }
   
export {};