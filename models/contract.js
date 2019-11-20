import * as NccinfoAPI from '@/services/nccinfo-api'

class Contract {
  static get(id, options = {}) {
    return NccinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return NccinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return NccinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return NccinfoAPI.get(`/nrc20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return NccinfoAPI.get(`/nrc20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
