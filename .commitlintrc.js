/*
 * @Descripttion:
 * @version:
 * @Author: luolei
 * @Date: 2021-05-06 18:07:05
 * @LastEditors: luolei
 * @LastEditTime: 2021-05-06 18:15:15
 */
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'update', 'fix', 'refactor', 'perf', 'style', 'docs', 'chore', 'improve', 'revert', 'test', 'build'
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};