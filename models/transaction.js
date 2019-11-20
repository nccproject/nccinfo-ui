import * as NccinfoAPI from '@/services/nccinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return NccinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return NccinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return NccinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return NccinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return NccinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return NccinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
