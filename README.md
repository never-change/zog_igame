# zog_igame

```

/<dir>
|__frontend<dir>                前端代码  
    |__igame<dir>                   赛事子系统react web 客户端  
|__backend<dir>                 后端代码  

```


# 关于 git 版本控制规范

### 1 新加入开发者 fork 代码

通过 github fork 功能，把代码仓库代码 fork 为自己github账号的代码。
此时 自己github 代码为完全独立的 完整代码  clone
最原始的代码仓库称之为：原仓库
原仓库包含两个最主要的分支：master 主分支；develop 开发分支。

### 2 clone 代码到本地

clone 你自己的 github 代码仓库到本地。
注意包含 master 和 develop 两个分支。

### 3 从develop 分支建立个人分支

从本地分支切换到develop 分支，然后建立自己的分支。
以后所有的常规修改提交都在自己的分支进行。
随时可以push代码到自己的github 上，自己的分支。

### 4 把自己开发的功能合并到 develop 分支

在自己的分支某功能开发测试完毕（注意合并前进行必要的测试）然后合并到 本地 develop
注意合并时用下面的方式：
```
    　　git checkout develop            # 切换到 开发分支
    　　git merge --no-ff feature-x     # 合并功能 feature-x
```
**注意**合并时添加 --no-ff 参数，目的是保留分支历史。

### 5 把代码 push 到自己的 github 的开发分支

        git push origin develop

### 6 向原仓库管理源提交 pull request 合并申请。
（以下步骤简略）
管理员收到代码 申请后 review 代码，合并到 原仓库 develop 分支。
测试人员 拉取 最新develop 代码，合并到本地，进行测试。
测试完毕，提交到 master 