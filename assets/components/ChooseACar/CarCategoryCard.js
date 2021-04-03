import React from 'react';
import styled from 'styled-components';
import CarInfoCard from "./CarInfoCard";

const CarCategoryCard = props => (
    <ACategoryCard>
        <CategoryNameText2>{props.carCategory}</CategoryNameText2>
    </ACategoryCard>
);
export default CarCategoryCard;
const ACategoryCard = styled.View`
  font-size: 14px;
  font-weight: 800;
  color: #bea089;
  background-color: #f1e5d9;
  border-radius: 20px;
  width: 68px;
  height: 80%;
  margin-left: 13px;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`
const CategoryNameText2 = styled.Text`
  font-size: 14px;
  font-weight:600;
  color: #b49780;
`
