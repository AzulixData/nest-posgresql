import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    console.log('hola servicio');
    return 'Hello World!';
  }
}
