// 使用全局Properties时，需要在此文件中和所定义的properties同步 才能避免ts报错并且有代码提示
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: {
      formatTime: (value: string) => any
    }
  }
}

export {}
