<!--
 * @Author: Cyan_Breeze
 * @Description:每一个子页面的内容页面
 * @Date: 2022-11-06 23:52:58
 * @LastEditTime: 2022-11-15 17:41:47
 * @FilePath: \vue3-cms\src\components\page-content\src\page-content.vue
-->
<template>
  <div class="content">
    <my-table
      :listData="dataList"
      v-bind="contentConfig"
      :list-count="dataCount"
      :page="pageInfo"
      @update:page="pageInfoChange"
    >
      <template #header></template>
      <template #footer></template>
      <!-- hander中的插槽 -->
      <template #headerHandler>
        <el-button
          type="primary"
          :icon="Plus"
          v-if="isCreate"
          @click="handleNewClick"
          >新建用户</el-button
        >
      </template>
      <!--
        2.表格中的插槽
        当需要对表格的部分列进行转换或者格式化时，可以通过插槽来匹配相应的列，然后根据需求再重写一遍插槽中的内容
        #enable是子组件插槽的name  scope是子组件当前关于row的一个对象 取出row对象，即可获得当前行的所有数据
      -->
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }} </span>
      </template>
      <template #createAt="scope">
        <!-- <strong>{{ new Date(scope.row.createAt).toLocaleString() }}</strong>   常规转换时间方式  下面用全局属性来实现时间转换-->
        <span>{{ $filters.formatTime(scope.row.createAt) }} </span>
      </template>
      <template #enable="scope">
        <el-button :type="scope.row.enable ? 'primary' : 'danger'" plain>{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #operation="scope">
        <div class="operation">
          <el-button
            size="default"
            :icon="Edit"
            link
            type="primary"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            size="default"
            :icon="Delete"
            link
            type="danger"
            v-if="isDelete"
            @click="handleClickDelete(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 在pageContent中动态的插入插槽
      -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, computed, ref } from 'vue'
import { Edit, Delete, Plus } from '@element-plus/icons-vue'
import { usePermission } from '@/hooks/use-permission'

import myTable from '@/base-ui/table'

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    myTable
  },
  emits: ['clickEditBtn', 'clickNewBtn'],
  setup(props, { emit }) {
    const store = useStore()
    // 1. 查询用户拥有的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')
    const pageInfo = ref({ currentPage: 1, pageSize: 5 })
    // 2. 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // 如果没有查询权限  则不发送网络请求
      if (!isQuery) return
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize, // 偏移量
          size: pageInfo.value.pageSize, // 每次请求的数据条数
          ...queryInfo
        }
      })
    }
    // 如果子组件中的pageIfo改变，就将父组件中的pageINfo
    const pageInfoChange = (childvalue: any) => {
      pageInfo.value.currentPage = childvalue.currentPage
      pageInfo.value.pageSize = childvalue.pageSize
      getPageData()
    }
    // watch(pageInfo.value, () => {
    //   console.log('检测到pageInfo的改变')
    // })
    getPageData()
    // 3. 获取当前页面的数据
    const dataList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    )
    const dataCount = computed(() => {
      return store.getters['systemModule/pageListCount'](props.pageName)
    })
    // 4. 筛选出每个页面特有的插槽
    const otherPropSlots = props.contentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'headerHandler') return false
      if (item.slotName === 'enable') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'operation') return false
      return true
    })
    // 增删改
    const handleClickDelete = (item: any) => {
      console.log(item)
      store.dispatch('systemModule/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleEditClick = (item: any) => {
      emit('clickEditBtn', item)
    }
    const handleNewClick = () => {
      emit('clickNewBtn')
    }
    return {
      handleEditClick,
      handleNewClick,
      handleClickDelete,
      isCreate,
      isDelete,
      isQuery,
      isUpdate,
      otherPropSlots,
      pageInfoChange,
      pageInfo,
      getPageData,
      dataList,
      dataCount,
      Edit,
      Delete,
      Plus
    }
  }
})
</script>
<style scoped>
.content {
  margin: 0px 20px;
  border-top: 10px solid #f5f5f5;
}
</style>
