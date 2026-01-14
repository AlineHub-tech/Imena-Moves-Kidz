import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Gukora Context
const AuthContext = createContext(null);

// 2. Custom Hook yo koroshya gukoresha Context
export const useAuth = () => useContext(AuthContext);

// 3. Provider Component izaba ifunze website yose (wrapper)
export const AuthProvider = ({ children }) => {
  // State igaragaza ko umuntu yinjiye, n'icyo aricyo (e.g., 'admin', 'member', 'guest')
  const [userRole, setUserRole] = useState('guest'); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Aha niho ushobora kugenzura muri localStorage cyangwa API ko umuntu yari yarinjiye
    // Mu rugero, turatangira tuyita isLoading ikaba False nyuma ya 1s
    const checkLoginStatus = () => {
        // const storedRole = localStorage.getItem('userRole');
        // if (storedRole) {
        //     setUserRole(storedRole);
        // }
        setIsLoading(false);
    };
    checkLoginStatus();
  }, []);

  // Function yo kwinjira (Connects to your LoginPage API logic)
  const login = (role) => {
    setUserRole(role);
    // localStorage.setItem('userRole', role); // Bika muri browser
  };

  // Function yo gusohoka
  const logout = () => {
    setUserRole('guest');
    // localStorage.removeItem('userRole');
  };

  // Value izasangizwa components zose
  const value = {
    userRole,
    isLoading,
    login,
    logout,
    isAuthenticated: userRole !== 'guest',
    isAdmin: userRole === 'admin',
    isMember: userRole === 'member',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
