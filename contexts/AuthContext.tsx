import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipo do usuário
type User = {
  id: number;
  name: string;
  email: string;
  cpf?: string;
  endereco?: string;
  celular?: string;
  nascimento?: string;
};

// Tipo do contexto de autenticação
type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook de acesso ao contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
