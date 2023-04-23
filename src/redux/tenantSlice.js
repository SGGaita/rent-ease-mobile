import { createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';


const initialState = {
  tenantInfo: null,
};

export const tenantSlice = createSlice({
  name: "tenant",
  initialState: initialState,
  reducers: {
    setTenantInfo: (state, action) => {
      state.tenantInfo = action.payload;
    },
  },
});

export const fetchTenantInfo = (tenantID) => (dispatch) => {
  firestore().collection("Tenants")
    .doc(tenantID)
    .get()
    .then((tenantDoc) => {
       
      const tenantData = tenantDoc.data();
      console.log("Tenants info",tenantData)
      const propertyID = tenantData.propertyID;
      console.log("Property ID",propertyID)
       firestore().collection("Properties")
         .doc(propertyID)
         .get()
         .then((propertyDoc) => {
          const propertyData = propertyDoc.data();

          const tenantInfo = {
            firstName: tenantData.firstName,
            lastName: tenantData.lastName,
             name: propertyData.name,
            email: tenantData.email,
             phone: tenantData.phone,
            address: propertyData.address,
             rentAmount: propertyData.rent,
           };

           console.log("tenant info", tenantInfo)

           dispatch(tenantSlice.actions.setTenantInfo(tenantInfo));
        })
        .catch((error) => {
          console.log("Error getting property document:", error);
        });
    })
    .catch((error) => {
      console.log("Error getting tenant document:", error);
    });
};



