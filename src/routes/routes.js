export const PublicRoutes = {
    HOME: '/',
    PRODUCT: '/producto',
    PRODUCT_DETAIL: '/producto/:id',
    CATEGORIE: '/categorias',
    CATEGORIES: '/categorias/:nameCategory',
    LOGIN: '/inicio-sesion',
    SIGN_UP: '/registro',
    PASSWORD_RECOVERY_SEARCH: '/recuperar-password',
    CART_ITEMS: '/lista-productos',
    NOT_FOUND: '*'
}

export const EmailRedirectsRoutes = {
    AUTH_REDIRECT: '/auth',
    CONFIRM_EMAIL: '/confirmar-email',
    RESET_PASSWORD: '/restablecer-password',
}

export const PrivateRoutes = {
    PROFILE: '/perfil',
    CHECKOUT: '/checkout',
    ORDERS: '/ordenes',
    REAUTHENTICATION: '/reautenticar',
}