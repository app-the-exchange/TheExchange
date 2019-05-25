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
                title    : 'País',
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
				id: 'user',
				title: 'Usuário',
				type: 'item',
				icon: 'people',
				url: '/customer'
			}
        ]
    }
];
