# Restaurant-hybrid-app
This is a pretty basic React-native project in TypeScript. Created by referring Practical <b>*React Native by Frank Zammetti*</b>.
<p align="center">
  <img src="https://github.com/AshishMadhu/Restaurant-hybrid-app/blob/master/ro2832a9.png" alt="django" height="190"/>
</p>

## Overview

I code this app fully in TypedScript, actually in the book it was given in JavaScript. Yeah I know it's not a brainstorming task.
I think this is worth mentioning. For me, it was easy to understand & build the app. It took me 2 weeks to complete this tutorial. I mentioned it easy here just because only basic things are used to build the project, as you know no backend is implemented, so there is no need for fetching data or using redux to save the user or anything like that. If you are a beginner in react-native then I'll recommend this book to you (a bit outdated) 🎁.

# Documentation
The basic use of this app is to choose a restaurant of your need. For those people who have confusion.

- App contains 3 tab screens RestaurantScreen, DecisionScreen and PeopleScreen.
- Each of these screens has their respective subscreens for RestaurantScreen and PeopleScreen have AddScreen and ListScreen
- The Complex screen is DecisionScreen because all the magic happens here. It has 5 other SubScreen to Choose the Restaurant according to the need of people in the party.

AsyncStorage is used to store data, hmm... pretty basic.

# Dependencies

- react-navigation
- react-native-vector-ions
