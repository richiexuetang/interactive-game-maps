import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { Order } from "../../common/order/order";

export enum RegionOrderField {
  id = "id",
  title = "title",
  order = "order",
}

registerEnumType(RegionOrderField, {
  name: "RegionOrderField",
  description: "Properties by which region connections can be ordered.",
});

@InputType()
export class RegionOrder extends Order {
  @Field(() => RegionOrderField)
  field: RegionOrderField;
}
