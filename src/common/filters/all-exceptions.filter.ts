// src/common/filters/all-exceptions.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ErrorResponse {
  statusCode: number;
  message: string;
  userMessage: string;
  timestamp: string;
  path: string;
  details?: string | string[];
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erreur interne du serveur';
    let userMessage = 'Une erreur inattendue est survenue.';
    let details: string | string[] | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse() as
        | { message?: string | string[]; error?: string }
        | string;

      if (typeof res === 'string') {
        message = res;
        details = res;
      } else {
        message = res.message ?? message;
        details = res;
      }
    }

    // Messages conviviaux selon le code
    switch (status) {
      case HttpStatus.BAD_REQUEST: // 400
        userMessage =
          'Certaines données sont invalides, veuillez vérifier votre saisie.';
        break;
      case HttpStatus.UNAUTHORIZED: // 401
        userMessage =
          'Vous devez être authentifié pour accéder à cette ressource.';
        break;
      case HttpStatus.PAYMENT_REQUIRED: // 402
        userMessage =
          'Un paiement est requis pour accéder à cette fonctionnalité.';
        break;
      case HttpStatus.FORBIDDEN: // 403
        userMessage = 'Vous n’avez pas les permissions nécessaires.';
        break;
      case HttpStatus.NOT_FOUND: // 404
        userMessage = 'La ressource demandée est introuvable.';
        break;
      case HttpStatus.INTERNAL_SERVER_ERROR: // 500
        userMessage =
          'Une erreur technique est survenue, veuillez réessayer plus tard.';
        break;
      default:
        userMessage = 'Une erreur est survenue.';
        break;
    }

    const errorResponse: ErrorResponse = {
      statusCode: status,
      message: typeof message === 'string' ? message : 'Erreur',
      userMessage,
      timestamp: new Date().toISOString(),
      path: request.url,
      details,
    };

    response.status(status).json(errorResponse);
  }
}
