import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Store from './src/Store';  
import CreateCart from './src/CreateCart';  

const AppNavigator = createStackNavigator(  
    {
     Store:{      
       screen: Store,
        navigationOptions: () => ({
           header:null
        })
    },
    CreateCart:{      
      screen: CreateCart,
       navigationOptions: () => ({
          header:null
       })
   },
  },
    {
      initialRouteName: 'Store'
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}