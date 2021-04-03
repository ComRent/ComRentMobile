import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabbar = props => (
    <FullContainer>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(203,181,168)', '#755841']}
                style={{
                    marginBottom: -30,
                    marginLeft: -25,
                    width: '50%',
                    height:102,
                    borderRadius: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <AntDesign name={props.activateNumber == 1? "appstore1":"appstore-o"}
                           size={25}
                           color={props.activateNumber == 1? "#FEF8F3":"rgb(203,181,168)"}
                           style={{marginBottom: 30,}}/>
                <MaterialCommunityIcons name={props.activateNumber == 2? "order-bool-ascending-variant":"order-bool-ascending"}
                                        size={27}
                                        color={props.activateNumber == 2? "#FEF8F3":"rgb(203,181,168)"}
                                        style={{marginBottom: 30,marginLeft: 45,}} />
            </LinearGradient>

        <LinearGradient
            // Background Linear Gradient
            colors={['rgb(203,181,168)', '#755841']}
            style={{
                marginBottom: -37,
                width: 66,
                height:120,
                marginLeft: -1,
            }}
        >
            <MiddleBigCircle>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgb(203,181,168)', '#755841']}
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Feather name={"shopping-cart"}
                             size={24}
                             color={props.activateNumber == 3 ? "#FEF8F3":"rgb(203,181,168)"}
                             style={{marginLeft:-2,}} />
                </LinearGradient>
            </MiddleBigCircle>
        </LinearGradient>

        <LinearGradient
            // Background Linear Gradient
            colors={['rgb(203,181,168)', '#755841']}
            style={{
                marginBottom: -30,
                marginLeft: -1,
                width: '50%',
                height:102,
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <AntDesign name={props.activateNumber == 4 ? "enviroment":"enviromento"}
                       size={25}
                       color={props.activateNumber == 4 ? "#FEF8F3":"rgb(203,181,168)"}
                       style={{marginBottom: 30, marginLeft:-25,}}/>
            <Ionicons name={props.activateNumber == 5 ? "person":"md-person-outline"}
                      size={25}
                      color={props.activateNumber == 5 ? "#FEF8F3":"rgb(203,181,168)"}
                      style={{marginBottom: 30,marginLeft: 40,}} />
        </LinearGradient>

    </FullContainer>
);

export default Tabbar;

const FullContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: -6px;
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  background-color: transparent;
`;

const LeftContainer = styled.View`
  width: 42%;
  height: 80%;
  background-color: #bfa28e;
  border-top-right-radius: 28px;
  overflow: hidden;
`
const MiddleContainer = styled.View`
  width: 16%;
  height: 80%;
  background-color: #bfa28e;
`
const MiddleBigCircle = styled.View`
  width: 100%;
  height: 66px;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  background-color: white;
  align-items: center;
`
const MiddleSmallCircle = styled.View`
  width: 54px;
  height: 54px;
  background-color: #bfa28e;
  border-radius: 27px;
`
const RightContainer = styled.View`
  width: 42%;
  height: 80%;
  background-color: #bfa28e;
  border-top-left-radius: 28px;
`
