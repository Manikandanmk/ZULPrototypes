import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/FontAwesome';
import OverallScore from './overallscore/OverallScore';
import StatusLayout from './status/StatusLayout';
import StatusHeader from './StatusHeader';
import AssessmentList from './assessment/AssessmentList';
// import { H3 } from 'native-base';

const mapDispatchToProps = dispatch => ({

})

class Dashboard extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.body}>
                    <View style={{ backgroundColor: '#ffffff', marginBottom: 5 }}>
                        <StatusHeader />
                        <OverallScore />
                        <View style={{ backgroundColor: '#ddd', height: 1, marginHorizontal: 15 }}></View>
                        <StatusLayout />
                    </View>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <AssessmentList />
                    </View>
                </Content>
            </Container>

            // <View style={{ flex: 1 }}>
            //     <ScrollView style={styles.container}>
            //         <View style={styles.header}>
            //             <View style={{ flex: 1 }}>

            //                 <H3 style={{color:'#ffffff',padding: 5}}>Dashboard</H3>
            //             </View>
            //             <View>
            //                 <TouchableOpacity style={{ padding: 5 }}>
            //                     <Icon name="cog" color="#ffffff" type="FontAwesome" size={20} />
            //                 </TouchableOpacity>
            //             </View>
            //         </View>
            //         <View style={styles.body}>
            //             <View style={{ backgroundColor: '#ffffff', marginBottom: 5 }}>
            //                 <StatusHeader />
            //                 <OverallScore />
            //                 <View style={{ backgroundColor: '#ddd', height: 1, marginHorizontal: 15 }}></View>
            //                 <StatusLayout />
            //             </View>
            //             <View style={{ backgroundColor: '#ffffff' }}>
            //                 <AssessmentList />
            //             </View>
            //         </View>

            //     </ScrollView>
            // </View>
        )
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ddd',
        padding: 5
    }
})
