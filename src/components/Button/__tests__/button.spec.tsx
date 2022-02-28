import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { Button } from '..';

import theme from '../../../styles/themes/light';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Button component', () => {
  it('should has a title', () => {
    const { getByText } = render(<Button title="Button title" />, {
      wrapper: Providers,
    });

    getByText('Button title');
  });
});
