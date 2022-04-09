enum AuthApiPath {
    ROOT = '/',
    LOGIN = '/login',
    LOGOUT = '/logout',
    REG = '/registration',
    REFRESH = '/refresh',
    $ACTIVATE = '/activate/:link',
    $RESET_PASSWORD = '/reset-password/:link',
    FORGOT_PASSWORD = '/forgot-password',
  }
  
export { AuthApiPath };