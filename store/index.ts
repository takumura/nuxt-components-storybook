import { GetterTree } from 'vuex'

export const state = () => ({
  version: 0,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  version: (state) => state.version,
}
