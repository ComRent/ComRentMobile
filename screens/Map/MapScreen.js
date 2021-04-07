import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions, Easing, Switch, TouchableOpacity} from "react-native";
import {Animated} from "react-native";

import {FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

class MapScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        top: new Animated.Value(screenHeight),
        isDifferentPlace: false,
    }

    toggleSwitch = () => {
        this.setState({
            isDifferentPlace: !this.state.isDifferentPlace
        })
    }
    toggleMenu = (stat) => {
        if (stat === 'open'){
            Animated.timing( this.state.top, {
                toValue: screenHeight*0.65,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
        if (stat === 'closed'){
            Animated.timing( this.state.top, {
                toValue: screenHeight,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
    }
    componentDidMount() {
        this.toggleMenu('closed');
    }

    render() {
        return (
            <FullContainer >
                <AnimatedFullContainer style={{ top: this.state.top }}>
                    <CloseView>
                        <TouchableOpacity onPress={() => {
                            this.toggleMenu('closed');
                        }}>
                            <ButtonView>
                                <Ionicons name="ios-close-circle" size={44} color="#927968" />
                            </ButtonView>
                        </TouchableOpacity>
                    </CloseView>

                    <Cover>
                        <InfoALine>
                            <InfoTitle>取车城市:</InfoTitle>
                            <InfoContent>北京市</InfoContent>
                        </InfoALine>

                        <InfoALine>
                            <InfoTitle>取车地点:</InfoTitle>
                            <InfoContent>北京金融街洲际酒店</InfoContent>
                        </InfoALine>

                        <InfoALine1>
                            <InfoALineL>
                                <InfoTitle>还车城市:</InfoTitle>
                                <InfoContent>北京市</InfoContent>
                            </InfoALineL>

                            <InfoALineR>
                                <InfoTitle>异地还车:</InfoTitle>
                                <Switch trackColor={{ false: "#767577", true: "#bba79d" }}
                                        thumbColor={this.state.isDifferentPlace ? "#e2bb99" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={this.toggleSwitch}
                                        value={this.state.isDifferentPlace} />
                            </InfoALineR>

                        </InfoALine1>

                        <InfoALine style={{height: (this.state.isDifferentPlace? 35:0)}}>
                            <InfoTitle>还车地点:</InfoTitle>
                            <InfoContent>北京金融街洲际酒店</InfoContent>
                        </InfoALine>

                        <InfoTimeLine>
                            <InfoTimeBlock>
                                <InfoContent>今天</InfoContent>
                                <InfoTimeCircle>
                                    <InfoContent style={{fontSize:14}}>3月31日  14：00</InfoContent>
                                </InfoTimeCircle>
                            </InfoTimeBlock>

                            <TimeIntervalBlock>
                                <InfoContent style={{fontSize:12,color:"#796e65",marginTop:10}}>2天</InfoContent>
                                <FontAwesome name="long-arrow-right" size={24} color="#ffffff" />
                            </TimeIntervalBlock>

                            <InfoTimeBlock>
                                <InfoContent>周五</InfoContent>
                                <InfoTimeCircle>
                                    <InfoContent style={{fontSize:14}}>4月2日  14：00</InfoContent>
                                </InfoTimeCircle>
                            </InfoTimeBlock>
                        </InfoTimeLine>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("AllCarsMetCondition");
                        }} >
                            <SearchButton>
                                <InfoContent>查询</InfoContent>
                            </SearchButton>
                        </TouchableOpacity>

                    </Cover>
                </AnimatedFullContainer>
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


                    <ButtonView1>
                        <TouchableOpacity onPress={() => {
                            this.toggleMenu('open');
                        }}>
                            <AntDesign name="edit" size={27} color={"rgb(195,174,162)"}/>
                        </TouchableOpacity>
                    </ButtonView1>

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
const FullContainer1 = styled.View`
  position:absolute;
  background-color: #b39780;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -1px #4c4847;
  shadow-radius: 5px;
  flex-direction: column;
`
const AnimatedFullContainer = Animated.createAnimatedComponent(FullContainer1)
const Cover = styled.View`
  height: 29%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;  /* 左右居中 */
`
const InfoALine = styled.View`
  width: 90%;
  height: 35px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`
const InfoALine1 = styled.View`
  width: 90%;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const InfoALineL = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const InfoALineR = styled.View`
flex-direction: row;
justify-content: flex-end;
align-items: center;
`

const InfoTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #f3eee9;
  margin-right: 20px;
`
const InfoContent = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: black;
  
`
const InfoTimeLine = styled.View`
  width: 90%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const InfoTimeBlock = styled.View`
  width: 45%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoTimeCircle = styled.View`
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 15px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`
const TimeIntervalBlock = styled.View`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SearchButton = styled.View`
  background-color: #ffffff;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`
const CloseView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const ButtonView = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`
