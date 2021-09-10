1. 删除命令
rm -rf 111

#### brew
1. 查找
brew search vim
2. 安装
brew install vim

#### vim
:w 保存
:q 退出
I
h
j
k
l

#### Linux中的环境变量
1. 环境变量
PATH、PKG_CONFIG_PATH
2. 环境变量的变更
~/.bashrc (linux) | ~/.bash_profile (mac)
生效 sources

#### 内存泄漏
1. 不断的向系统申请内存
2. 申请的内存不用，也不释放

#### 野指针
- 占用别人的内存称为野指针