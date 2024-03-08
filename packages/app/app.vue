<template>
  <div>
    <iframe src="http://localhost:3000" />

    <ClientOnly>
      <button @click="createWallet">Create Wallet</button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import PubStore from "zustand-pub";
import create from "zustand-vue";

interface IState {
  //
}

interface IAction {
  createWallet: () => void;
}

const pubStore = new PubStore('baswallet')
const walletStore = pubStore.getStore<IState & IAction>("walletStore");
const useWalletStore = create(walletStore || {});

const createWallet = useWalletStore((store) => store.createWallet);
</script>