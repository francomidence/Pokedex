// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  var pkmnType;
  
  const createItem = (
    pkmnName,
    pkmnType,
    pkmnType2,
    pkmnHeight,
    pkmnWeight,
    pkmnGender,
    pkmnCatchRate,
    pkmnAvatar
    ) => ({
    type: Types.CREATE_ITEM,
    payload: 
    pkmnName,
    pkmnType,
    pkmnType2,
    pkmnHeight,
    pkmnWeight,
    pkmnGender,
    pkmnCatchRate,
    pkmnAvatar
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  export default {
    createItem,
    deleteItem,
    Types
  };