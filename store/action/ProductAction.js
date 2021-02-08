import uri from '../../Api/Uri';
import Product from '../../models/Product';
export const VIEW_PRODUCTS = 'VIEW_PRODUCTS';

export const fetchProduct = () => {

    return async dispatch => 
    {
        try{
            const response = await fetch(`http://3.18.128.248:5200/jasm/jasmapp/1.0.4/product/findByCategoryAndStore?storeid=1&productcategoryid=1`,{
                method: 'GET',
            })
            if(!response.ok ){
                throw new Error('Somthing is wrong')
            }
            const resData = await response.json()

            const loadedproduct = [];
           
            for (const key in resData) {
                loadedproduct.push(new Product(
                    resData[key].id,
                    resData[key].storeid, 
                    resData[key].productid,
                    resData[key].productname,
                    resData[key].unitprice,
                    resData[key].productcategoryid1,
                    resData[key].unit));
              }
             
            dispatch({ type: VIEW_PRODUCTS, products: loadedproduct });
            
        }catch (err){
            throw err
        }
        
    }
}