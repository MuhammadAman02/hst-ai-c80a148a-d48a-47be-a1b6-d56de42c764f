import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ColorCombination, ColorPaletteItem } from '@/types';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ColorPaletteProps {
  combinations: ColorCombination[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ combinations }) => {
  const { toast } = useToast();
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    
    toast({
      title: "Color copied!",
      description: `${hex} has been copied to clipboard`,
    });
    
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  if (combinations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recommended Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Upload an image or select a skin tone to see color recommendations
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recommended Color Combinations</h2>
      
      {combinations.map((combination, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{combination.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {combination.colors.map((color, colorIndex) => (
                <div key={colorIndex} className="flex flex-col items-center">
                  <div className="relative group">
                    <div
                      className="h-20 w-full rounded-md mb-2 cursor-pointer transition-transform group-hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      {copiedColor === color.hex && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-md">
                          <Check className="text-white h-6 w-6" />
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="text-sm font-medium">{color.name}</span>
                  <span className="text-xs text-muted-foreground">{color.hex}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ColorPalette;