import { Module } from '@nestjs/common';
import { ListenerModule } from './core/listener/listener.module';

@Module({
  imports: [ListenerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
