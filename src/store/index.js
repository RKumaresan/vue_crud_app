import { createStore } from 'vuex';

export default createStore({
    state: {
        items: [
            { id: 1, name: 'Item 1', description: 'Description 1' },
        ]
    },
    mutations: {
        ADD_ITEM(state, item) {
            state.items.push(item);
        },
        EDIT_ITEM(state, editedItem) {
            const index = state.items.findIndex(item => item.id === editedItem.id);
            if (index !== -1) {
                state.items[index] = editedItem;
            }
        },
        DELETE_ITEM(state, itemId) {
            state.items = state.items.filter(item => item.id !== itemId);
        }
    },
    actions: {
        addItem({ commit }, item) {
            commit('ADD_ITEM', item);
        },
        editItem({ commit }, editedItem) {
            commit('EDIT_ITEM', editedItem);
        },
        deleteItem({ commit }, itemId) {
            commit('DELETE_ITEM', itemId);
        }
    },
    getters: {
        getItemById: (state) => (id) => {
            return state.items.find(item => item.id === id);
        }
    }
});
