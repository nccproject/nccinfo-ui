import * as NccinfoAPI from '@/services/nccinfo-api'

class Address {
  static get(id, options = {}) {
    return NccinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return NccinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return NccinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return NccinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return NccinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    if (token) {
      return NccinfoAPI.get(`/address/${id}/nrc20-balance-history/${token}`, {params: {page, pageSize}, ...options})
    } else {
      return NccinfoAPI.get(`/address/${id}/nrc20-balance-history`, {params: {page, pageSize}, ...options})
    }
  }
}

export default Address
