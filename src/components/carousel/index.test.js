import React from 'react';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import Carousel from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const images = [{image1: 'image1'}, {image2: 'image2'}, {image3: 'image3'},
    {image4: 'image4'}, {image5: 'image5'}];

const CarouselComponent = shallow(<Carousel images={images} />);

describe('Component: Carousel', () => {

    it('Carousel renders without crashing', () => {
        CarouselComponent;
    });

    it('Carousel snapshot', () => {

        const tree = renderer.create(<Carousel images={images} >test</Carousel>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Check right click functionality', () => {

        CarouselComponent.instance().rightClick();

        expect(CarouselComponent.state().direction).toBe('right');
    });

    it('Check left click functionality', () => {

        CarouselComponent.instance().leftClick();

        expect(CarouselComponent.state().direction).toBe('left');
    });

});
