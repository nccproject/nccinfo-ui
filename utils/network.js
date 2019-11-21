export default {
  mainnet: {
    pubkey: 0x35,
    pubkeyhash: 0x35,
    scripthash: 0x1c,
    witness_v0_keyhash: 'nc',
    witness_v0_scripthash: 'nc'
  },
  testnet: {
    pubkey: 0x78,
    pubkeyhash: 0x78,
    scripthash: 0x6e,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
