import { SkinTone, ColorCombination, SkinToneOption } from "@/types";

// Skin tone options for the selector
export const skinToneOptions: SkinToneOption[] = [
  { id: 'fair', name: 'Fair', color: '#F8D5C2' },
  { id: 'light', name: 'Light', color: '#E0B193' },
  { id: 'medium', name: 'Medium', color: '#C68863' },
  { id: 'tan', name: 'Tan', color: '#AA6651' },
  { id: 'deep', name: 'Deep', color: '#8D4A43' },
  { id: 'dark', name: 'Dark', color: '#603B3F' },
];

// Color palettes based on skin tone
const colorPalettes: Record<SkinTone, ColorCombination[]> = {
  fair: [
    {
      name: 'Soft Pastels',
      colors: [
        { name: 'Soft Pink', hex: '#F7CAD0' },
        { name: 'Powder Blue', hex: '#B8D8D8' },
        { name: 'Lavender', hex: '#D9D2E9' },
        { name: 'Mint', hex: '#C7E8CA' }
      ]
    },
    {
      name: 'Cool Neutrals',
      colors: [
        { name: 'Navy', hex: '#1A2A3A' },
        { name: 'Slate Gray', hex: '#708090' },
        { name: 'Cool Beige', hex: '#D6CCAD' },
        { name: 'Dusty Rose', hex: '#C9A9A6' }
      ]
    }
  ],
  light: [
    {
      name: 'Warm Neutrals',
      colors: [
        { name: 'Camel', hex: '#C19A6B' },
        { name: 'Olive', hex: '#808000' },
        { name: 'Terracotta', hex: '#E2725B' },
        { name: 'Cream', hex: '#FFFDD0' }
      ]
    },
    {
      name: 'Soft Brights',
      colors: [
        { name: 'Coral', hex: '#FF7F50' },
        { name: 'Turquoise', hex: '#40E0D0' },
        { name: 'Peach', hex: '#FFDAB9' },
        { name: 'Sage', hex: '#BCB88A' }
      ]
    }
  ],
  medium: [
    {
      name: 'Rich Earth Tones',
      colors: [
        { name: 'Rust', hex: '#B7410E' },
        { name: 'Forest Green', hex: '#228B22' },
        { name: 'Mustard', hex: '#E1AD01' },
        { name: 'Burgundy', hex: '#800020' }
      ]
    },
    {
      name: 'Jewel Tones',
      colors: [
        { name: 'Emerald', hex: '#50C878' },
        { name: 'Ruby', hex: '#E0115F' },
        { name: 'Sapphire', hex: '#0F52BA' },
        { name: 'Amethyst', hex: '#9966CC' }
      ]
    }
  ],
  tan: [
    {
      name: 'Warm Brights',
      colors: [
        { name: 'Tangerine', hex: '#F28500' },
        { name: 'Fuchsia', hex: '#FF00FF' },
        { name: 'Lime', hex: '#BFFF00' },
        { name: 'Royal Blue', hex: '#4169E1' }
      ]
    },
    {
      name: 'Rich Neutrals',
      colors: [
        { name: 'Chocolate', hex: '#7B3F00' },
        { name: 'Khaki', hex: '#C3B091' },
        { name: 'Teal', hex: '#008080' },
        { name: 'Plum', hex: '#8E4585' }
      ]
    }
  ],
  deep: [
    {
      name: 'Bold Brights',
      colors: [
        { name: 'Magenta', hex: '#FF00FF' },
        { name: 'Cobalt', hex: '#0047AB' },
        { name: 'Bright Orange', hex: '#FF5F1F' },
        { name: 'Chartreuse', hex: '#7FFF00' }
      ]
    },
    {
      name: 'Deep Classics',
      colors: [
        { name: 'Deep Purple', hex: '#301934' },
        { name: 'Hunter Green', hex: '#355E3B' },
        { name: 'Crimson', hex: '#DC143C' },
        { name: 'Gold', hex: '#FFD700' }
      ]
    }
  ],
  dark: [
    {
      name: 'Vibrant Contrasts',
      colors: [
        { name: 'Bright Yellow', hex: '#FFFF00' },
        { name: 'Hot Pink', hex: '#FF69B4' },
        { name: 'Electric Blue', hex: '#7DF9FF' },
        { name: 'Lime Green', hex: '#32CD32' }
      ]
    },
    {
      name: 'Rich Jewels',
      colors: [
        { name: 'Ruby Red', hex: '#E0115F' },
        { name: 'Royal Purple', hex: '#7851A9' },
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Bright Turquoise', hex: '#08E8DE' }
      ]
    }
  ]
};

// Get color recommendations based on skin tone
export const getColorRecommendations = (skinTone: SkinTone): ColorCombination[] => {
  return colorPalettes[skinTone] || [];
};

// Simple function to simulate skin tone detection from an image
// In a real app, this would use image processing algorithms
export const detectSkinTone = (): SkinTone => {
  const tones: SkinTone[] = ['fair', 'light', 'medium', 'tan', 'deep', 'dark'];
  const randomIndex = Math.floor(Math.random() * tones.length);
  return tones[randomIndex];
};

// Function to adjust image based on selected skin tone
// This is a placeholder - in a real app, this would use image processing
export const adjustImageSkinTone = (
  imageUrl: string, 
  targetSkinTone: SkinTone
): string => {
  console.log(`Adjusting image to ${targetSkinTone} skin tone`);
  // In a real implementation, this would apply filters or transformations
  // For now, we'll just return the original image
  return imageUrl;
};