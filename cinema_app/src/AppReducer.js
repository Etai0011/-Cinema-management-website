const data={changeData:0, permissions:[], changeMovie:0,changeMember:0, isAddedMovie:0, sessionTimeOut:0}
const mainReducer = (state = data, action) =>
{
    switch(action.type)
    {
        case 'DELETEMEMBER':{
            return {...state, changeMember : action.payload}
        }
        case 'ADDTOLIST':{
            return {...state, isAddedMovie : action.payload}
        }
        case 'DELETEUSER':{
            return {...state, changeData : action.payload}
        }
        case 'DELETEMOVIE':{
            return {...state, changeMovie : action.payload}
        }

        case 'SETPERMTIME':{
            return {...state, permissions:action.payload.permissions, sessionTimeOut:action.payload.sessionTimeOut}
        }
        default:
            return {...state}
    }
}
export default mainReducer;