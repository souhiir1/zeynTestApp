import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/icons/zeynLogo.png';
import GoogleIcon from '../assets/icons/google.png'; 
import FacebookIcon from '../assets/icons/facebook.png'; 

const Login = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    userType: 'customer', 
  });

  const [isChecked, setIsChecked] = useState({
    customer: true, 
    restaurantOwner: false,
    deliveryMan: false,
  });

  const handleChange = (name, value) => {
    setPerson({ ...person, [name]: value });
  };

  const handleUserTypeChange = (type) => {
    setIsChecked({
      customer: type === 'customer',
      restaurantOwner: type === 'restaurantOwner',
      deliveryMan: type === 'deliveryMan',
    });
    setPerson({ ...person, userType: type }); 
  };

  const isFormValid = () => {
    return (
      person.firstName !== '' &&
      person.lastName !== '' &&
      person.userName !== '' &&
      person.email !== '' &&
      person.address !== '' &&
      person.password !== '' &&
      person.confirmPassword !== ''
    );
  };
  const handleLogin = async () => {
    if (email && password) {
      await AsyncStorage.setItem('user', email);
      navigation.navigate('Home');
    }
  };

  const handleDemoLogin = (role) => {
    switch (role) {
      case 'RestaurantOwner':
        setEmail('restaurantowner@example.com');
        setPassword('123456');
        setErrorMessage("We'll never share your email with anyone else.");
        break;
      default:
        setEmail('');
        setPassword('');
        setErrorMessage('');
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
       <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.iconContainer}>
            <View style={[styles.iconWrapper, styles.circleIcon]}>
              <Text style={styles.iconText}>🛒</Text>
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </View>
            <View style={[styles.iconWrapper, styles.circleIcon]}>
              <Text style={styles.iconText}>🇬🇧</Text>
            </View>
            <View style={[styles.iconWrapper, styles.circleIcon]}>
              <Text style={styles.iconText}>👤</Text>
            </View>
          
          </View>
        </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedTab('Login')} style={selectedTab === 'Login' ? styles.activeTab : styles.inactiveTab}>
          <Text style={selectedTab === 'Login' ? styles.activeTabText : styles.inactiveTabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Register')} style={selectedTab === 'Register' ? styles.activeTab : styles.inactiveTab}>
          <Text style={selectedTab === 'Register' ? styles.activeTabText : styles.inactiveTabText}>Register</Text>
        </TouchableOpacity>
      </View>

   

      {/* Login Section */}
      <View style={styles.body}>
        {selectedTab==="Login" && <>
        
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Please enter your login details below</Text>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <Text>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword} />
   

        <View style={styles.checkboxContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Alternate Login */}
        <Text style={styles.orText}>or Login with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.roundedButton]}>
            <Image source={GoogleIcon} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.roundedButton]}>
            <Image source={FacebookIcon} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Demo Login */}
        <Text style={styles.demoText}>For quick demo login click below...</Text>
        <View style={styles.demoButtonsContainer}>
          <TouchableOpacity style={[styles.demoButton, { backgroundColor: 'blue' }]} onPress={() => handleDemoLogin('Admin')}>
            <Text style={styles.demoButtonText}>Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.demoButton, { backgroundColor: 'lightblue' }]} onPress={() => handleDemoLogin('Customer')}>
            <Text style={styles.demoButtonText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.demoButton, { backgroundColor: 'green' }]} onPress={() => handleDemoLogin('RestaurantOwner')}>
            <Text style={styles.demoButtonText}>Restaurant Owner</Text>
          </TouchableOpacity>
        
        </View>
        <TouchableOpacity style={[styles.demoButton, { backgroundColor: 'yellow' ,width:150,alignSelf:"center"}]} onPress={() => handleDemoLogin('RestaurantOwner')}>
            <Text style={styles.demoButtonText}>Delivery boy</Text>
          </TouchableOpacity>
        </>}
      {selectedTab==="Register" && <>
        <View style={styles.userTypeContainer}>
        <View style={styles.userTypeCheckboxContainer}>
          <CheckBox
            value={isChecked.customer}
            onValueChange={() => handleUserTypeChange('customer')}
            style={styles.checkbox}
          />
          <Text style={styles.userTypeText}>Customer</Text>
        </View>
        <View style={styles.userTypeCheckboxContainer}>
          <CheckBox
            value={isChecked.restaurantOwner}
            onValueChange={() => handleUserTypeChange('restaurantOwner')}
            style={styles.checkbox}
          />
          <Text style={styles.userTypeText}>Restaurant Owner</Text>
        </View>
       
      </View>
      <View style={styles.userTypeCheckboxContainer}>
          <CheckBox
            value={isChecked.deliveryMan}
            onValueChange={() => handleUserTypeChange('deliveryMan')}
            style={styles.checkbox}
          />
          <Text style={styles.userTypeText}>Delivery Man</Text>
        </View>
          <Text>First Name *</Text>
        <TextInput style={styles.input} placeholder="John" value={person.firstName}  onChangeText={(text) => handleChange('firstName', text)}/>
       
        <Text>Last Name *</Text>
        <TextInput style={styles.input} placeholder="Doe"  value={person.lastName}  onChangeText={(text) => handleChange('lastName', text)}/>
        <Text>Username *</Text>
        <TextInput style={styles.input} placeholder="john"  value={person.userName}  onChangeText={(text) => handleChange('userName', text)}/>
        <Text>Email address *</Text>
        <TextInput style={styles.input} placeholder="Johndoe@exemple.com" value={person.email}  onChangeText={(text) => handleChange('email', text)}/>
        <Text>Address *</Text>
        <TextInput style={styles.input} placeholder="House#10,section#1,Dhaka 1216,Banglad"  value={person.address} onChangeText={(text) => handleChange('address', text)} />
        <Text>Password *</Text>
        <TextInput style={styles.input} placeholder="Create password"  value={person.password} onChangeText={(text) => handleChange('password', text)} />
        <Text>Repeat password *</Text>
        <TextInput style={styles.input} placeholder="Repeat password" value={person.confirmPassword} onChangeText={(text) => handleChange('confirmPassword', text)} />
        <TouchableOpacity style={styles.loginButton} onPress={() => {
            if (isFormValid()) {
         
              alert('Registration successful!');
            } else {
              alert('Please fill in all required fields.');
            }
          }}
          disabled={!isFormValid()}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        </>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  logo: {
    width: 80,
    height: 80,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  menuIcon: {
    padding: 10,
    borderRadius: 5,
  },
  menuIconImage: {
    width: 20,
    height: 20,
  },
  iconWrapper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', 
  },
  circleIcon: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  redIcon: {
    backgroundColor: 'red',
  },
  iconText: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  tabs: { flexDirection: 'row' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: 'red',marginRight:20 },
  inactiveTab: { padding: 5 },
  activeTabText: { color: 'red' },
  inactiveTabText: { color: 'black' },
  body: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 20, marginTop: 20 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', textAlign: 'center',color:"black" },
  subText: { fontSize: 16, textAlign: 'center', marginBottom: 20,color:"black" },
  input: { borderRadius: 15, borderWidth: 1, padding: 10, marginVertical: 10 ,borderColor:"grey"},
  notSharingText: { textAlign: 'center', fontSize: 12, marginBottom: 10, color: '#888' },
  errorText: { color: 'red', fontSize: 12, marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  rememberText: { fontSize: 14,color:"black" },
  forgotText: { fontSize: 14, color: 'black', textDecorationLine: 'underline' },
  loginButton: { backgroundColor: 'red', borderRadius: 25, padding: 15, alignItems: 'center', marginVertical: 20 },
  loginButtonText: { color: '#fff', fontSize: 16 },
  orText: { textAlign: 'center', marginVertical: 10,color:"black" },
  socialButtonsContainer: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  socialButton: { flexDirection: 'row', alignItems: 'center', marginVertical: 10, padding: 10, backgroundColor: '#ddd', width: '80%', justifyContent: 'center' },
  roundedButton: { borderRadius: 25 },
  socialIcon: { width: 20, height: 20, marginRight: 10 },
  socialButtonText: { fontSize: 16, color: 'black' },
  demoText: { fontWeight: 'bold', textAlign: 'center', marginVertical: 20,color:"black" },
  demoButtonsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  demoButton: { flex: 1, margin: 5, padding: 10, borderRadius: 5, alignItems: 'center' },
  demoButtonText: { color: 'black' },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userTypeCheckboxContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  userTypeText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Login;
