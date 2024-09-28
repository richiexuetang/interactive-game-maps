import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { Order } from "../../common/order/order";

export enum MapOrderField {
  id = "id",
  title = "title",
  order = "order",
}

registerEnumType(MapOrderField, {
  name: "RegionOrderField",
  description: "Properties by which region connections can be ordered.",
});

@InputType()
export class MapOrder extends Order {
  @Field(() => MapOrderField)
  field: MapOrderField;
}
