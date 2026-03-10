import React, { createContext, useContext, useState, useEffect} from'react';

interface SettingsContextType {
 analyticsEnabled: boolean;
 setAnalyticsEnabled: (enabled: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children}: { children: React.ReactNode}) {
 const [analyticsEnabled, setAnalyticsEnabledState] = useState<boolean>(() => {
 return localStorage.getItem('analytics') ==='true';
});

 const setAnalyticsEnabled = (enabled: boolean) => {
 setAnalyticsEnabledState(enabled);
 localStorage.setItem('analytics', String(enabled));
};

 return (
 <SettingsContext.Provider value={{ analyticsEnabled, setAnalyticsEnabled}}>
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
