import { View ,StyleSheet,Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';



export  const hiddenButton=()=>(
    
    <View style={styles.row}>
        <Pressable style={styles.deletButton}>
        <MaterialCommunityIcons name="delete-forever-outline" size={30} color="white" />
        </Pressable>
    </View>

)

const styles = StyleSheet.create({
    row:{
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    deletButton:{
        backgroundColor:'red',
        width:75,
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%"
    }
})