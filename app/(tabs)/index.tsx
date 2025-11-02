import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-green-500 text-4xl'>hello world</Text>
      <Link href='/login' className='px-4 py-1 bg-blue-500 rounded-md'>
        Login
      </Link>
    </View>
  )
}
