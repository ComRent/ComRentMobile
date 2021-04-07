import React from 'react';
import styled from 'styled-components';

import { LinearGradient } from 'expo-linear-gradient';
import {TouchableOpacity} from "react-native";
import {Animated} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MapMenu from "./MapMenu";

class MapScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    toggleTouchWhiteBall = () => {

    }
    render() {
        return (
            <FullContainer>
                <MapMenu></MapMenu>
                <MapImage source={require("./Map.png")} />
                <TopTabContainer>
                    <LinearGradient
                        colors={['rgb(126,100,79)', 'rgb(171,150,137)']}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 28,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 0,
                        }}
                    >
                        <CityText>北京市</CityText>
                    </LinearGradient>

                    {/* to main start */}
                    <ButtonView1>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("HomeMain");
                        }}>
                            <AntDesign name="edit" size={27} color={"rgb(195,174,162)"}/>
                        </TouchableOpacity>
                    </ButtonView1>
                    {/* to main end */}
                </TopTabContainer>




                <BottomContainer>
                    <TabbarFullContainer>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['rgb(178,156,142)', '#755841']}
                            style={{
                                marginBottom: -40,
                                width: '100%',
                                height:107,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: 30,
                            }}
                        >

                            <WhiteBall>
                            {/* to main start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("HomeMain");
                                }}>
                                    <Ionicons name="home-outline" size={27} color={"rgb(203,181,168)"}/>
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to main end */}

                            {/* to message list start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("MessageMain");
                                }}>
                                    <Ionicons name="chatbubbles-outline"
                                              size={27}
                                              color={"rgb(203,181,168)"} />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to message list end */}

                            {/* to Map start */}
                            <BottomButtonView>
                                <TouchableOpacity>
                                    <FontAwesome5 name={"map-marked-alt"}
                                                  size={24}
                                                  color={"#FEF8F3"}/>
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to Map end */}

                            {/* toChooseACar start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("AllCarsMetCondition");
                                }}>
                                    <AntDesign name={"enviromento"}
                                               size={25}
                                               color={"rgb(203,181,168)"}
                                    />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to ChooseACar end */}

                            {/* to MeMain start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("MeMain");
                                }}>
                                    <Ionicons name={"md-person-outline"}
                                              size={25}
                                              color={"rgb(203,181,168)"} />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to MeMain end */}
                            </WhiteBall>
                        </LinearGradient>
                    </TabbarFullContainer>
                </BottomContainer>
            </FullContainer>
        );
    }


}
export default MapScreen;

const FullContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;  /* 左右居中 */
  justify-content: space-between; /* 上下展开 */
  background-color: white;
`
const MapImage = styled.Image`
  position: absolute;
  top: 52px;
  width: 100%;
  height: 100%;
`
const TopTabContainer = styled.View`
  height: 95px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 1px #b7a9a0;
  shadow-radius: 3px;
`
const CityText = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`
const BottomContainer = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: column;
  align-items: center;
`
const WhiteBall = styled.View`
  width: 100%;
  height: 60%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`
const TabbarFullContainer = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  bottom: 20px;
`;

const BottomButtonView = styled.View`
  margin-bottom: 0px;
  width: 18%;
  align-items: center;
`
const ButtonView1 = styled.View`
  width: 18%;
  align-items: center;
  margin-top: 7%;
`
