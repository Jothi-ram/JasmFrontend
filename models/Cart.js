class CartItem {
    constructor(
      productid,
      productname,
      unitprice,
      variant,
      unit,
      quantity,
      sum,
    ) {
      this.quantity = quantity;
      this.unitprice = unitprice;
      this.productname = productname;
      this.productid = productid;
      this.sum = sum;
      this.variant = variant;
      this.unit = unit;
    }
  }
  
  export default CartItem;
  