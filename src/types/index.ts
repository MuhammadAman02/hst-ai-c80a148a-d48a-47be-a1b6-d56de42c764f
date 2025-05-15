export type SkinTone = 'fair' | 'light' | 'medium' | 'tan' | 'deep' | 'dark';

export interface ColorPaletteItem {
  name: string;
  hex: string;
}

export interface ColorCombination {
  name: string;
  colors: ColorPaletteItem[];
}

export interface SkinToneOption {
  id: SkinTone;
  name: string;
  color: string;
}