import uri from '../../Api/Uri';
import Store from '../../models/Store';
export const VIEW_STORE = 'VIEW_STORE';

export const fetchStores = () => {

    return async dispatch => 
    {
        try{
            const response = await fetch(`http://3.18.128.248:5200/jasm/jasmapp/1.0.4/store/card/findByFranchise?franchiseid=1`,{
                method: 'GET',
            })
            if(!response.ok ){
                throw new Error('Somthing is wrong')
            }
            const resData = await response.json()
            const loadedStore = [];
            for (const key in resData) {
                loadedStore.push(new Store(resData[key].id,resData[key].storecode, resData[key].name,
                    resData[key].chainname,
                    resData[key].image,
                  resData[key].description,
                  resData[key].paymentsaccepted,
                  resData[key].status,
                  resData[key].storeusers,
                  resData[key].currencycode,
                  resData[key].createdby,
                  resData[key].createdtimestamp,
                  resData[key].modifiedby,
                  resData[key].modifiedtimestamp,
                  resData[key].franchiseid,
                  resData[key].addressid,
                  resData[key].contactid
                    ));
              }
            
            dispatch({ type: VIEW_STORE, stores: loadedStore });
            
        }catch (err){
            throw err
        }
        
    }
    
}