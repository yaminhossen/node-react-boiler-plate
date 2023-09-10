import dataStoreSlice, { getUserData } from "./store"
var setup = {
    prefix: 'user',
    layout_title: 'user management',
    actions: {
        get_data: () => null,
        set_data: () => null,
    },
}

setup.actions.get_data = () => setup.dispatch(getUserData());
setup.actions.set_data = (item) => setup.dispatch(dataStoreSlice.actions[`set_${setup.prefix}`](item));

export default setup;