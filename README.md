# async-sync

一个基于Gulp的测试异步(并行)和同步(串行)性能对比的测试项目
A gulp-based nodejs test project about performance comparison of sync(serial) and async(parallel) 


## Description

2000 documents, each file has 100 lines, a total of `20w` line, and each line needs to be modified.

`Async` uses `promise.all()` to modify all files in parallel, ending with the ending of the last file modification;

`Sync` using the `ES6 Generator` control synchronization, file serial modification, each reading and writing of a file  will wait for the previous file to read and write the end

Time consuming results are tested as follows:


### Async
![image_1bcdcisqc1v05823t0v1bl01q5h9.png-26.9kB][1]
![image_1bcdcnoq2isn1ubgaapnmu10m413.png-17.1kB][2]

### Sync
![image_1bcdck7vf1rb41mf816bc1tm8akjm.png-24.3kB][3]
![image_1bcdcq84u8as1b291kb90fcd1g.png-19.2kB][4]

> This gap is too big now !!!!

## Conclusion

Some of the business scenarios that can use `parallel control`, please use `parallel control`.

  [1]: http://static.zybuluo.com/a472590061/yb2wqmywsph1cfqornw19m85/image_1bcdcisqc1v05823t0v1bl01q5h9.png
  [2]: http://static.zybuluo.com/a472590061/ek5q45hkbg08euqnuioltwfv/image_1bcdcnoq2isn1ubgaapnmu10m413.png
  [3]: http://static.zybuluo.com/a472590061/1q7m2sh0ste3d3yvug7soyxf/image_1bcdck7vf1rb41mf816bc1tm8akjm.png
  [4]: http://static.zybuluo.com/a472590061/e9xpuwehj3wd8unb8h19dgzd/image_1bcdcq84u8as1b291kb90fcd1g.png