# async-sync

一个基于Gulp的测试异步(并行)和同步(串行)性能对比的测试项目

A gulp-based nodejs test project about performance comparison of sync(serial) and async(parallel) 


## Description

There are altogether 2000 documents, each file has 100 lines, a total of `20w` line, and each line needs to be modified.

`Async` uses `promise.all()` to modify all files in parallel, ending with the ending of the last file modification;

`Sync` using the `ES6 Generator` control synchronization, file serial modification, each reading and writing of a file  will wait for the previous file to read and write the end

Time consuming results are tested as follows:


### Async

<img style="width: 50%" src="result/async-01.png" alt="">
<img style="width: 50%" src="result/async-02.png" alt="">


### Sync
<img style="width: 50%" src="result/sync-01.png" alt="">
<img style="width: 50%" src="result/sync-02.png" alt="">

> This gap is too big now !!!!
> This gap is too big now !!!!
> This gap is too big now !!!!

## Conclusion

Some of the business scenarios that can use `parallel control`, please use `parallel control`.



