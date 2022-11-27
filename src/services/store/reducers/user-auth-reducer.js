import { FORM_DATA_USER_REGISTRATION,
         REQUEST_USER_REGISTRATION,
         USER_REGISTRATION_SUCCESS,
         USER_REGISTRATION_ERROR,

         FORM_AUTHORIZATION_USER,
         AUTHORIZATION_REQUERST_USER,
         AUTHORIZATION_USER_SUCCESS,
         AUTHORIZATION_USER_ERROR, 
         
         USER_LOGOUT_REQUEST,
         LOGOUT_USER_SUCCESS,
         LOGOUT_USER_ERROR,
         
         GET_DATA_USER_REQUEST,
         GET_DATA_USER_SUCCESS,
         GET_DATA_USER_ERROR, 
         
         UPDATE_DATA_USER_REQUEST,
         UPDATE_DATA_USER_SUCCESS,
         UPDATE_DATA_USER_ERROR,

         FORGOT_PASSWORD_REQUEST,
         FORGOT_PASSWORD_SUCCESS,
         FORGOT_PASSWORD_ERROR,

         NEW_PASSWORD_FORM,
         NEW_PASSWORD_REQUEST,
         NEW_PASSWORD_SUCCESS,
         NEW_PASSWORD_ERROR,
        
        TOKEN_REFRESH_REQUEST,
        TOKEN_REFRESH_SUCCESS,
        TOKEN_REFRESH_ERROR } from '../actions/action-user-auth';

const initialState = {
  form:{ name:'',
         email:'',
         password:'',
         token: '' },
  
  user: { name:'',
          email:'' },

  requestUserRegistration: false,
  userRegistered: false,
  registrationError: false,

  requestUserAuthorization: false,
  userAuthorization: false,
  authorizationUserError: false,

  userLogoutRequest: false,
  logoutUserSuccess: false,
  messageLogout:'',
  logoutUserError: false,

  getDataUserRequest: false,
  getDataUserSuccess: false,
  getDataUserError: false, 

  updateDataUserRequest: false,
  updateDataUserSuccess: false,
  updateDataUserError: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  massageForgotPassword: '',
  forgotPasswordError:false,
  
  newPasswordRequest: false,
  newPasswordSuccess: false,
  massageNewPassword: '',
  newPasswordError: false,

  tokenRefreshRequest: false,
  tokenRefreshSuccess: false,
  tokenRefreshError: false
};

export const userAuthReducer =  (state = initialState, action) => {
  switch(action.type){

    case FORM_DATA_USER_REGISTRATION:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value
        }
      };
    case REQUEST_USER_REGISTRATION:
      return {
        ...state,
        // userRegistered: false,
        requestUserRegistration: true,
        // registrationError: false,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        userRegistered: true,
        // requestUserRegistration: false,
        // registrationError: false,
      };
    case USER_REGISTRATION_ERROR:
      return {
        ...state,
        userRegistered: false,
        // requestUserRegistration: false,
        registrationError: true,
      };   
      
    case FORM_AUTHORIZATION_USER:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value,
        },
      };
    
    case AUTHORIZATION_REQUERST_USER:
      return {
        ...state,
        requestUserAuthorization: true,
        // userAuthorization: false,
        // authorizationUserError: false,
      }; 
    
    case AUTHORIZATION_USER_SUCCESS:
      return {
      ...state,
      form:{
        ...state.form,
        email:'',
        password:'',
      },
      user:{ 
        ...state.user,
        name: action.payload.name,
        email: action.payload.email
      },      
      // requestUserAuthorization: false,
      userAuthorization: true,
      userRegistered: true,
      // authorizationUserError: false,
    }; 

    case AUTHORIZATION_USER_ERROR:
      return {
      ...state,
      form:{
        ...state.form,
        email:'',
        password:'',
      },
      // requestUserAuthorization: false,
      userAuthorization: false,
      userRegistered: false,
      authorizationUserError: true,
    }; 

    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        userLogoutRequest: true,
        userRegistered: true,
        // logoutUserSuccess: false,
        // messagelogout: '',
        // logoutUserError: false,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: '',
          email: ''
        },
        // userLogoutRequest: false,
        logoutUserSuccess: true,
        messageLogout: action.payload,
        // logoutUserError: false,
      };

    case LOGOUT_USER_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          name: '',
          email: ''
        },
        // userLogoutRequest: false,
        logoutUserSuccess: false,
        // messagelogout: '',
        logoutUserError: true,
      };

    case GET_DATA_USER_REQUEST:
      return {
        ...state,
        getDataUserRequest: true,
      };
    
    case GET_DATA_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email
        },
        getDataUserSuccess: true,
      };
    
    case GET_DATA_USER_ERROR:
      return {
        ...state,
        getDataUserSuccess: false,
        getDataUserError: true,
      };  

    case UPDATE_DATA_USER_REQUEST:
      return {
        ...state,
        updateDataUserRequest: true,
      };

    case UPDATE_DATA_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email
        },
        updateDataUserSuccess: true,
      };

    case UPDATE_DATA_USER_ERROR:
      return {
         ...state,
         updateDataUserSuccess: false,
         updateDataUserError: true,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordRequest: true 
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        massageForgotPassword: action.payload,
        forgotPasswordSuccess: true,
      };

    case FORGOT_PASSWORD_ERROR:      
      return {
        ...state,
        forgotPasswordSuccess: false,
        forgotPasswordError: true,
      };

    case NEW_PASSWORD_FORM:
      return {
        ...state,
        form:{
          ...state.form,
         [action.name]:action.value,
        }
      }; 
    
    case NEW_PASSWORD_REQUEST: 
      return {
        ...state,
        newPasswordRequest: true
      };

    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        form: {
          ...state.form,
          password: '',
          token: ''
        },
        newPasswordSuccess: true,
        massageNewPassword: action.payload
      };
    
     case NEW_PASSWORD_ERROR:
      return {
      ...state,
      form: {
          ...state.form,
          password: '',
          token: ''
        },
        newPasswordSuccess: false,
        newPasswordError: true,
      };

      case TOKEN_REFRESH_REQUEST:
        return {
          ...state,
          tokenRefreshRequest: true,
        };

      case TOKEN_REFRESH_SUCCESS:
        return {
          ...state,
          tokenRefreshSuccess: true,
        };

      case TOKEN_REFRESH_ERROR:
        return{
          ...state,
          tokenRefreshSuccess: false,
          tokenRefreshError: true
        };    

    default:
      return state;
  }
};