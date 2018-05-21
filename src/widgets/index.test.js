import React from 'react';
import { shallow } from 'enzyme';
import { Widgets, matStateToProps } from './index';

describe('Widgets Component class', () => {
  it('should render all base children', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    };

    const widgets = {
      list: [{ id: '123abc', name: 'test-widget', descripton: 'test test widget..', size: 1 }],
      requesting: false,
      successful: false,
      messages: [],
      errors: [],
    };

    const rendered = shallow(
      <Widgets
        invalid={false}
        handleSubmit={() => {}}
        widgetCreate={() => {
          null;
        }}
        widgetRequest={() => {}}
        reset={() => {}}
        client={client}
        widgets={widgets}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  it('should render all base children', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    };

    const widgets = {
      list: [{ id: '123abc', name: 'test-widget', descripton: 'test test widget..', size: 1 }],
      requesting: true,
      successful: false,
      messages: [],
      errors: [],
    };

    const rendered = shallow(
      <Widgets
        invalid={false}
        handleSubmit={() => {}}
        widgetCreate={() => {
          null;
        }}
        widgetRequest={() => {}}
        reset={() => {}}
        client={client}
        widgets={widgets}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  it('should render all base children', () => {
    const client = {
      id: 'test',
      token: {
        test: 'token',
      },
    };

    const widgets = {
      list: [{ id: '123abc', name: 'test-widget', descripton: 'test test widget..', size: 1 }],
      requesting: false,
      successful: true,
      messages: [{ msg: 'message' }],
      errors: [{}],
    };

    const rendered = shallow(
      <Widgets
        invalid={false}
        handleSubmit={() => {}}
        widgetCreate={() => {
          null;
        }}
        widgetRequest={() => {}}
        reset={() => {}}
        client={client}
        widgets={widgets}
      />
    );

    expect(rendered).toMatchSnapshot();
  });
});
