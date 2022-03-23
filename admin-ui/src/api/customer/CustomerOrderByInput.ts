import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  accountNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
