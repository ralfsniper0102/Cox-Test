const locators = {

    SITE_COX: {
        HOME_PAGE: 'https://coxautomotive.com.br'
    },

    ICON: {
        PAGE: '.brand > img',
        FLAGUSA: '//*[@id="gtranslate_wrapper"]/a[1]/img',
        FLAGBR: '//*[@id="gtranslate_wrapper"]/a[2]/img'


    },
    MENUBAR: {
        QUEMSOMOS: '#menu-menu-principal-1 > .menu-item-41 > a',
        QUEMSOMOSLINK: 'https://coxautomotive.com.br/quem-somos/',
        MARCAS: '#menu-menu-principal-1 > .menu-item-456 > a',
        MARCASLINK: 'https://coxautomotive.com.br/marcas/',
        NOTICIAS: '#menu-menu-principal-1 > .menu-item-35 > a',
        NOTICIASLINK: 'https://coxautomotive.com.br/imprensa/',
        FALECONOSCO: '#menu-menu-principal-1 > .menu-item-34 > a',
        FALECONOSCOLINK: 'https://coxautomotive.com.br/fale-conosco/'
    },
    SECTIONFOTOS: {
        NOSSAMISSAO: '.col-sm-12 > :nth-child(5) > a',
        NOSSAMISSAOLINK: 'https://coxautomotive.com.br/quem-somos',
        NOSSAESPECIALIDADE: '.col-sm-12 > :nth-child(6) > a',
        NOSSAESPECIALIDADELINK: 'https://coxautomotive.com.br/mvp',
        NOSSASNOTICIAS: '.col-sm-12 > :nth-child(7) > a',
        NOSSASNOTICIASLINK: 'https://coxautomotive.com.br/conheca-os-carros-com-melhor-valor-de-revenda-de-2022/',
        NOSSASMARCAS: '.col-sm-12 > :nth-child(8) > a',
        NOSSASMARCASLINK: 'https://coxautomotive.com.br/marcas',
        WHATSAPP: '//*[@id="sticky-buttons-1"]/li/a',
        WHATSAPPLINK: 'https://api.whatsapp.com/send/?phone=5511930390050&text&app_absent=0'
    },
    MARCAS: {
        COX: '//*[@id="mm-0"]/section[3]/div[1]/ul/li[1]/a',
        COXLINK: 'https://www.coxpravoce.com.br/',
        DEALERTRACK: '//*[@id="mm-0"]/section[3]/div[1]/ul/li[3]/a',
        DEALERTRACKLINK: 'https://cms.dealertrack.com.br/',
        MANHEIMEXPRESS: '//*[@id="mm-0"]/section[3]/div[1]/ul/li[5]/a',
        MANHEIMEXPRESSLINK: 'https://manheimexpress.com.br/',
        KELLEYBLUEBOOK: '//*[@id="mm-0"]/section[3]/div[1]/ul/li[7]/a',
        KELLEYBLUEBOOKLINK: 'https://www.kbb.com.br/',
        MOLICAR: '//*[@id="mm-0"]/section[3]/div[1]/ul/li[9]/a',
        MOLICARLINK: 'http://molicar.com.br/',
    },
    FOOTER: {
        
        QUEMSOMOS: '.col-md-offset-1 > ul > :nth-child(1) > a',
        QUEMSOMOSLINK: 'https://coxautomotive.com.br/quem-somos/',
        NOSSASMARCAS: '.col-md-offset-1 > ul > :nth-child(2) > a',
        NOSSASMARCASLINK: 'https://coxautomotive.com.br/marcas/',
        
        NOTICIAS: ':nth-child(3) > ul > :nth-child(1) > a',
        NOTICIASLINK: 'https://coxautomotive.com.br/imprensa/',
        POLITICA: ':nth-child(3) > ul > :nth-child(2) > a',
        POLITICALINK: 'https://coxautomotive.com.br/politica-de-privacidade/',
    
        FALECONOSCO: ':nth-child(4) > ul > li > a',
        FALECONOSCOLINK: 'https://coxautomotive.com.br/fale-conosco/',
        SOCIAL: '.col-sm-12.col-md-2 > h4',
        SOCIALLINK: 'https://www.coxenterprises.com/',
        LINKEDIN: ':nth-child(1) > .icon',
        LINKEDINLINK: 'https://br.linkedin.com/company/coxautomotivebr',
        FEED: ':nth-child(2) > .icon',
        FEEDLINK: 'https://coxautomotive.com.br/feed/',
        DIVISAO: '.rodape__divisao',
        DIVISAOLINK: 'https://www.coxenterprises.com/'
    
    }

}

//export two objects
module.exports = { locators }
