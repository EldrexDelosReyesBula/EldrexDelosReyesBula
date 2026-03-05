import React, { createContext, useContext, useState, useEffect} from'react';

type Theme ='light' |'dark' |'auto';
type Language ='en' |'tl';

interface SettingsContextType {
 theme: Theme;
 setTheme: (theme: Theme) => void;
 language: Language;
 setLanguage: (lang: Language) => void;
 analyticsEnabled: boolean;
 setAnalyticsEnabled: (enabled: boolean) => void;
 t: (key: string) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const translations = {
 en: {
'nav.home':'Home',
'nav.projects':'Projects',
'nav.about':'About',
'nav.school':'School',
'nav.quotes':'Quotes',
'nav.contact':'Contact',
'footer.quickLinks':'Quick links',
'footer.rights':'All rights reserved.',
'footer.copyright':'Copyright to Mackenzie Child for its free design template inspirations.',
'footer.privacy':'Privacy Policy',
'footer.terms':'Terms of Use',
'footer.copyright_link':'Copyright',
'footer.license':'License',
'settings.theme':'Theme',
'settings.language':'Language',
'settings.analytics':'Analytics',
'settings.on':'On',
'settings.off':'Off',
'settings.light':'Light',
'settings.dark':'Dark',
'settings.auto':'Auto',
'cookie.message':'We use cookies and analytics to improve your experience and understand how our site is used. You can manage your preferences in the footer settings.',
'cookie.accept':'Accept All',
'cookie.decline':'Decline Analytics',
'home.hello':'Hello.',
'home.iam':"I'm Eldrex.",
'home.subtitle':'Creative Developer / UI Designer / Founder building modern retro experiences.',
'home.viewProjects':'View Projects',
'home.contactMe':'Contact Me',
'home.services':'Services',
'home.service1.title':'UI/UX Design',
'home.service2.title':'Web Development',
'home.service3.title':'App Design',
'home.service.desc':'Crafting pixel-perfect, responsive, and engaging digital experiences.',
'home.fromBlog':'From the blog',
'home.viewAllBlog':'View all blog posts',
'home.readPost':'Read Post',
'home.trouble':'Having trouble reaching me?',
'home.troubleDesc':'Sometimes social media platforms filter messages or hide them in requests. If you have an urgent inquiry, a project proposal, or just want to ensure your message lands straight in my inbox, use my direct contact form or official emails.',
'home.goContact':'Go to Contact Options'
},
 tl: {
'nav.home':'Home',
'nav.projects':'Mga Proyekto',
'nav.about':'Tungkol Sa Akin',
'nav.school':'Paaralan',
'nav.quotes':'Mga Sipi',
'nav.contact':'Makipag-ugnayan',
'footer.quickLinks':'Mabilis na mga link',
'footer.rights':'Lahat ng karapatan ay nakalaan.',
'footer.copyright':'Karapatang-ari kay Mackenzie Child para sa kanyang libreng disenyo ng template na inspirasyon.',
'footer.privacy':'Patakaran sa Privacy',
'footer.terms':'Mga Tuntunin ng Paggamit',
'footer.copyright_link':'Karapatang-ari',
'footer.license':'Lisensya',
'settings.theme':'Tema',
'settings.language':'Wika',
'settings.analytics':'Analytics',
'settings.on':'Bukas',
'settings.off':'Sarado',
'settings.light':'Maliwanag',
'settings.dark':'Madilim',
'settings.auto':'Awtomatiko',
'cookie.message':'Gumagamit kami ng cookies at analytics upang mapabuti ang iyong karanasan at maunawaan kung paano ginagamit ang aming site. Maaari mong pamahalaan ang iyong mga kagustuhan sa mga setting sa ibaba.',
'cookie.accept':'Tanggapin Lahat',
'cookie.decline':'Tanggihan ang Analytics',
'home.hello':'Kamusta.',
'home.iam':"Ako si Eldrex.",
'home.subtitle':'Creative Developer / UI Designer / Founder na bumubuo ng mga modernong retro na karanasan.',
'home.viewProjects':'Tingnan ang mga Proyekto',
'home.contactMe':'Makipag-ugnayan',
'home.services':'Mga Serbisyo',
'home.service1.title':'Disenyo ng UI/UX',
'home.service2.title':'Pagbuo ng Web',
'home.service3.title':'Disenyo ng App',
'home.service.desc':'Gumagawa ng pixel-perfect, responsive, at nakaka-engganyong mga digital na karanasan.',
'home.fromBlog':'Mula sa blog',
'home.viewAllBlog':'Tingnan lahat ng blog posts',
'home.readPost':'Basahin ang Post',
'home.trouble':'Nahihirapang maabot ako?',
'home.troubleDesc':'Minsan ay sinasala ng mga social media platform ang mga mensahe o itinatago ang mga ito sa mga request. Kung mayroon kang agarang katanungan, panukala sa proyekto, o nais lamang tiyakin na ang iyong mensahe ay direktang mapupunta sa aking inbox, gamitin ang aking direktang contact form o opisyal na mga email.',
'home.goContact':'Pumunta sa mga Opsyon sa Contact'
}
};

export function SettingsProvider({ children}: { children: React.ReactNode}) {
 const [theme, setThemeState] = useState<Theme>(() => {
 return (localStorage.getItem('theme') as Theme) ||'auto';
});
 
 const [language, setLanguageState] = useState<Language>(() => {
 return (localStorage.getItem('language') as Language) ||'en';
});
 
 const [analyticsEnabled, setAnalyticsEnabledState] = useState<boolean>(() => {
 return localStorage.getItem('analytics') ==='true';
});

 const setTheme = (newTheme: Theme) => {
 setThemeState(newTheme);
 localStorage.setItem('theme', newTheme);
};

 const setLanguage = (newLang: Language) => {
 setLanguageState(newLang);
 localStorage.setItem('language', newLang);
};

 const setAnalyticsEnabled = (enabled: boolean) => {
 setAnalyticsEnabledState(enabled);
 localStorage.setItem('analytics', String(enabled));
};

 useEffect(() => {
 const root = window.document.documentElement;
 root.classList.remove('light','dark');

 if (theme ==='auto') {
 const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ?'dark' :'light';
 root.classList.add(systemTheme);
} else {
 root.classList.add(theme);
}
}, [theme]);

 // Listen for system theme changes if set to auto
 useEffect(() => {
 if (theme !=='auto') return;
 
 const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
 const handleChange = (e: MediaQueryListEvent) => {
 const root = window.document.documentElement;
 root.classList.remove('light','dark');
 root.classList.add(e.matches ?'dark' :'light');
};
 
 mediaQuery.addEventListener('change', handleChange);
 return () => mediaQuery.removeEventListener('change', handleChange);
}, [theme]);

 const t = (key: string) => {
 return translations[language][key as keyof typeof translations['en']] || key;
};

 return (
 <SettingsContext.Provider value={{ theme, setTheme, language, setLanguage, analyticsEnabled, setAnalyticsEnabled, t}}>
 {children}
 </SettingsContext.Provider>
 );
}

export function useSettings() {
 const context = useContext(SettingsContext);
 if (context === undefined) {
 throw new Error('useSettings must be used within a SettingsProvider');
}
 return context;
}
