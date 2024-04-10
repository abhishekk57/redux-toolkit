import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage, SettingPage, ProfilePage, LogsPage } from '../../../screens';

const Drawer = createDrawerNavigator();
function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{ title: "Home" }} name="homepage" component={HomePage} />
            <Drawer.Screen options={{ title: "Logs" }} name="logs" component={LogsPage} />
            <Drawer.Screen options={{ title: "Profile" }} name="profile" component={ProfilePage} />
            <Drawer.Screen options={{ title: "setting" }} name="setting" component={SettingPage} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen;