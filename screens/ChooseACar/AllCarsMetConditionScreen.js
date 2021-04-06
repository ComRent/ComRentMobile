import React from 'react';
import styled from 'styled-components';
import CarInfoCard from "../../assets/components/ChooseACar/CarInfoCard";
import { ScrollView, SafeAreaView } from 'react-native';
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Tabbar from "../../assets/components/Tabbar";
import { LinearGradient } from 'expo-linear-gradient';
import CarCategoryCard from "../../assets/components/ChooseACar/CarCategoryCard";
import {TouchableOpacity} from "react-native-gesture-handler";
class AllCarsMetConditionScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <FullContainer>

                <TopTabContainer>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("Map");
                    }}>
                        <Entypo name="chevron-small-left" size={30} color="#101010"/>
                    </TouchableOpacity>

                    <ChooseCarHelpButton>
                        <LinearGradient
                            colors={['rgb(235,195,151)', '#e3a365']}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ChooseCarHelpButtonText>选车帮助</ChooseCarHelpButtonText>
                        </LinearGradient>
                    </ChooseCarHelpButton>

                </TopTabContainer>
                <TopContainer>
                    <AddressTitle>北京金融界洲酒店</AddressTitle>
                    <TimeTitle>3月31日 14:00 - 4月2日 14:00</TimeTitle>
                    <ChooseCategoryCardContainer>
                        <AllCategoryCard>
                            <LinearGradient
                                colors={['rgb(215,183,167)', '#a2856e']}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 20,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CategoryNameText1>全部</CategoryNameText1>
                                <CategoryNameText1>车型</CategoryNameText1>
                            </LinearGradient>
                        </AllCategoryCard>

                        <ScrollView
                            horizontal={true}
                            style={{height: "38%"}}
                        >
                            {carTypes.map((carType, index) => (
                                <CarCategoryCard
                                    key={index}
                                    carCategory={carType}/>
                            ))}
                        </ScrollView>
                    </ChooseCategoryCardContainer>
                </TopContainer>
                <BottomContainer>
                    <ScrollView>
                        {queriedCars.map((car, index) => (
                            <CarInfoCard
                                key={index}
                                carName={car.carName}
                                carImage={car.carImage}
                                carType={car.carType}
                                driveType={car.driveType}
                                newState={car.newState}
                                oilVolume={car.oilVolume}
                                priceCount={car.priceCount}
                                priceForOneDay={car.priceForOneDay}
                            />
                        ))}
                    </ScrollView>
                </BottomContainer>
                <TabbarFullContainer>
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
                        {/* to home start */}
                        <BottomButtonViewL1>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("HomeMain");
                            }}>
                                <Ionicons name="home-outline" size={27} color={"rgb(203,181,168)"}/>
                            </TouchableOpacity>
                        </BottomButtonViewL1>
                        {/* to home end */}

                        {/* to message list start */}
                        <BottomButtonViewR1>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("MessageMain");
                            }}>
                                <Ionicons name="chatbubbles-outline"
                                          size={27}
                                          color={"rgb(203,181,168)"} />
                            </TouchableOpacity>
                        </BottomButtonViewR1>
                        {/* to message list end */}

                    </LinearGradient>

                    {/* to map start */}
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
                                <View3>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate("Map");
                                    }}>
                                        <FontAwesome5 name={"map-marked"}
                                                      size={24}
                                                      color={"rgb(203,181,168)"}
                                                      style={{marginLeft:0,}} />
                                    </TouchableOpacity>
                                </View3>

                            </LinearGradient>
                        </MiddleBigCircle>
                    </LinearGradient>
                    {/* to map end */}

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
                        {/* to select cars start */}
                        <BottomButtonViewL>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("AllCarsMetCondition");
                            }} >
                                <AntDesign name={"enviroment"}
                                           size={25}
                                           color={"#FEF8F3"}
                                />
                            </TouchableOpacity>
                        </BottomButtonViewL>
                        {/* to select cars end */}

                        {/* to MeMain start */}
                        <BottomButtonViewR>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("MeMain");
                            }}>
                                <Ionicons name={"md-person-outline"}
                                          size={25}
                                          color={"rgb(203,181,168)"} />
                            </TouchableOpacity>
                        </BottomButtonViewR>
                        {/* to MeMain end */}
                    </LinearGradient>
                </TabbarFullContainer>
            </FullContainer>
        );
    }
}
export default AllCarsMetConditionScreen;

const FullContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;  /* 左右居中 */
  background-color: white;
`
const TopTabContainer = styled.View`
  height: 50px;
  width: 90%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ChooseCarHelpButton = styled.View`
    width: 25%;
    height: 80%;
    background-color: #b49780;
    border-radius: 20px;
    box-shadow: 2px 2px #b7a698; /* 右偏移数，下偏移数，颜色*/
    shadow-opacity: 1;
    shadow-radius: 5px;
    justify-content: center;
    align-items: center;
`
const ChooseCarHelpButtonText = styled.Text`
  font-size: 13px;
  font-weight: 800;
  color: #ffffff;
`
const TopContainer = styled.View`
  width: 80%;
  height: 25%;
`
const AddressTitle = styled.Text`
  font-weight: 500;
  font-size: 20px;
`
const TimeTitle = styled.Text`
  font-weight: 400;
  font-size: 18px;
  color: #818181;
  margin-top: 10px;
`
const ChooseCategoryCardContainer = styled.View`
    width: 100%;
    height: 70%;
    align-items: center; /* 左右居中 */
    flex-direction: row;
    justify-content: center;
`
const AllCategoryCard = styled.View`
    width: 18%;
    height: 65%;
    border-radius: 20px;
    box-shadow: 2px 2px #b7a698;
    shadow-opacity: 0.8;
    shadow-radius: 6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CategoryNameText1 = styled.Text`
  font-size: 15px;
  font-weight:800;
  color: white;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
`
const BottomContainer = styled.View`
  height: 54%;
  width: 85%;
`
const TabbarFullContainer = styled.View`
  left: -6px;
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  background-color: transparent;
`;

const MiddleBigCircle = styled.View`
  width: 100%;
  height: 66px;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  background-color: white;
  align-items: center;
`
const View3 = styled.View``

const BottomButtonViewL = styled.View`
  margin-bottom: 30px;
`
const BottomButtonViewR = styled.View`
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 35px;
`
const BottomButtonViewL1 = styled.View`
  margin-bottom: 30px;
  margin-left: 10px;
`
const BottomButtonViewR1 = styled.View`
  margin-bottom: 30px;
  margin-left: 40px;
`
const carTypes = [
    '经济型',
    '舒适型',
    'SUV',
    '商务型',
    '豪华型',
    '跑车',
    '其他'
]

const queriedCars = [
    {
        carName:'大众朗逸',
        carImage:require('../../assets/components/ChooseACar/大众朗逸.jpg'),
        carType:'经济型',
        driveType:'自动挡',
        newState:'一年新车',
        oilVolume:'1.5L',
        priceCount:'2',
        priceForOneDay:'88'
    },
    {
        carName:'大众朗逸',
        carImage:require('../../assets/components/ChooseACar/大众朗逸.jpg'),
        carType:'经济型',
        driveType:'自动挡',
        newState:'一年新车',
        oilVolume:'1.5L',
        priceCount:'2',
        priceForOneDay:'88'
    },
    {
        carName:'大众朗逸',
        carImage:require('../../assets/components/ChooseACar/大众朗逸.jpg'),
        carType:'经济型',
        driveType:'自动挡',
        newState:'一年新车',
        oilVolume:'1.5L',
        priceCount:'2',
        priceForOneDay:'88'
    },
    {
        carName:'大众朗逸',
        carImage:require('../../assets/components/ChooseACar/大众朗逸.jpg'),
        carType:'经济型',
        driveType:'自动挡',
        newState:'一年新车',
        oilVolume:'1.5L',
        priceCount:'2',
        priceForOneDay:'88'
    }
]
