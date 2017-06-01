export const PAGES_MENU = [{
    path: '',
    data: {
        menu: {
            title: 'Pages',
            selected: false,

        }
    },
    children :[{
        path: 'login',
        data: {
            menu: {
                title: 'Login',
                selected: false
            }
        }
    },
    {
        path: 'home',
        data: {
            menu: {
                title: 'Home',
                selected: false
            }
        }
    }]
}
];