import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  CheckBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuIcon from '../assets/icons/menu.png'
import logo from '../assets/icons/zeynLogo.png'
import foodImg from '../assets/icons/healthyfood.png'
import locationImg from '../assets/icons/location.png';
import googlePlay from '../assets/icons/google_play.png';
import appStore from '../assets/icons/app_store.png';
import phonesImage from '../assets/icons/phones.png'
import bangladeshi from '../assets/icons/bangladeshi.jpg'
import pizza from '../assets/icons/pizza.jpg'
import burger from '../assets/icons/burger.jpg'
import mexican from '../assets/icons/mexican.jpg'
import asian from '../assets/icons/asian.jpg'
import american from '../assets/icons/american.jpg'
import dessert from '../assets/icons/dessert.jpg'
import chicken from '../assets/icons/chicken.jpg'
import fullStar from "../assets/icons/fullStar.png"
import emptyStar from "../assets/icons/emptyStar.png"
import restaurant from "../assets/icons/restaurant.jpg"
import restaurant2 from "../assets/icons/rest.jpg"
import locationIcon from "../assets/icons/locationIcon.png"
import fcb from "../assets/icons/fcb.png"
import insta from "../assets/icons/insta.png"
import twitter from "../assets/icons/twit.png"
import youtube from "../assets/icons/youtube.png"
import emailIcon from "../assets/icons/email.png"
import phoneIcon from "../assets/icons/phone.png"
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Organic & Tasty Food for your table.</Text>
        <Text style={styles.subtitle}>Explore top-rated attractions, activities and more</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <Image source={foodImg} style={styles.image} />
        <View style={styles.howToOrderSection}>
        <Text style={styles.howToOrderText}>How to order</Text>
        <Text style={styles.howToOrderText}>It's as easy as this</Text>
          <Image source={locationImg} style={styles.locationImage} />
          <Text style={styles.howToOrderText}>Provide your location</Text>
          <Text style={styles.howToOrderSubtext}>Fill out your address & search</Text>
        
        </View>
        <View style={styles.downloadAppSection}>
          <Text style={styles.howToOrderText}>Download the app</Text>
          <Text style={styles.howToOrderSubtext}>Click, sit back, and enjoy.</Text>
          <View style={styles.appStoreIcons}>
            <Image source={googlePlay} style={styles.appStoreIcon} />
            <Image source={appStore} style={styles.appStoreIcon} />
          </View>
          <Image source={phonesImage} style={styles.image} />
        </View>
        <Text style={styles.popularCuisinesTitle}>Popular Cuisines</Text>
        <View style={styles.cuisineContainer}>
          <CuisineCard
            imageSource={bangladeshi}
            label="Bangladeshi"
          />
          <CuisineCard
            imageSource={chicken}
            label="Chicken"
          />
           <CuisineCard
            imageSource={asian}
            label="Asian"
          />
           <CuisineCard
            imageSource={pizza}
            label="Pizza"
          />
           <CuisineCard
            imageSource={american}
            label="American"
          />
           <CuisineCard
            imageSource={burger}
            label="Burger"
          />
           <CuisineCard
            imageSource={mexican}
            label="Mexican"
          />
           <CuisineCard
            imageSource={dessert}
            label="Dessert"
          />
          
        </View>
        <View style={styles.mostVisitedRestaurants}>
          <Text style={styles.popularCuisinesTitle}>Most Visited Restaurants</Text>
          <View style={styles.restaurantContainer}>
            <RestaurantCard
              imageSource={restaurant}
              name="Sultan's Dine"
              rating={3}
              address="250W 72nd st, New York"
              isOpen={false}
            />
            <RestaurantCard
              imageSource={restaurant2}
              name="Mr Beast Burger"
              rating={1}
              address="West Shewrapara"
              isOpen={true}
            />
          
          </View>
          </View>
          <View style={styles.footer}>
          
            <Image source={logo} style={styles.appLogo} />
            <View style={styles.followUsContainer}>
            <Text style={styles.followUsText}>Follow us on:</Text>
            <View style={styles.socialIcons}>
              <Image source={fcb} style={styles.socialIcon} />
              <Image source={insta} style={styles.socialIcon} />
              <Image source={twitter} style={styles.socialIcon} />
              <Image source={youtube} style={styles.socialIcon} />
            </View>
          </View>
          <Text style={styles.aboutText}>About</Text>
          <Text style={styles.footerText}>Terms & Conditions</Text>
          <Text style={styles.footerText}>Contact Us</Text>
          <Text style={styles.servicesText}>Services</Text>
          <Text style={styles.footerText}>About Us</Text>
          <Text style={styles.footerText}>Privacy</Text>
          <Text style={styles.servicesText}>Download Apps</Text>
          <View style={styles.appStoreIcons}>
            <Image source={appStore} style={styles.appStoreIcon} />
            <Image source={googlePlay} style={styles.appStoreIcon} />
          </View>
          <View style={styles.contactInfo}>
            <Image source={emailIcon} style={styles.contactIcon} />
            <Text style={styles.contactText}>info@food-bank.xyz</Text>
          </View>
          <View style={styles.contactInfo}>
            <Image source={phoneIcon} style={styles.contactIcon} />
            <Text style={styles.contactText}>+8801777664555</Text>
          </View>
          <Text style={styles.copyrightText}>© All Rights Reserved</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const CuisineCard = ({ imageSource, label }) => {
  return (
    <View style={styles.cuisineCard}>
      <Image source={imageSource} style={styles.cuisineImage} />
      <View style={styles.cuisineLabel}>
        <Text style={styles.cuisineLabelText}>{label}</Text>
      </View>
    </View>
  );
};
const RestaurantCard = ({ imageSource, name, rating, address, isOpen }) => {
  return (
    <View style={styles.restaurantCard}>
      <Image source={imageSource} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{name}</Text>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <Image
            key={index}
            source={index < rating ? fullStar : emptyStar}
            style={styles.starIcon}
          />
        ))}
        <Text style={styles.ratingText}>({rating})</Text>
      </View>
      <View style={styles.addressContainer}>
        <Image source={locationIcon} style={styles.locationIcon} />
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <Text style={[styles.isOpenText, isOpen ? styles.openText : styles.closedText]}>
        {isOpen ? 'Open Now' : 'Closed Now'}
      </Text>
    </View>
  );
};
const Header = ({navigation}) => {
  return (
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
        <TouchableOpacity style={[styles.iconWrapper, styles.circleIcon, styles.redIcon]} onPress={() => navigation.navigate('Dashboard')}>
          <Image source={MenuIcon} style={styles.menuIconImage} />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  content: {
    backgroundColor: '#FFF5EE',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  
    borderRadius: 5,
    padding: 10,
    backgroundColor:"white"
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  howToOrderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  howToOrderSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  locationImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  howToOrderSubtext: {
    textAlign: 'center',
    marginBottom: 20,
  },
  downloadAppSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  appStoreIcons: {
    flexDirection: 'row',
   
    marginBottom: 20,
  },
  appStoreIcon: {
    width: 150,
    height: 50,
    marginRight:10
  }, popularCuisinesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cuisineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cuisineCard: {
    width: '45%',
    marginBottom: 20,
  },
  cuisineImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cuisineLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  cuisineLabelText: {
    color: 'white',
    textAlign: 'center',
  },
  mostVisitedRestaurants: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  restaurantContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
  },
  restaurantCard: {
    width: '100%', 
  
    marginBottom: 20,
    // borderWidth: 0.2,
    // borderColor: '#ccc',
    borderRadius: 10,
    // padding: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0.5 },
    // shadowOpacity:0.1,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  addressText: {
    fontSize: 14,
  },
  isOpenText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  openText: {
    color: 'green',
  },
  closedText: {
    color: 'red',
  },
  footer: {
    // backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  followUsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  appLogo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  followUsText: {
    fontSize: 14,
    color:"black",
    marginBottom:15
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"black"
  },
  footerText: {
    fontSize: 14,
    marginBottom: 5,
    color:"black"
  },
  servicesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"black"
  },

  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIcon: {
    width: 15,
    height: 15,
    marginRight: 10,}
    , copyrightText: {
      textAlign: 'center',
      marginTop: 10, 
      color:"black",
      marginBottom:20
    },
});

export default Home;