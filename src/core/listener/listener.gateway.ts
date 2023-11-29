import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { server } from '../../common/config/config';
import { Socket } from 'net';

@WebSocketGateway(server.wsPort)
export class ListenerGateway {
  @SubscribeMessage('getNumbers')
  getMagicNumber(
    @ConnectedSocket() socket: Socket,
    @MessageBody() body: { ceil?: number; timeout?: number; times?: number },
  ) {
    const ceil = body.ceil || 1000;
    const timeout = body.timeout || 1000;

    let times = 0;

    const interval = setInterval(() => {
      if (body.times && times == body.times) {
        socket.emit('close', 'Event finished');
        clearInterval(interval);
      }
      times += 1;
      socket.emit('sendNumber', Math.floor(Math.random() * ceil));
    }, timeout);
  }
}
