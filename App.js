import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Scene, Tabs, Drawer, Lightbox, Modal} from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import { Grid, Icon } from '@ant-design/react-native';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
import Login from './components/Login';

// 添加4.0.6版本的 react-native-router-flux
// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6
const styles = StyleSheet.create({
	
});
const App = () => {
	// 实现 Tabs
	return (
		<Router>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 消息栏 */}
								<Scene key='msg'
									title='消息'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
									
								>

									<Scene key="ms" component={Msg}/>
									<Scene 
										key="msgdetail" 
										hideTabBar    
										component={MsgDetail}
									/>
								</Scene>
								{/* 文档栏 */}
								<Scene 
									key='doc'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='file'/
									>}
									title="文档"
									component={Doc}
								/>
								
							</Tabs>
						</Scene>
					</Drawer>
					<Scene key='light' component={Mybox}/>
				</Lightbox>
				<Scene key="login" component={ShowMyName}/>
				<Scene key="login1" component={Login}/>
			</Modal>
		</Router>
	);
};


export default App;
