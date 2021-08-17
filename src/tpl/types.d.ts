import { Answers } from "prompts";

export interface Options {
  // 是否覆盖
  force?: boolean

  // 是否获取本地模版
  offline?: boolean
}

export interface Template {
  // 模版名称
  name: string

  // 版本
  version?: string
}

export interface File {
  // 完整路径
  path: string

  // 内容
  contents: Buffer
}

export interface Context {
  // 模版名称
  readonly template: string

  // 项目名称
  readonly project: string

  // 配置
  readonly options: Options & Record<string, any>


  // 绝对路径地址
  src: string

  // 目标文件
  dest: string

  // 模版配置
  readonly config: Template

  // 用户选择答案
  readonly answers: Answers<string>

  readonly files: File[]

}