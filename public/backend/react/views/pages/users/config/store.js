import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import setup from "./setup";
import app_config from "../../../../config/app.config";

export const getUserData = createAsyncThunk(
    'user/getUserData',
    async (params = 0, thunkAPI) => {
        console.log(thunkAPI);
        const response = await axios.get(`${app_config.api_endpoint}/users`);
        // thunkAPI.dispatch(storeSlice.actions.my_action())
        
        return response.data;
    }
)

export const getUserData2 = createAsyncThunk(
    'user/getUserData2',
    async (params = 0, thunkAPI) => {
        const response = await axios.get('https://ctgcomputer.com/get-category-product/54/10/1/json');
        return response.data;
    }
)

var store_prefix = setup.prefix;
const storeSlice = createSlice({
    name: `${store_prefix}`,
    initialState: {
        /* data store */
        all: [],
        item: {},

        /* data filters */
        off_canvas_show: false,
        management_modal_show: false,

        /* data store */
        [`${store_prefix}s`]: {}, // all data
        [`${store_prefix}`]: null, // selected data

        /* data filters */
        [`${store_prefix}_page`]: 1,
        [`${store_prefix}_paginate`]: 10,
        [`${store_prefix}_search_key`]: ``,
        [`orderByCol`]: "id",
        [`orderByAsc`]: true,
        [`${store_prefix}_show_active_data`]: 1, // show all active data

        /* selected data */
        [`${store_prefix}_selected`]: [], // selected data using checkbox
        [`${store_prefix}_show_selected`]: false, // will show selected data into offcanvas

        /* trigger showing data modal */
        [`${store_prefix}_show_management_modal`]: false,
        [`${store_prefix}_modal_selected_qty`]: 20, // how much will checked from management modal

        /* trigger showing data form canvas */
        [`${store_prefix}_show_create_canvas`]: false,
        [`${store_prefix}_show_edit_canvas`]: false,
    },
    reducers: {
        my_action: function (state, { type, payload }) {
            // console.log('this is');
            // console.log(type);
            // console.log(payload)
        },
        add: (state, { type, payload }) => {
            state.all = payload;
        },
        toggle_off_canvas_show: (state, { type, payload }) => {
            state.off_canvas_show = payload;
        },
        toggle_management_modal_show: (state, { type, payload }) => {
            state.management_modal_show = payload;
        },
        [`set_${store_prefix}_show_create_canvas`]: function (state, { type, payload }) {
            state[`${store_prefix}_show_create_canvas`] = payload;
        },
        [`set_${store_prefix}`]: function (state, { type, payload }) {
            state[`${store_prefix}`] = payload;
            console.log(payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.fulfilled, (state, { type, payload, meta }) => {
                state[`${store_prefix}s`] = payload;
            })
            .addCase(getUserData2.fulfilled, (state, { type, payload, meta }) => {
                state.all = payload.items;
            })
    },
})

export default storeSlice;