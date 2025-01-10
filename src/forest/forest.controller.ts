import { Controller, Get } from "@nestjs/common";

@Controller("forest")
export class ForestController {
  @Get("data")
  getForestData() {
    return [
      { country: "Argentina", forestAreaPercentage: 60, deforestationRate: 10 },
      { country: "Brazil", forestAreaPercentage: 50, deforestationRate: 8 },
    ];
  }
}
