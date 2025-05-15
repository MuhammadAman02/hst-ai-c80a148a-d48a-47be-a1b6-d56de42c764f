import React, { useState, useEffect } from 'react';
import { SkinTone } from '@/types';
import { detectSkinTone, getColorRecommendations, adjustImageSkinTone } from '@/lib/colorUtils';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import SkinToneSelector from '@/components/SkinToneSelector';
import ColorPalette from '@/components/ColorPalette';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [skinTone, setSkinTone] = useState<SkinTone>('medium');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  // Handle image upload
  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setProcessedImage(imageUrl);
    
    // Auto-detect skin tone (simulated)
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const detectedTone = detectSkinTone();
      setSkinTone(detectedTone);
      setIsProcessing(false);
      
      toast({
        title: "Image processed!",
        description: `Detected skin tone: ${detectedTone}`,
      });
    }, 1500);
  };

  // Handle skin tone selection
  const handleSkinToneChange = (newTone: SkinTone) => {
    setSkinTone(newTone);
    
    if (uploadedImage) {
      setIsProcessing(true);
      
      // Simulate processing delay
      setTimeout(() => {
        const adjusted = adjustImageSkinTone(uploadedImage, newTone);
        setProcessedImage(adjusted);
        setIsProcessing(false);
      }, 1000);
    }
  };

  // Get color recommendations based on skin tone
  const colorRecommendations = getColorRecommendations(skinTone);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Colors</h1>
          <p className="text-muted-foreground mb-8">
            Upload a photo or select a skin tone to discover your most flattering color palette
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Upload Your Photo</h2>
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">2. Select or Adjust Skin Tone</h2>
              <SkinToneSelector 
                selectedTone={skinTone} 
                onSelectTone={handleSkinToneChange} 
              />
              
              {uploadedImage && (
                <div className="mt-4">
                  <Button 
                    disabled={isProcessing} 
                    className="w-full"
                    onClick={() => handleSkinToneChange(skinTone)}
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Wand2 className="mr-2 h-4 w-4" />
                        Apply Skin Tone
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {processedImage && (
            <div className="mb-8">
              <Tabs defaultValue="results">
                <TabsList className="mb-4">
                  <TabsTrigger value="results">Results</TabsTrigger>
                  <TabsTrigger value="comparison">Before & After</TabsTrigger>
                </TabsList>
                
                <TabsContent value="results" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium mb-2">Processed Image</h3>
                        <div className={`relative rounded-md overflow-hidden ${isProcessing ? 'animate-pulse-subtle' : ''}`}>
                          <img 
                            src={processedImage} 
                            alt="Processed" 
                            className="w-full h-auto"
                          />
                          {isProcessing && (
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                              <div className="text-white">Processing...</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <ColorPalette combinations={colorRecommendations} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="comparison">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-4">Before & After</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Original</h4>
                        <img 
                          src={uploadedImage || ''} 
                          alt="Original" 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Adjusted to {skinTone} skin tone
                        </h4>
                        <div className={`relative rounded-md overflow-hidden ${isProcessing ? 'animate-pulse-subtle' : ''}`}>
                          <img 
                            src={processedImage || ''} 
                            alt="Processed" 
                            className="w-full h-auto rounded-md"
                          />
                          {isProcessing && (
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                              <div className="text-white">Processing...</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {!processedImage && (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <ColorPalette combinations={colorRecommendations} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Color Harmony - Find your perfect color palette based on your skin tone</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;