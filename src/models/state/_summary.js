/**
 * _summary model state
 */
import moment from 'moment';

export default {
  dataSource: [
    {
      key: 0,
      accident_time: moment('2017-09-10 12:20:45'),
      isNeedReturnGoods: '0',
      multiplier: 2,
      lossAmount: 3,
      description: '巴拉巴拉小魔仙',
    },
    {
      key: 1,
      accident_time: moment('2015-09-10 12:20:45'),
      isNeedReturnGoods: '1',
      multiplier: 4,
      lossAmount: 5,
      description: '巴拉巴拉小魔仙',
    }
  ],
}