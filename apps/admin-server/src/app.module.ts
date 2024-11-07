import { Module } from '@nestjs/common';
import { AppService } from '@admin-server/app.service';
import { AppController } from '@admin-server/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
