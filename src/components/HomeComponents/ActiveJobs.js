import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';


export default class ActiveJobs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
        <View style={styles.serviceBar}>
          <Swipeout backgroundColor="white">
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>Name: John </Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Description </Text>
            </View>
          </Swipeout>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  serviceBar: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
})