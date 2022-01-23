import { Picker } from '../../../components/Picker';

import { usePreferences } from '../../../store/usePreferences';

export function TemperatureUnitPicker() {
  const { temperatureUnit, setTemperatureUnit } = usePreferences();

  function handleSetTemperatureUnit(unit: string) {
    setTemperatureUnit(unit);
  }

  return (
    <Picker
      items={[
        { label: 'Celsius', value: 'celsius' },
        { label: 'Fahrenheit', value: 'fahrenheit' },
      ]}
      selectedValue={temperatureUnit}
      setValue={handleSetTemperatureUnit}
    />
  );
}
