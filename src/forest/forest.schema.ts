import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Forest {
  @Field()
  country: string;

  @Field(() => Int)
  forestAreaPercentage: number;

  @Field(() => Int)
  deforestationRate: number;
}
