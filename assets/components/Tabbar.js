import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native-gesture-handler";
import {connect} from "react-redux";
function mapStateToProps( state ) {
    return { action: state.action };
}
class Tabbar extends React.Component {
    render() {
        return (
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
                <AntDesign name={this.props.activateNumber == 1? "appstore1":"appstore-o"}
                           size={25}
                           color={this.props.activateNumber == 1? "#FEF8F3":"rgb(203,181,168)"}
                           style={{marginBottom: 30,}}/>
                <MaterialCommunityIcons name={this.props.activateNumber == 2? "order-bool-ascending-variant":"order-bool-ascending"}
                                        size={27}
                                        color={this.props.activateNumber == 2? "#FEF8F3":"rgb(203,181,168)"}
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
                        <FontAwesome5 name={this.props.activateNumber == 3 ? "map-marked-alt":"map-marked"}
                                      size={24}
                                      color={this.props.activateNumber == 3 ? "#FEF8F3":"rgb(203,181,168)"}
                                      style={{marginLeft:0,}} />
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

                <View4>
                    <TouchableOpacity onPress={() => {}}>
                        <AntDesign name={this.props.activateNumber == 4 ? "enviroment":"enviromento"}
                                   size={25}
                                   color={this.props.activateNumber == 4 ? "#FEF8F3":"rgb(203,181,168)"}
                                   style={{marginBottom: 30, marginLeft:-25,}}/>
                    </TouchableOpacity>
                </View4>



                <Ionicons name={this.props.activateNumber == 5 ? "person":"md-person-outline"}
                          size={25}
                          color={this.props.activateNumber == 5 ? "#FEF8F3":"rgb(203,181,168)"}
                          style={{marginBottom: 30,marginLeft: 40,}} />
            </LinearGradient>

        </TabbarFullContainer>
        );
    }
}

export default connect(mapStateToProps)(Tabbar);

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

const View4 = styled.View`
  background-color: aqua;
  width: 50%;
`
