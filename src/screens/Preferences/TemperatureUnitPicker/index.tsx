import { Picker } from '../../../components/Picker';

import { usePreferences } from '../../../store/usePreferences';

export function TemperatureUnitPicker() {
  const { temperatureUnit, setTemperatureUnit } = usePreferences();

  return (
    <Picker
      items={[
        { label: 'Celsius', value: 'celsius' },
        { label: 'Fahrenheit', value: 'fahrenheit' },
      ]}
      selectedValue={temperatureUnit}
      setValue={setTemperatureUnit}
    />
  );
}
