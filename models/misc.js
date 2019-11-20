import * as NccinfoAPI from '@/services/nccinfo-api'

class Misc {
  static info(options = {}) {
    return NccinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return NccinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return NccinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return NccinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return NccinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return NccinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return NccinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
