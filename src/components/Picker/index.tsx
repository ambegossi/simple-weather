import { Platform } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useTheme } from 'styled-components/native';

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
  const theme = useTheme();

  return (
    <RNPicker
      selectedValue={selectedValue}
      onValueChange={(itemValue: string) => setValue(itemValue)}
      style={{
        color: theme.colors.text_primary,
      }}
    >
      {items.map(item => (
        <RNPicker.Item
          color={Platform.OS === 'ios' ? theme.colors.text_primary : 'default'}
          key={item.value}
          label={item.label}
          value={item.value}
        />
      ))}
    </RNPicker>
  );
}
