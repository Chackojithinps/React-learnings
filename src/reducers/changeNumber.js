const initialState=100;

const changeNumber =(state = initialState ,action) =>{
      switch(action.type){
        case 'IN_NUM': return state+1;
        case 'DE_NUM' :return state-1;
        default:return state;
      }
}
export default changeNumber;
