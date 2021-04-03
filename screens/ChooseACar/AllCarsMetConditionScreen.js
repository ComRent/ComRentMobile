import React from 'react';
import styled from 'styled-components';
import CarInfoCard from "../../assets/components/ChooseACar/CarInfoCard";
import { ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
                        this.props.navigation.push("Login");
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
                <Tabbar activateNumber={4}></Tabbar>
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
const ACategoryCard = styled.View`
  font-size: 14px;
  font-weight: 800;
  color: #bea089;
  background-color: #f1e5d9;
  border-radius: 20px;
  width: 43%;
  height: 100%;
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
const BottomContainer = styled.View`
  height: 54%;
  width: 85%;
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
