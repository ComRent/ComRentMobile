import React from 'react';
import styled from 'styled-components';

class MapMenu extends React.Component {
    render() {
        return (
            <FullContainer>
                <Cover/>

            </FullContainer>
        );
    }
}

export default MapMenu;

const FullContainer = styled.View`
  position:absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`
const Cover = styled.View``
