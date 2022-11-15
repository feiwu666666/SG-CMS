/*
 * @Author: Cyan_Breeze
 * @Description:商品配置信息
 * @Date: 2022-11-11 17:59:53
 * @LastEditTime: 2022-11-14 16:42:21
 * @FilePath: \vue3-cms\src\views\main\product\goods\config\goods.config.ts
 */
export const goodsConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品', minWidth: '60', slotName: 'name' },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '25',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '25',
      slotName: 'newPrice'
    },
    { prop: 'desc', label: '描述', minWidth: '60', slotName: 'des' },
    {
      prop: 'status',
      label: '状态',
      minWidth: '40',
      slotName: 'enable'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '45',
      slotName: 'img'
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      minWidth: '25',
      slotName: 'inventoryCount'
    },
    {
      prop: 'saleCount',
      label: '销售数量',
      minWidth: '35',
      slotName: 'saleCount'
    },
    {
      prop: 'favorCount',
      label: '关注数量',
      minWidth: '35',
      slotName: 'favorCount'
    },
    {
      prop: 'address',
      label: '产地',
      minWidth: '25',
      slotName: 'address'
    },
    {
      label: '操作',
      minWidth: '80',
      slotName: 'operation'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
