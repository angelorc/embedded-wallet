import PubStore from "zustand-pub";
import create from "zustand-vue";

interface IState {
  //
}

interface IAction {
  createWallet: () => void;
}

export const Pub = new PubStore('baswallet')

const walletStore = Pub.defineStore<IState & IAction>(
  'walletStore',
  (set) => ({
    createWallet() {
      console.log('called: createWallet')
    }
  })
)

const useWalletStore = create(walletStore)

export default useWalletStore