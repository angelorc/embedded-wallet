<template>
  <div>
    <ClientOnly>
      <button @click="createWallet">Create Wallet</button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import useWalletStore from './store';
const createWallet = useWalletStore((store) => store.createWallet);
</script>