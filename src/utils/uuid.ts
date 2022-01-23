import uuid from 'react-native-uuid';

export function generateUuid() {
  return uuid.v4().toString();
}
