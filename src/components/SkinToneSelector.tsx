import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { SkinTone, SkinToneOption } from '@/types';
import { skinToneOptions } from '@/lib/colorUtils';

interface SkinToneSelectorProps {
  selectedTone: SkinTone;
  onSelectTone: (tone: SkinTone) => void;
}

const SkinToneSelector: React.FC<SkinToneSelectorProps> = ({
  selectedTone,
  onSelectTone,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Select Skin Tone</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedTone}
          onValueChange={(value) => onSelectTone(value as SkinTone)}
          className="flex flex-wrap gap-4"
        >
          {skinToneOptions.map((option: SkinToneOption) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={option.id}
                className={`flex flex-col items-center space-y-2 rounded-md border-2 p-4 hover:bg-accent cursor-pointer ${
                  selectedTone === option.id
                    ? 'border-primary'
                    : 'border-transparent'
                }`}
              >
                <div
                  className="h-10 w-10 rounded-full border"
                  style={{ backgroundColor: option.color }}
                ></div>
                <span className="text-sm font-medium">{option.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default SkinToneSelector;