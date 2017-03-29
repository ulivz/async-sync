# async-sync

一个基于Gulp的测试异步(并行)和同步(串行)性能对比的测试项目

## 描述

这里一共有2000个文件，每个文件有100行，一共`20w`行，每一行都需要处理。

`Async()`采用`promise.all()`对所有文件并行修改，以最后一个文件修改结束为终点;

`Sync()`采用`Generator`控制同步,文件串行修改,即后一个文件的读写会等待前一个文件的读写结束

耗时结果测试如下：

### Async

<img style="width: 50%" src="result/async-01.png" alt="">
<img style="width: 50%" src="result/async-02.png" alt="">


### Sync
<img style="width: 50%" src="result/sync-01.png" alt="">
<img style="width: 50%" src="result/sync-02.png" alt="">

> 差距也太大了吧 !!!!
> 差距也太大了吧 !!!!
> 差距也太大了吧 !!!!

## Conclusion

Some of the business scenarios that can use `parallel control`, please use `parallel control`.



