import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';

describe('Main', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Main maps={[1, 2, 3]} stats={'yee'} userIsLoading={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when conditionally rendering Showcase', () => {
    const altWrapper = shallow(
      <Main maps={[1, 2, 3]} stats={'yee'} userIsLoading={false} />
    );
    expect(altWrapper).toMatchSnapshot();
  });

  it('should match snapshot when conditionally rendering Placeholder', () => {
    const altWrapper = shallow(
      <Main maps={[1, 2, 3]} userIsLoading={false} stats={'yee'} />
    );
    expect(altWrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an array of map objects', () => {
    const mockState = {
      maps: ['map1', 'map2', 'map3']
    };

    const expected = {
      maps: ['map1', 'map2', 'map3']
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should return an object containing user stats', () => {
    const mockState = {
      stats: { one: 'one', two: 'two' }
    };

    const expected = {
      stats: { one: 'one', two: 'two' }
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
