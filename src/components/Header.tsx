import React from 'react';
import { Palette } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Color Harmony</h1>
        </div>
        <p className="text-sm text-muted-foreground hidden md:block">
          Discover your perfect color palette based on your skin tone
        </p>
      </div>
    </header>
  );
};

export default Header;