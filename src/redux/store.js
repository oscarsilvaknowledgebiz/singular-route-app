import { configureStore } from '@reduxjs/toolkit'
// import register from '../features/user/register'
import locationFeature from '../features/location/location'
import userFeature from '../features/user/user'

export default configureStore({
  reducer: {
    location: locationFeature,
    user: userFeature,
  },
})
