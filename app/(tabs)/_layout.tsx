import {SymbolView} from 'expo-symbols';
import {Tabs} from 'expo-router';

export default function TabLayout() {

  return (
      <Tabs>
        <Tabs.Screen
            name="index"
            options={{
              title: 'Calendar',
              tabBarIcon: ({color}) => (
                  <SymbolView
                      name={{
                        ios: 'chevron.left.forwardslash.chevron.right',
                        android: 'code',
                        web: 'code',
                      }}
                      tintColor={color}
                      size={28}
                  />
              )
            }}
        />
        <Tabs.Screen
            name="options"
            options={{
              title: 'Options',
              tabBarIcon: ({color}) => (
                  <SymbolView
                      name={{
                        ios: 'chevron.left.forwardslash.chevron.right',
                        android: 'code',
                        web: 'code',
                      }}
                      tintColor={color}
                      size={28}
                  />
              ),
            }}
        />
      </Tabs>
  );
}
