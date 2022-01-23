import React from 'react';
import { Picker as RNPicker } from '@react-native-picker/picker';

type PickerItem = {
  label: string;
  value: string;
};

type Props = {
  items: PickerItem[];
  selectedValue: string | undefined;
  setValue: (itemValue: string) => void;
};

export function Picker({ items, selectedValue, setValue }: Props) {
  return (
    <RNPicker
      selectedValue={selectedValue}
      onValueChange={(itemValue: string) => setValue(itemValue)}
    >
      {items.map(item => (
        <RNPicker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </RNPicker>
  );
}
