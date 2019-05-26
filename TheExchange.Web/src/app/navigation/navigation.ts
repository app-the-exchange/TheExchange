import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Menu',
        // translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'country',
                title    : 'Países',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'public',
                url      : '/country',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
			},
			
			{
				id: 'customer',
				title: 'Clientes',
				type: 'item',
				icon: 'people',
				url: '/customer'
			}, {
				id: 'user',
				title: 'Usuários - Aplicativo',
				type: 'item',
				icon: 'account_circle',
				url: '/user'
			}
        ]
    }
];
