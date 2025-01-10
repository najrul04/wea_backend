import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ForestController } from "./forest/forest.controller";

@Module({
  imports: [],
  controllers: [AppController, ForestController],
  providers: [AppService],
})
export class AppModule {}
