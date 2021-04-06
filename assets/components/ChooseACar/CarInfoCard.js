import React from 'react';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CarInfoCard = props => (
    <FullContainer>
        <TopContainer>
            <CarName>{props.carName}</CarName>
            <MaterialCommunityIcons name="fire" size={18} color="#DE5431" />
        </TopContainer>
        <MiddleContainer>
            <CarImage source={props.carImage}></CarImage>
            <CarInfoContainer>
                <CarInfoALine>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/car.png")}/>
                        <CarInfoText>{props.carType}</CarInfoText>
                    </CarInfoAContent>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/carType.png")}/>
                        <CarInfoText>{props.driveType}</CarInfoText>
                    </CarInfoAContent>
                </CarInfoALine>
                <CarInfoALine>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/newState.png")} />
                        <CarInfoText>{props.newState}</CarInfoText>
                    </CarInfoAContent>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/volume.png")} />
                        <CarInfoText>{props.oilVolume}</CarInfoText>
                    </CarInfoAContent>
                </CarInfoALine>
                <CarInfoALine>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/doorNumber.png")} />
                        <CarInfoText>4</CarInfoText>
                    </CarInfoAContent>
                    <CarInfoAContent>
                        <IconContainer source={require("./imgs/volumePerson.png")} />
                        <CarInfoText>5</CarInfoText>
                    </CarInfoAContent>
                </CarInfoALine>
            </CarInfoContainer>
        </MiddleContainer>
        <ASplitLine></ASplitLine>
        <BottomContainer>
            <CarPriceCount>{props.priceCount + '个报价'}</CarPriceCount>
            <CarPriceTextContainer>
                <RMB>RMB</RMB>
                <PriceBox>
                    <Price>{props.priceForOneDay}</Price>
                    <RMB>/天</RMB>
                </PriceBox>
            </CarPriceTextContainer>
        </BottomContainer>

    </FullContainer>
);

export default CarInfoCard;

const FullContainer = styled.View`
  width: 95%;
  margin-left: 10px;
  height: 160px;
  background-color: #ffffff;
  opacity:0.9;
  border-radius: 20px;
  box-shadow: 1.5px 1.5px #c8c9c9;
  shadow-opacity: 0.8;
  shadow-radius: 3px;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 7.5px;
`

const TopContainer = styled.View`
  width: 87%;
  height: 20%;
  flex-direction: row;
  justify-content: flex-start; /* 左右居左 */
  align-items: center; /* 上下居中 */
  margin-top: 5px;
`
const CarName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-right: 3px;
`
const MiddleContainer = styled.View`
  width: 87%;
  height: 50%;
  flex-direction: row;
  align-items: flex-end;
`
const CarImage = styled.Image`
  width: 45%;
  height: 80%;
`
const IconContainer = styled.Image`
  width: 20px;
  height: 20px;
`
const CarInfoContainer = styled.View`
  height: 100%;
  width: 65%;
  flex-direction: column;
  margin-left: 10px;
`

const CarInfoALine = styled.View`
  width: 100%;
  height: 33%;
  flex-direction: row;
  align-items: center;
`
const CarInfoAContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 100%;
`
const CarInfoText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #797979;
  margin-left: 8px;
`
const ASplitLine = styled.View`
width: 87%;
height: 1px;
background-color: #d4d4d4;
margin-top: 17px;
`
const BottomContainer = styled.View`
width: 87%;
height: 16%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const CarPriceCount = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: #969696;
  letter-spacing: 1px;
`

const CarPriceTextContainer = styled.View`
  width: 27%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const PriceBox = styled.View`
  width: 60%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const RMB = styled.Text`
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 11px;
`
const Price = styled.Text`
color: #dc745a;
font-size: 11px;
`
