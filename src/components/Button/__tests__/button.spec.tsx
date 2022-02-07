import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { Button } from '..';

import theme from '../../../styles/themes/light';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = render(<Button title="Button title" />, {
      wrapper: Providers,
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
