import React from 'react';
import {shallow, configure} from 'enzyme';
import jest from 'jest-mock';
import renderer from 'react-test-renderer';
import CarouselItem from './Item';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Component: Item', () => {

    const content = {
        content: {
            webformatURL: 'url',
            tags: 'tags'
        }
    };

    const CarouselItemComponent = shallow(<CarouselItem content={content} level={1} />);

    it('Carousel renders without crashing', () => {
        CarouselItemComponent;
    });
});
