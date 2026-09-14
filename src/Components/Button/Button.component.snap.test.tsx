import ButtonComponent from './Button.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

describe('Button Component', () => {
  const configs = [
    {
      props: {
        title: 'Click Me',
        onPress: jest.fn(),
      },
      desc: 'renders correctly with default props',
    },
    {
      props: {
        title: 'Primary Button',
        variant: 'primary',
        onPress: jest.fn(),
      },
      desc: 'renders correctly with primary variant',
    },
    {
      props: {
        title: 'Secondary Button',
        variant: 'secondary',
        onPress: jest.fn(),
      },
      desc: 'renders correctly with secondary variant',
    },
    {
      props: {
        title: 'Disabled Button',
        disabled: true,
        onPress: jest.fn(),
      },
      desc: 'renders correctly in disabled state',
    },
    {
      props: {
        title: 'Loading Button',
        loading: true,
        onPress: jest.fn(),
      },
      desc: 'renders correctly in loading state',
    },
    {
      props: {
        title: 'Custom Styled Button',
        style: { marginTop: 16, backgroundColor: 'red' },
        onPress: jest.fn(),
      },
      desc: 'renders correctly with custom style',
    },
    {
      props: {
        title: 'Combined Props Button',
        variant: 'outline',
        disabled: false,
        loading: false,
        style: { padding: 12 },
        onPress: jest.fn(),
      },
      desc: 'renders correctly with all combined props',
    },
  ];

  runSnapshotTests(ButtonComponent, configs);
});