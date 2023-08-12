import React from 'react';
import PropTypes from 'prop-types';
import { Block, Input, ImSearchStyled, Wrapper } from './Filter.styled';
import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <Block>
      <p>Find contacts by name</p>
      <Wrapper>
        <label htmlFor="filter">
          <ImSearchStyled />
        </label>
        <Input
          type="text"
          name="filter"
          onChange={event => dispatch(addFilter(event.target.value))}
        />
      </Wrapper>
    </Block>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
