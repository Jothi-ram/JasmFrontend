import uri from '../../Api/Uri';
import Category from '../../models/Category';
export const VIEW_CATEGORY = 'VIEW_CATEGORY';

export const fetchcategory = (id) => {

    return async dispatch => 
    {
        try{
            const response = await fetch(`http://3.18.128.248:5200/jasm/jasmapp/1.0.4/category/findByStore?storeid=${id}`,{
                method: 'GET',
            })
            if(!response.ok ){
                throw new Error('Somthing is wrong')
            }
            const resData = await response.json()

            const loadedcategory = [];
            //console.log("result",resData);
            for (const key in resData) {
                loadedcategory.push(new Category(
                    resData[key].id,
                    resData[key].storeid, 
                    resData[key].categoryid,
                    resData[key].categoryname,
                    resData[key].categoryimage,
                    resData[key].subcategoryexists));
              }
            
            dispatch({ type: VIEW_CATEGORY, categories: loadedcategory });
            
        }catch (err){
            throw err
        }
        
    }
}