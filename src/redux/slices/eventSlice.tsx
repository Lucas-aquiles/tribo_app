import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {Props as EventData} from '../../components/AlertCardItem';

export interface EventState {
  data: Array<EventData>;
}

const initialState: EventState = {
  data: [
    {
      type: 'Seguridad',
      imageRoute:
        'https://s3-alpha-sig.figma.com/img/ea27/15be/3d4fb2eb5850fda1cceb350f850901f0?Expires=1667174400&Signature=GbqanLRykEu4kPKJ3UwJ5fTteVFVefyOKzp8uG2qpscc0oUUZKSUMr9uoTo99kTqtO~ekK496xLAeSwdu1pIUASw2kAluQ7AIGTPURXShYVehLnaNV5nUKCwANpaDDZIp8CeKRXqlRm~skGsXy2kg2A1c6uwM~EA4cIO2YGSknCupAX1R8mpmKSHOpX8ew6fX3QYYyX5QubI4llALGw87Z2wjeuvLVH3gWgK5aBwQe9HZl58vGm5qoZvcJq4iyPDItUnL6yTwl3qQR7MzPAhLPzKRYhlp~gQF5XxVVt3u~HfNbsgnGi4CMRfokW0SU95v52ybw03PfGblTQO6yDYiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Robo a casa ',
      state: 'Abierto',
      distanceKm: 10,
      views: 6,
      comments: 12,
      uploadedMin: 30,
      cardSize: 'small',
    },
    {
      type: 'Seguridad',
      imageRoute:
        'https://s3-alpha-sig.figma.com/img/3247/1352/fa912f6c9b438febc82d1321ef72228e?Expires=1667174400&Signature=gSNiNN0vs7DGs6rsy0-Ok7DSy1~bq408TEEhz2quExQuPCjSYbxhqB55Czbepvthnbhm9R3d3sODGB7lGUu~~HpYSkHdZmUiUW0rSuN1L9KGkh3AxG3p49O~GJ97h6QpTlovHO9Qti9beLVBAw61I7zGACraP2ctgiX8rBS~aZTxcIznQigsY10OJ0V4fA6V9K5ALv8l2Fm~bcU8FQdL6owp1MAU5G6qNVpzIYjU0qNTrznlf0NtLM8xQqLMevEr8bLJuY-oGJvufrzFotlNLgPwDBraukh7Q-wOa1yttK-7XOmhOb8cX6QZPUkFSm3HEKa4~p7u5Gr14qYbjER4ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Robo a casa',
      state: 'Abierto',
      distanceKm: 15,
      views: 9,
      comments: 16,
      uploadedMin: 40,
      cardSize: 'small',
    },
  ],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<EventState>) => {
      state = {...action.payload};
    },
  },
});

export const {fetch} = eventSlice.actions;

export default eventSlice.reducer;
