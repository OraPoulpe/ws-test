import { Module } from '@nestjs/common';
import { ListenerGateway } from './listener.gateway';

@Module({
  imports: [],
  providers: [ListenerGateway],
  exports: [ListenerGateway],
})
export class ListenerModule {}
