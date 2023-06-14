import React from 'react';
import { render } from '@testing-library/react-native';

import Card from '../src/components/Card';
import CardScroll from '../src/CardScroll';

import data from '../src/dataset.json';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('App', () => {
    it('Should render a cards list', () => {
        const screen = render(<CardScroll />);

        const cardsList = screen.getByTestId('list');
    });

    it('Should have a card for each element in the dataset', () => {
        const { getAllByTestId } = render(<CardScroll data={data} />);

        const flatListItems = getAllByTestId('flatListItem');

        expect(flatListItems.length).toBe(data.length);
    });

    it('Should have a like button on each card', () => {
        const screen = render(<Card price={'400'} />);

        const likeButton = screen.getAllByTestId('likeBtn');
    });

});