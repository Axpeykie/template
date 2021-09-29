module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'prettier' // 确保prettier在extends数组中排最后
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 不符合prettier格式的代码也会报错
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/no-multiple-template-root': 'off', // 允许vue3template下有多个根节点
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off', // 允许修改对象属性
    'class-methods-use-this': 'off', // 类方法不强制使用this
    'no-console': 'off', // 允许console
    'import/prefer-default-export': 'off', // 文件只有单个导出时不必需要默认导出
    'no-continue': 'off' // 允许在循环体中使用continue
  }
}
