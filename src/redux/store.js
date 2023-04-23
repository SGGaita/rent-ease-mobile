import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { tenantSlice } from './tenantSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tenant: tenantSlice.reducer,
    }
})

