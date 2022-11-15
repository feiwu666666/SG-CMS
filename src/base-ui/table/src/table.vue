<template>
  <div class="my-table">
    <!-- 页面上部分 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"> </slot>
        </div>
      </slot>
    </div>
    <!-- 表格部分 -->
    <el-table
      v-bind="childrenProps"
      border
      :data="listData"
      style="width: 100%"
      @selection-change="handleSelectChange"
    >
      <el-table-column
        type="selection"
        width="40"
        v-if="showSelectColumn"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        align="center"
        type="index"
        width="55"
        label="序列"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop ?? 0] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 页脚部分 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 8, 12, 15]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from 'vue'
import { propListType } from '../types/types'

export default defineComponent({
  props: {
    listCount: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<propListType[]>,
      required: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectChange', 'update:page'],
  setup(props, { emit }) {
    const small = ref(false)
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleSelectChange = (value: any) => {
      emit('selectChange', value)
    }
    const background = ref(false)
    const disabled = ref(false)
    const currentPage = 1
    const pageSize = toRefs(props).page.value.pageSize // toRefs将props响应式数据转换为常规数据
    return {
      disabled,
      background,
      currentPage,
      pageSize,
      small,
      handleCurrentChange,
      handleSizeChange,
      handleSelectChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    justify-content: end;
  }
}
</style>
