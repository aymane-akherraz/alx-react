import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';
import fetchMock from 'jest-fetch-mock';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

Enzyme.configure({ adapter: new Adapter() });

fetchMock.enableMocks();
