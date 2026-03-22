/* eslint-disable @typescript-eslint/no-unused-vars */

import { SALE_PAYMENT_METHOD, SALE_PAYMENT_METHOD_ENUM_MAPPER } from "../core/sales/enum/sale.payment-method"


export class EnumHelper {
  private static instance: EnumHelper

  static handle() {
    if (!this.instance) this.instance = new EnumHelper()

    return this.instance
  }

  SALE_PAYMENT_METHOD(status: SALE_PAYMENT_METHOD) {
    try {
      return SALE_PAYMENT_METHOD_ENUM_MAPPER.STATUS_FORMATTED[status]
    } catch (err) {
      return "Não informado"
    }
  }
}
