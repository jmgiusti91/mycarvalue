import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// createParamDecorator its outside DI system
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // ExecutionContext allow us to working well with HTTP, Websockets, gRPC etc
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
